from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from reportlab.pdfgen import canvas
from datetime import datetime
import os
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)

# ---------------- IMAGE SEGMENTATION FUNCTION ----------------
def generate_oil_spill_image(image_path):
    img = cv2.imread(image_path)

    IMAGE_SIZE = 256
    img = cv2.resize(img, (IMAGE_SIZE, IMAGE_SIZE))

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5, 5), 0)

    THRESHOLD_VALUE = 90
    _, raw_mask = cv2.threshold(
        blur, THRESHOLD_VALUE, 255, cv2.THRESH_BINARY_INV
    )

    kernel = np.ones((5, 5), np.uint8)
    clean_mask = cv2.morphologyEx(raw_mask, cv2.MORPH_OPEN, kernel)
    clean_mask = cv2.morphologyEx(clean_mask, cv2.MORPH_CLOSE, kernel)

    contours, _ = cv2.findContours(
        clean_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
    )
    mask = np.zeros_like(clean_mask)

    MIN_AREA = 1500
    for cnt in contours:
        if cv2.contourArea(cnt) > MIN_AREA:
            cv2.drawContours(mask, [cnt], -1, 255, -1)

    oil_pixels = np.sum(mask == 255)
    total_pixels = mask.size
    oil_percent = round((oil_pixels / total_pixels) * 100, 2)

    overlay = img.copy()
    overlay[mask == 0] = [235, 206, 135]
    overlay[mask == 255] = [203, 192, 255]

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cv2.drawContours(overlay, contours, -1, (0, 0, 0), 2)

    result = cv2.addWeighted(img, 0.7, overlay, 0.3, 0)

    metadata = {
        "image_resolution": "256 x 256",
        "segmentation_method": "Threshold-based Image Segmentation",
        "threshold_value": THRESHOLD_VALUE
    }

    return result, overlay, mask, oil_percent, metadata

# ---------------- PREDICT ROUTE ----------------
@app.route("/predict", methods=["POST"])
def predict():
    image = request.files["image"]

    os.makedirs("uploads", exist_ok=True)
    os.makedirs("outputs", exist_ok=True)
    os.makedirs("reports", exist_ok=True)

    image_path = os.path.join("uploads", image.filename)
    image.save(image_path)

    result_img, overlay_img, mask, oil_percent, metadata = generate_oil_spill_image(image_path)

    result_name = "result_" + image.filename
    overlay_name = "overlay_" + image.filename
    mask_name = "mask_" + image.filename

    cv2.imwrite(os.path.join("outputs", result_name), result_img)
    cv2.imwrite(os.path.join("outputs", overlay_name), overlay_img)
    cv2.imwrite(os.path.join("outputs", mask_name), mask)

    OIL_THRESHOLD = 3.0
    if oil_percent >= OIL_THRESHOLD:
        status = "Oil Spill Detected"
        confidence = round(90 + (oil_percent / 100) * 10, 2)
    else:
        status = "No Oil Spill Detected"
        confidence = round(85 - oil_percent, 2)

    affected_area = round(oil_percent * 1.5, 2)
    time = datetime.now().strftime("%d-%m-%Y %H:%M:%S")

    name, _ = os.path.splitext(image.filename)
    pdf_filename = f"{name}.pdf"
    pdf_path = os.path.join("reports", pdf_filename)

    c = canvas.Canvas(pdf_path)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, 800, "OilGps System – Oil Spill Detection Report")

    c.setFont("Helvetica", 12)
    c.drawString(50, 760, f"Image Name: {image.filename}")
    c.drawString(50, 740, f"Detection Status: {status}")
    c.drawString(50, 720, f"Confidence Score: {confidence}%")
    c.drawString(50, 700, f"Oil Spill Percentage: {oil_percent}%")
    c.drawString(50, 680, f"Affected Area: {affected_area} sq.km")
    c.drawString(50, 660, f"Uploaded Time: {time}")

    c.showPage()
    c.save()

    return jsonify({
        "status": status,
        "confidence": confidence,
        "oil_percent": oil_percent,
        "affected_area": affected_area,
        "time": time,
        "metadata": metadata,
        "original_image": f"/uploads/{image.filename}",
        "result_image": f"/outputs/{result_name}",
        "overlay_image": f"/outputs/{overlay_name}",
        "mask_image": f"/outputs/{mask_name}",
        "pdf": f"/reports/{pdf_filename}"
    })

@app.route("/outputs/<filename>")
def get_output(filename):
    return send_from_directory("outputs", filename)

@app.route("/uploads/<filename>")
def get_upload(filename):
    return send_from_directory("uploads", filename)

@app.route("/reports/<filename>")
def get_report(filename):
    return send_from_directory("reports", filename)

if __name__ == "__main__":
    app.run(debug=True)

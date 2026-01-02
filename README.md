# Installation & Setup Guide

## Prerequisites
- Node.js (v18 or above)
- Python (v3.10 or v3.11)
- Git

## Step 1: Clone the Repository
git clone https://github.com/your-username/OilspillGps-System.git
cd OilspillGps-System

## Step 2: Frontend Setup (React)
cd frontend
npm install
npm start

Frontend will run at: http://localhost:3000

## Step 3: Backend Setup (Flask)
cd backend
python -m venv venv

Activate virtual environment

Windows:
venv\Scripts\activate

Linux / macOS:
source venv/bin/activate

## Step 4: Install Python Dependencies
pip install flask flask-cors opencv-python numpy reportlab

## Step 5: Run Backend Server
python app.py

Backend will run at: http://localhost:5000

## Step 6: Run Application
1. Open browser and go to http://localhost:3000
2. Upload an image
3. Click Upload & Analyze
4. View results and download PDF report

## Notes
- node_modules and venv folders are not included in the repository
- Backend must be running before using frontend
- Generated PDF reports are stored in the reports folder


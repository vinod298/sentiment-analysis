# Sentiment Analysis Project

This project implements a sentiment analysis system using React for the frontend and Python (Flask) for the backend. The system analyzes text input and determines whether the sentiment is positive, negative, or neutral.

## Project Structure
```
sentiment/
├── frontend/           # React frontend application
├── backend/           # Python Flask backend
└── README.md
```

## Features
- Real-time sentiment analysis
- Modern and responsive UI
- RESTful API backend
- Natural Language Processing using NLTK
- Machine Learning model for sentiment classification

## Prerequisites
- Node.js (v14 or higher)
- Python 3.8 or higher
- pip (Python package manager)
- npm (Node package manager)

## Installation

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
3. Activate the virtual environment:
   - Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - Unix/MacOS:
     ```bash
     source venv/bin/activate
   ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Backend
1. Activate the virtual environment (if not already activated)
2. Start the Flask server:
   ```bash
   python app.py
   ```
The backend will run on http://localhost:5000

### Frontend
1. In a new terminal, navigate to the frontend directory
2. Start the development server:
   ```bash
   npm start
   ```
The frontend will run on http://localhost:3000

## Usage
1. Open your browser and navigate to http://localhost:3000
2. Enter text in the input field
3. Click "Analyze" to get the sentiment analysis result
4. View the sentiment score and classification

## Technologies Used
- Frontend:
  - React
  - Material-UI
  - Axios
- Backend:
  - Python
  - Flask
  - NLTK
  - scikit-learn
  - pandas
  - numpy

## License
MIT License 
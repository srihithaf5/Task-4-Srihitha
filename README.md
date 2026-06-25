# Intern Management Dashboard

A Full Stack web application that demonstrates Frontend and Backend Integration using HTML, CSS, JavaScript, Node.js, and Express.js.

## Project Overview

This project fetches intern data from a backend API and displays it dynamically on a modern dashboard interface.

The application demonstrates:

- API Integration
- Asynchronous JavaScript (Fetch API)
- JSON Data Handling
- Dynamic DOM Manipulation
- Error Handling
- Responsive UI Design

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js
- CORS

---

## Project Structure

```text
project-4/

├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/

├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js

└── README.md
```

---

## Installation & Setup

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Backend Folder

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

### Start Backend Server

```bash
node server.js
```

Server will run on:

```text
http://localhost:5000
```

---

## API Endpoint

### Get All Interns

```http
GET /api/interns
```

### Sample Response

```json
[
  {
    "id": 1,
    "name": "Srihitha",
    "role": "Frontend Developer"
  },
  {
    "id": 2,
    "name": "Rahul",
    "role": "Backend Developer"
  }
]
```

---

## Features

- Modern Dashboard UI
- Fetch Data from Backend API
- Display Dynamic Intern Cards
- Search Functionality
- Loading Spinner
- API Status Indicator
- Error Handling with Try/Catch
- Responsive Design
- Glassmorphism Styling

---

## Application Flow

```text
User Clicks Load Button
          ↓
Frontend Sends API Request
          ↓
Backend Receives Request
          ↓
Returns JSON Response
          ↓
Frontend Parses Data
          ↓
DOM Updates Dynamically
          ↓
Intern Information Displayed
```

---

### Backend Running

```text
Server running on port 5000
```

### API Response

```text
http://localhost:5000/api/interns
```

### Dashboard

- Intern Cards
- Search Feature
- API Status
- Statistics Section

---

## Future Improvements

- Add New Intern
- Edit Intern Details
- Delete Intern
- Database Integration (MongoDB)
- Authentication & Authorization
- Dark/Light Theme Toggle
- Charts and Analytics

---
## Screenshots

<img width="1902" height="936" alt="image" src="https://github.com/user-attachments/assets/b02263c8-5387-4883-b2fc-449b255d1cd1" />



<img width="1903" height="943" alt="image" src="https://github.com/user-attachments/assets/b28ed182-760a-4a4f-bc61-c40f82cf69ff" />




<img width="1895" height="912" alt="image" src="https://github.com/user-attachments/assets/95df0775-bc3b-46dd-b9ba-b973aa2c3428" />



<img width="1907" height="960" alt="image" src="https://github.com/user-attachments/assets/143a9365-f116-46f2-9ded-644f580e80d3" />


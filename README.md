# Job Portal

A full-stack Job Portal application built using React and Django REST Framework. The platform allows recruiters to post jobs and job seekers to browse and apply for available opportunities.

## Live Demo

Frontend: https://job-portal-app-eta-two.vercel.app/

Backend API: https://job-portal-app-1rfk.onrender.com/api/jobs/

## Features

* User Registration and Login
* JWT Authentication
* Custom User Roles (Recruiter & Job Seeker)
* Create, View, Update, and Delete Jobs
* Apply for Jobs
* Job Search Functionality
* Filter Jobs by Location
* Responsive User Interface
* RESTful API Integration

## Tech Stack

### Frontend

* React.js
* Axios
* React Router DOM
* CSS

### Backend

* Django
* Django REST Framework
* Simple JWT
* SQLite

### Deployment

* Vercel (Frontend)
* Render (Backend)

## API Endpoints

### Authentication

* `POST /api/users/register/`
* `POST /api/users/login/`
* `POST /api/users/refresh/`

### Jobs

* `GET /api/jobs/`
* `POST /api/jobs/`
* `PUT /api/jobs/{id}/`
* `DELETE /api/jobs/{id}/`

### Applications

* `GET /api/applications/`
* `POST /api/applications/`

## Installation

### Backend

```bash
cd server
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## Author

Ritesh Melkani

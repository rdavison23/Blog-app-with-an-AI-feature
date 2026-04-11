# Blog-app-with-an-AI-feature

A full‑stack blog application that allows users to create, read, update, and delete posts — with an integrated AI translation feature powered by Google Cloud Translation API.
Users can instantly translate any blog post into multiple languages (Amharic, Spanish, French, etc.) with smooth UI switching and built‑in caching for performance.

# Features

Blog Functionality

- Create new posts
- View all posts
- View a single post
- Edit existing posts
- Delete posts
- Upload or link images
- Clean, responsive UI

AI Translation

- Translate posts into multiple languages
- Uses Google Cloud Translation API
- Caches translations on the frontend for instant switching
- Supports English, Amharic, Spanish, French (easily extendable)

Frontend

- React + React Router
- Language dropdown
- Post detail page with translation toggle
- Edit + Delete buttons
- Clean card‑based layout

Backend

- Node.js + Express
- PostgreSQL database
- REST API for CRUD operations
- Google Cloud Translation integration
- Environment variable support

# Tech Stack

Frontend

- React
- React Router
- CSS Modules / Custom CSS

Backend

- Node.js
- Express
- PostgreSQL
- pg (node‑postgres)

AI / Cloud

- Google Cloud Translation API
- Service Account Authentication

# Installation & Setup

Clone the repository

- `git clone your-repo-url`
- `cd Blog-app-with-an-AI-feature`

Backend Setup

- Install backend dependencies
- `cd server`
- `npm install`

Create a .env file inside /server

- DATABASE_URL=postgres://your-db-url

Login to google cloud ([Instructions](https://docs.cloud.google.com/docs/authentication/provide-credentials-adc))

- `gcloud auth application-default login`
- `gcloud auth application-default set-quota-project <YOUR_PROJECT_ID>`

Start the backend

- `npm run dev`
- Backend runs on:http://localhost:3001

Frontend Setup

- Install frontend dependencies
- `cd client`
- `npm install`
- `npm run dev`
- Frontend runs on: http://localhost:5173

# API Endpoints

- GET /posts Get all posts
- GET /posts/:id Get a single post
- GET /posts/:id?lang=am Get translated post
- POST /posts Create a new post
- PUT /posts/:id Update a post
- DELETE /posts/:id Delete a post

# Translation Flow

1. User selects a language from the dropdown
2. Frontend checks cache
3. If not cached → calls backend
4. Backend sends text to Google Cloud Translation
5. Google returns translated text
6. Backend returns { translatedBody }
7. Frontend displays translation and caches it

# Screenshots

![Home](server/assets/Home.png)
![New Post](<server/assets/New Post.png>)
<video controls src="Demo.mov" title="Demo"></video>

# Future Improvements

- Finish Edit page UI enhancements
- Add authentication (admin‑only delete/edit)
- Add dark mode
- Add categories/tags
- Store translations in the database
- Add image uploads instead of URLs

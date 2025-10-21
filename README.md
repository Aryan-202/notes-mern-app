
# Notes App - MERN Stack

A full-stack notes application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create, read, update, and delete notes with a clean and intuitive user interface.

## 🚀 Features

- **User Authentication** - Register and login functionality
    
- **CRUD Operations** - Create, read, update, and delete notes
    
- **Rich Text Editor** - Format your notes with bold, italics, lists, and more
    
- **Real-time Updates** - Instant synchronization across devices
    
- **Responsive Design** - Works seamlessly on desktop and mobile
    
- **Search Functionality** - Quickly find your notes
    
- **Categories/Tags** - Organize notes with categories
    
- **Dark/Light Mode** - Toggle between themes
    

## 🛠️ Tech Stack

### Frontend

- **React.js** - UI framework
    
- **React Router** - Client-side routing
    
- **Axios** - HTTP client
    
- **CSS3** - Styling with modern features
    
- **React Quill** - Rich text editor
    
- **Context API** - State management
    

### Backend

- **Node.js** - Runtime environment
    
- **Express.js** - Web framework
    
- **MongoDB** - Database
    
- **Mongoose** - ODM for MongoDB
    
- **JWT** - Authentication
    
- **bcryptjs** - Password hashing
    
- **CORS** - Cross-origin resource sharing
    

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
    
- MongoDB (local or Atlas)
    
- npm or yarn
    

### Steps

1. **Clone the repository**
```bash  
git clone https://github.com/yourusername/notes-app-mern.git
cd notes-app-mern  
```
    
2. **Install dependencies**
    
    ```bash
    
    # Install server dependencies
    cd backend
    npm install
    
    # Install client dependencies
    cd ../frontend
    npm install
    ```
    
3. **Environment Setup**
    
    Create a `.env` file in the backend directory:
    
    ```env
    
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/notesapp
    JWT_SECRET=your_jwt_secret_key
    NODE_ENV=development
    ```
    
4. **Start the application**
    
    ```bash
    
    # Start backend server (from backend directory)
    npm run dev
    
    # Start frontend development server (from frontend directory)
    npm start
    
    ```
    The app will be available at:
    
    - Frontend: [http://localhost:3000](http://localhost:3000/)
        
    - Backend: [http://localhost:5000](http://localhost:5000/)
        

## 🏗️ Project Structure

```text

notes-app-mern/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
└── README.md
```
## 🎯 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
    
- `POST /api/auth/login` - User login
    
- `GET /api/auth/me` - Get current user
    

### Notes

- `GET /api/notes` - Get all notes for user
    
- `GET /api/notes/:id` - Get single note
    
- `POST /api/notes` - Create new note
    
- `PUT /api/notes/:id` - Update note
    
- `DELETE /api/notes/:id` - Delete note
    

## 🚀 Deployment

### Backend Deployment (Heroku)

bash

# In backend directory
heroku create your-notes-app-backend
git add .
git commit -m "Deploy backend"
git push heroku main

### Frontend Deployment (Netlify/Vercel)

bash

# Build the frontend
cd frontend
npm run build

# Deploy the build folder to your preferred platform

### Environment Variables for Production

Update your production environment variables with:

- MongoDB Atlas connection string
    
- Production JWT secret
    
- Frontend URL for CORS
    

## 🤝 Contributing

1. Fork the project
    
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
    
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
    
4. Push to the branch (`git push origin feature/AmazingFeature`)
    
5. Open a Pull Request
    

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://license/) file for details.

## 👨‍💻 Author

Your Name

- GitHub: [@Aryan-202](https://github.com/Aryan-202)
    
- Email: aryanvishwakarma275@gmail.com
    

## 🙏 Acknowledgments

- MERN stack documentation
    
- React Quill for rich text editing
    
- MongoDB Atlas for cloud database
    
- Icons from [Feather Icons](https://feathericons.com/)
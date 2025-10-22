# Notes App - MERN Stack

A full-stack notes application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create, read, update, and delete notes with a clean and intuitive user interface.

## 🚀 Features

- **User Authentication** - Secure register and login functionality with JWT
    
- **CRUD Operations** - Create, read, update, and delete personal notes
    
- **Rich Text Support** - Format your notes with proper text editing capabilities
    
- **Real-time Updates** - Instant synchronization across user sessions
    
- **Responsive Design** - Works seamlessly on desktop and mobile devices
    
- **Secure Data** - User-specific note privacy and protection
    
- **Modern UI** - Beautiful gradient designs and smooth animations
    

## 🛠️ Tech Stack

### Frontend

- **React.js 19** - Modern UI framework with latest features
    
- **React Router v7** - Client-side routing with protected routes
    
- **Vite** - Fast build tool and development server
    
- **CSS3 Modules** - Scoped styling with modern CSS features
    
- **Context API** - State management for authentication
    

### Backend

- **Node.js** - Runtime environment
    
- **Express.js 5** - Web framework with latest improvements
    
- **MongoDB** - NoSQL database for data storage
    
- **Mongoose 8** - ODM for MongoDB with enhanced features
    
- **JWT** - Secure authentication tokens
    
- **bcryptjs** - Password hashing for security
    
- **CORS** - Cross-origin resource sharing
    

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher recommended)
    
- MongoDB (local installation or MongoDB Atlas)
    
- npm or yarn package manager
    

### Setup Instructions

1. **Clone the repository**
    

```bash

git clone https://github.com/Aryan-202/notes-mern-app.git
cd notes-mern-app
```
2. **Install dependencies**
    

```bash

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```
3. **Environment Setup**
    

Create a `.env` file in the server directory:

```env

PORT=5000
MONGODB_URI=mongodb://localhost:27017/notesapp
JWT_SECRET=your_jwt_secret_key_here_make_it_strong
NODE_ENV=development
```

Create a `.env` file in the client directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

4. **Start the application**
    

```bash

# Start backend server (from server directory)
npm run dev

# Start frontend development server (from client directory)
npm run dev
```

The app will be available at:

- Frontend: [http://localhost:5173](http://localhost:5173/)
    
- Backend: [http://localhost:5000](http://localhost:5000/)
    

## 🏗️ Project Structure

```text

notes-mern-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── auth/       # Authentication components
│   │   │   ├── home/       # Landing page
│   │   │   └── notes/      # Notes management
│   │   ├── context/        # React context for state
│   │   └── assets/         # Static assets
│   ├── public/            # Public files
│   └── package.json
├── server/                # Express backend
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routers/          # API routes
│   ├── middleware/       # Custom middleware
│   ├── config/          # Database configuration
│   └── server.js        # Server entry point
└── README.md
```

## 🎯 API Endpoints

### Authentication Routes

- `POST /api/auth/register` - User registration
    
- `POST /api/auth/login` - User login
    

### Notes Routes (Protected)

- `GET /api/notes` - Get all notes for authenticated user
    
- `GET /api/notes/:id` - Get single note by ID
    
- `POST /api/notes` - Create new note
    
- `PUT /api/notes/:id` - Update existing note
    
- `DELETE /api/notes/:id` - Delete note
    

## 🚀 Deployment

### Backend Deployment (Render/Railway)

```bash

# Build and deploy from server directory
# Ensure environment variables are set in your hosting platform

```
### Frontend Deployment (Vercel/Netlify)

```bash

# Build the frontend
cd client
npm run build
```

# Deploy the dist folder to your preferred platform

### Environment Variables for Production

Update your production environment variables with:

- MongoDB Atlas connection string
    
- Production JWT secret
    
- Frontend URL for CORS configuration
    

## 🤝 Contributing

1. Fork the project
    
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
    
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
    
4. Push to the branch (`git push origin feature/AmazingFeature`)
    
5. Open a Pull Request
    

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Aryan-202/notes-mern-app/tree/main?tab=MIT-1-ov-file) file for details.

## 👨‍💻 Author

**Aryan Vishwakarma**

- GitHub: [@Aryan-202](https://github.com/Aryan-202)
    
- Email: aryanvishwakarma275@gmail.com
    

## 🙏 Acknowledgments

- MERN stack documentation and community
    
- React team for the excellent framework
    
- MongoDB for robust database solutions
    
- Express.js for seamless server development
    
- Vite team for the fast build tool
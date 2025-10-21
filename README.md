# খানাপিনা (KhanaPina) - Restaurant Management System

A modern, full-stack restaurant management application built with React, Firebase, and Node.js. Features Bengali cuisine focus with comprehensive food ordering and management capabilities.

## 🌟 Live Demo

- **Frontend**: [https://khana-pina-cf84e.web.app](https://khana-pina-cf84e.web.app)
- **Backend**: [https://restaurant-management-server-side-five.vercel.app](https://restaurant-management-server-side-five.vercel.app)

## 🚀 Features

### Public Features
- **Home Page**: Hero section with video carousel, featured dishes, chef profiles, reviews, and gallery
- **All Foods**: Browse complete food collection with search functionality
- **Food Details**: Detailed view of individual food items with purchase option
- **Gallery**: Image gallery with lightbox functionality
- **Authentication**: Email/password and Google login/registration

### Private Features (Authenticated Users)
- **Add Food**: Create new food items with details and images
- **My Foods**: Manage your added food items with update functionality
- **My Orders**: View and manage your food orders with delete option
- **Purchase System**: Complete food ordering with inventory management

### Technical Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS and DaisyUI
- **Smooth Animations**: Framer Motion animations throughout the application
- **Custom Loading Spinners**: Branded loading states with restaurant theme
- **Private Routes**: Protected pages requiring authentication
- **Error Boundaries**: Graceful error handling and recovery
- **Real-time Search**: Instant food search across multiple fields
- **Theme Support**: Light/dark mode toggle

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Firebase Auth** - Authentication system
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **SweetAlert2** - Beautiful alerts
- **Moment.js** - Date formatting
- **Yet Another React Lightbox** - Image lightbox

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Vercel** - Deployment platform

### Deployment
- **Firebase Hosting** - Frontend deployment
- **Vercel** - Backend deployment

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- MongoDB database

### Frontend Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd "Restaurant Management Client Side"
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables**
Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

4. **Start development server**
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── home/              # Home page sections
│   ├── pages/             # Main pages
│   ├── ui/                # Reusable UI components
│   ├── Navbar/            # Navigation component
│   ├── themes/            # Theme toggle component
│   ├── PrivateRoute/      # Route protection
│   └── ErrorBoundary/     # Error handling
├── context/               # React Context
├── Firebase/              # Firebase configuration
├── Routes/                # Route definitions
├── assets/                # Static assets
└── layout/                # Layout components
```

## 🔐 Authentication

- **Email/Password**: Traditional authentication
- **Google OAuth**: Social login integration
- **Protected Routes**: Private pages require authentication
- **User Profiles**: Profile management with photo upload

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Enhanced experience on tablets
- **Desktop**: Full-featured desktop interface
- **Breakpoints**: sm, md, lg, xl responsive breakpoints

## 🎨 Design System

- **Colors**: Primary, secondary, accent color scheme
- **Typography**: Bengali (Mina) and English (Play) fonts
- **Components**: Consistent DaisyUI component usage
- **Animations**: Smooth Framer Motion transitions
- **Icons**: React Icons integration

## 🔧 Key Components

### Authentication System
- Firebase Authentication integration
- Context-based state management
- Protected route implementation
- Loading states and error handling

### Food Management
- CRUD operations for food items
- Image upload and management
- Category-based organization
- Search and filter functionality

### Order System
- Shopping cart functionality
- Order placement and tracking
- Inventory management
- Order history and management

## 🚀 Deployment

### Frontend (Firebase)
```bash
npm run build
firebase deploy
```

### Environment Setup
- Configure Firebase project
- Set up authentication providers
- Configure hosting settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Solaiman Islam**
- Email: solaimanislamshadhin123@gmail.com
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- Firebase for authentication and hosting
- Vercel for backend deployment
- Unsplash for food images
- DaisyUI for component library
- Framer Motion for animations

---

**খানাপিনা** - Where Every Bite Tells a Story 🍽️
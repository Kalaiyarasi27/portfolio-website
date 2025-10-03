# Kalaiyarasi N - Portfolio Website

![Portfolio Preview](https://kalaiyarasi-portfolio.netlify.app/KALAIYARASI%20N.jpeg)

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer. Built with pure HTML, CSS, JavaScript and powered by Firebase for the contact form functionality.

## 🌐 Live Demo

**Live Website:** [https://kalaiyarasi-portfolio.netlify.app/](https://kalaiyarasi-portfolio.netlify.app/)

## ✨ Features

- **📱 Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **⚡ Fast Performance** - Lightweight and optimized for speed
- **📧 Contact Form** - Firebase-powered form with real-time database storage
- **🎯 Smooth Scrolling** - Seamless navigation between sections
- **🌙 Professional Design** - Minimalist and visually appealing interface
- **🔒 Secure** - HTTPS enabled with SSL certificate

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styles, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and form handling
- **Font Awesome** - Beautiful icons
- **Google Fonts** - Poppins font family

### Backend & Services
- **Firebase** - Backend-as-a-Service
- **Firestore** - NoSQL database for contact form submissions
- **Netlify** - Hosting and continuous deployment

## 🚀 Project Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Basic understanding of HTML, CSS, JavaScript
- Firebase account (for contact form functionality)

### File Structure
```
portfolio-website/
│
├── index.html              # Main HTML file
├── style.css               # All styles and animations
├── script.js               # JavaScript functionality
├── KALAIYARASI N.jpeg      # Profile picture
├── (other project images)  # Project screenshots
└── README.md               # Project documentation
```

### Local Development Setup

1. **Clone or Download the Project**
   ```bash
   # If using Git
   git clone https://github.com/Kalaiyarasi27/portfolio-website.git
   cd portfolio-website
   
   # Or simply download and extract the project files
   ```

2. **Open in Browser**
   - Method 1: Double-click `index.html` file
   - Method 2: Use VS Code Live Server extension
   - Method 3: Use local server: `python -m http.server 8000`

3. **Customize for Your Use**
   - Update personal information in `index.html`
   - Modify colors and styles in `style.css`
   - Add your projects and experience details

### Firebase Setup (For Contact Form)

1. **Create Firebase Project**
   ```bash
   - Go to Firebase Console → Create New Project
   - Enable Firestore Database
   - Register web app and get configuration
   ```

2. **Update Firebase Configuration**
   Replace the config in `script.js` with your actual Firebase values:
   ```javascript
   const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-project.firebaseapp.com",
       projectId: "your-project-id",
       storageBucket: "your-project.appspot.com",
       messagingSenderId: "your-sender-id",
       appId: "your-app-id"
   };
   ```

3. **Set Up Firestore Security Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /contacts/{document} {
         allow read, write: if true;
       }
     }
   }
   ```

### Deployment Setup

#### Option 1: Netlify (Recommended)
1. **Zip your project folder**
2. **Go to [netlify.com](https://netlify.com)**
3. **Drag and drop zip file** to deploy
4. **Get live URL** automatically

#### Option 2: GitHub + Netlify (For automatic updates)
1. **Push to GitHub repository**
2. **Connect GitHub repo to Netlify**
3. **Automatic deployments** on every git push

#### Option 3: Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize and deploy
firebase login
firebase init hosting
firebase deploy
```




<div align="center">

### **Built with ❤️ by Kalaiyarasi N**

[![Portfolio](https://img.shields.io/badge/🌐_Visit_Portfolio-kalaiyarasi--portfolio.netlify.app-blue)](https://kalaiyarasi-portfolio.netlify.app/)
[![Email](https://img.shields.io/badge/📧_Email-kalaiyarasi385@gmail.com-red)](mailto:kalaiyarasi385@gmail.com)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-Connect-blue)](https://www.linkedin.com/in/kalaiyarasi-nagarajan-80a37b267/)

</div>

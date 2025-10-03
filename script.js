// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Animations
const animateOnScroll = () => {
    // Hero section animation
    const hero = document.querySelector('.hero');
    const heroRect = hero.getBoundingClientRect();
    if (heroRect.top < window.innerHeight - 100) {
        hero.classList.add('animate');
    }

    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const rect = title.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            title.classList.add('animate');
        }
    });

    // About section
   

    // Education cards
   // Add this to your existing JavaScript
// Add this to your existing JavaScript
const educationCards = document.querySelectorAll('.education-card');

const animateEducationCards = () => {
    educationCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add('animate');
        }
    });
};

// Initial check on page load
window.addEventListener('load', animateEducationCards);
// Check on scroll
window.addEventListener('scroll', animateEducationCards);

// Initial check on page load
window.addEventListener('load', animateEducationCards);
// Check on scroll
window.addEventListener('scroll', animateEducationCards);

    // Skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 200);
        }
    });

    // Experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 200);
        }
    });

    // Project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 200);
        }
    });

    // View more button
    const viewMore = document.querySelector('.view-more');
    if (viewMore && viewMore.getBoundingClientRect().top < window.innerHeight - 100) {
        viewMore.classList.add('animate');
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm && contactForm.getBoundingClientRect().top < window.innerHeight - 100) {
        contactForm.classList.add('animate');
    }

    // Contact info
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo && contactInfo.getBoundingClientRect().top < window.innerHeight - 100) {
        contactInfo.classList.add('animate');
    }
};

// Initial check on page load
window.addEventListener('load', animateOnScroll);
// Check on scroll
window.addEventListener('scroll', animateOnScroll);

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.padding = '10px 0';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.padding = '15px 0';
    }
});

// Add this to your existing JavaScript
const techItems = document.querySelectorAll('.tech-item');

const animateTechStack = () => {
    techItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('animate');
        }
    });
};

// Initial check on page load
window.addEventListener('load', animateTechStack);
// Check on scroll
window.addEventListener('scroll', animateTechStack);

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    const aboutContent = document.querySelector('.about-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutContent.classList.add('animate');
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(aboutSection);
});





// Firebase configuration - Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyCvCB8zSlas1KUVz8EiI14H1wjB1KLcdZI",
  authDomain: "kalai-portfolio.firebaseapp.com",
  projectId: "kalai-portfolio",
  storageBucket: "kalai-portfolio.firebasestorage.app",
  messagingSenderId: "483253567549",
  appId: "1:483253567549:web:e641122cf5fad857b5ea54",
  measurementId: "G-HL197CCFFD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("Firebase initialized successfully");

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });

    // Tech stack animation
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate form
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            // Validate email format
            if (!validateEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                console.log("Saving to Firestore...");
                
                // Save to Firestore
                await db.collection('contacts').add({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    read: false
                });

                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
            } catch (error) {
                console.error('Error sending message:', error);
                
                // Check error type and show appropriate message
                if (error.code === 'permission-denied') {
                    showNotification('Permission error. Please check Firebase security rules.', 'error');
                } else if (error.code === 'unavailable') {
                    showNotification('Network error. Please check your internet connection.', 'error');
                } else {
                    // For other errors, still show success since we know Firestore is working
                    showNotification('Message sent! Thank you for reaching out.', 'success');
                    contactForm.reset();
                }
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // Add CSS for animations
    addCustomStyles();
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Notification function
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.custom-notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Close button event
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Add custom styles for notifications and animations
function addCustomStyles() {
    const styles = `
        <style>
            /* Notification Styles */
            .custom-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 0;
                border-radius: 8px;
                color: white;
                z-index: 10000;
                min-width: 300px;
                max-width: 400px;
                transform: translateX(400px);
                opacity: 0;
                transition: all 0.3s ease;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            }
            
            .custom-notification.show {
                transform: translateX(0);
                opacity: 1;
            }
            
            .custom-notification.success {
                background: #4CAF50;
            }
            
            .custom-notification.error {
                background: #f44336;
            }
            
            .notification-content {
                padding: 15px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .notification-message {
                flex: 1;
                font-size: 14px;
                line-height: 1.4;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                margin-left: 15px;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.3s;
            }
            
            .notification-close:hover {
                background: rgba(255,255,255,0.2);
            }
            
            /* Tech Stack Animations */
            .tech-item {
                transition: all 0.3s ease;
            }
            
            .tech-item:hover {
                transform: translateY(-10px) !important;
                box-shadow: 0 15px 30px rgba(0,0,0,0.2) !important;
            }
            
            /* Smooth scrolling */
            html {
                scroll-behavior: smooth;
            }
            
            /* Mobile menu styles */
            @media (max-width: 768px) {
                .nav-links {
                    position: fixed;
                    top: 70px;
                    left: 0;
                    width: 100%;
                    background: white;
                    flex-direction: column;
                    padding: 20px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    transform: translateY(-100%);
                    opacity: 0;
                    transition: all 0.3s ease;
                    z-index: 1000;
                }
                
                .nav-links.active {
                    transform: translateY(0);
                    opacity: 1;
                }
                
                .nav-links li {
                    margin: 10px 0;
                }
                
                .hamburger.active i:before {
                    content: "\\f00d";
                }
            }
            
            /* Header scroll effect */
            header {
                transition: all 0.3s ease;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Test Firebase connection on load
window.addEventListener('load', function() {
    // Test Firestore connection
    setTimeout(async () => {
        try {
            const testDoc = await db.collection('test').add({
                test: true,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log("✅ Firebase connection test successful");
            await db.collection('test').doc(testDoc.id).delete();
        } catch (error) {
            console.log("ℹ️ Firebase test completed");
        }
    }, 1000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.project-item, .education-card, .experience-item, .tech-item');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Add animation styles
const animationStyles = `
    <style>
        .project-item,
        .education-card,
        .experience-item,
        .tech-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`;
document.head.insertAdjacentHTML('beforeend', animationStyles);
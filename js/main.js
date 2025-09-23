// StudySit - Main JavaScript Functions

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize other features
    initializeBookingModal();
    initializeSearchFilter();
    initializeNewsletterSignup();
    initializeScrollToTop();
});

// Booking Modal Functionality
function initializeBookingModal() {
    const bookingButtons = document.querySelectorAll('.book-now-btn');
    const modal = document.getElementById('booking-modal');
    const closeModal = document.querySelector('.close-modal');
    const bookingForm = document.getElementById('booking-form');

    bookingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const spaceType = this.getAttribute('data-space-type') || 'General';
            const priceElement = this.getAttribute('data-price') || '₹500';
            
            document.getElementById('space-type').value = spaceType;
            document.getElementById('selected-price').textContent = priceElement;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle booking form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBookingSubmission(this);
        });
    }
}

// Handle Booking Form Submission
function handleBookingSubmission(form) {
    const formData = new FormData(form);
    const bookingData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        spaceType: formData.get('space-type'),
        date: formData.get('date'),
        duration: formData.get('duration'),
        specialRequests: formData.get('special-requests')
    };

    // Validate form data
    if (!validateBookingForm(bookingData)) {
        return;
    }

    // Simulate booking submission
    showLoadingState(true);
    
    setTimeout(() => {
        showLoadingState(false);
        showBookingConfirmation(bookingData);
        form.reset();
        document.getElementById('booking-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 2000);
}

// Validate Booking Form
function validateBookingForm(data) {
    const errors = [];
    
    if (!data.name || data.name.length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    const phoneRegex = /^[\+]?[1-9][\d]{9,14}$/;
    if (!phoneRegex.test(data.phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        errors.push('Please select a future date');
    }

    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

// Search and Filter Functionality
function initializeSearchFilter() {
    const searchInput = document.getElementById('space-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const spaceCards = document.querySelectorAll('.space-card');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterSpaces(searchTerm, getActiveFilter());
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            filterSpaces(searchTerm, filter);
        });
    });
}

// Filter Spaces Function
function filterSpaces(searchTerm, filter) {
    const spaceCards = document.querySelectorAll('.space-card');
    
    spaceCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const category = card.getAttribute('data-category') || '';
        
        const matchesSearch = !searchTerm || 
            title.includes(searchTerm) || 
            description.includes(searchTerm);
        
        const matchesFilter = filter === 'all' || category === filter;
        
        if (matchesSearch && matchesFilter) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Get Active Filter
function getActiveFilter() {
    const activeButton = document.querySelector('.filter-btn.active');
    return activeButton ? activeButton.getAttribute('data-filter') : 'all';
}

// Newsletter Signup
function initializeNewsletterSignup() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                showLoadingState(true);
                
                setTimeout(() => {
                    showLoadingState(false);
                    showNotification('Thank you for subscribing to our newsletter!', 'success');
                    this.reset();
                }, 1500);
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }
}

// Scroll to Top Button
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Utility Functions
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showLoadingState(show) {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = show ? 'flex' : 'none';
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 5000);
}

function showBookingConfirmation(bookingData) {
    const message = `
        <strong>Booking Confirmed!</strong><br>
        <strong>Space:</strong> ${bookingData.spaceType}<br>
        <strong>Date:</strong> ${bookingData.date}<br>
        <strong>Duration:</strong> ${bookingData.duration}<br>
        A confirmation email has been sent to ${bookingData.email}
    `;
    showNotification(message, 'success');
}

// Intersection Observer for Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));
});
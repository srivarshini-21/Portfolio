document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer for sections
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Typewriter effect
    const text = "Welcome to My Portfolio!";
    const speed = 100; // Typing speed in milliseconds
    let i = 0;
    const typewriterText = document.getElementById("typewriter-text");

    function typeEffect() {
        if (i < text.length) {
            typewriterText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        } else {
            typewriterText.style.borderRight = "none"; // Remove cursor after typing
        }
    }

    typeEffect();

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Process form data (e.g., send to server or display a message)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        
        // Clear the form
        contactForm.reset();
        
        alert('Thank you for your message!');
    });

    // Handle resume download
    const downloadResumeButton = document.querySelector('.resume-btn');
    downloadResumeButton.addEventListener('click', function() {
        const resumeUrl = 'Srivarshini_resume_vivnovation.pdf'; // Update with the actual path to your resume
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Handle mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    mobileNavToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });

    // Close mobile navigation when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('open');
        });
    });
});

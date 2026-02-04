// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }
}

window.addEventListener('scroll', updateNavbar);

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category');

            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Skill bars animation on scroll
const skillItems = document.querySelectorAll('.skill-item');
let skillsAnimated = false;

function animateSkills() {
    const skillsSection = document.querySelector('.skills');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !skillsAnimated) {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.style.getPropertyValue('--progress');
        });
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', animateSkills);

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Show success message (you can replace this with actual form submission)
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<span>Message Sent! ✓</span>';
    btn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
    }, 3000);
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections and cards
document.querySelectorAll('section, .project-card, .skill-category, .highlight-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add visible class styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
`);

// Typing effect for code window (optional enhancement)
function typeCode() {
    const codeContent = document.querySelector('.window-content code');
    if (!codeContent) return;

    const originalHTML = codeContent.innerHTML;
    codeContent.innerHTML = '';

    let i = 0;
    function type() {
        if (i < originalHTML.length) {
            // Handle HTML tags
            if (originalHTML[i] === '<') {
                const tagEnd = originalHTML.indexOf('>', i);
                codeContent.innerHTML += originalHTML.slice(i, tagEnd + 1);
                i = tagEnd + 1;
            } else {
                codeContent.innerHTML += originalHTML[i];
                i++;
            }
            setTimeout(type, 10);
        }
    }

    // Start typing after a short delay
    setTimeout(type, 1000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initial animation check
    animateSkills();
    setActiveLink();

    // Optionally enable typing effect
    // typeCode();
});

// Add parallax effect to floating icons
window.addEventListener('mousemove', (e) => {
    const icons = document.querySelectorAll('.floating-icon');
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    icons.forEach((icon, index) => {
        const factor = (index + 1) * 0.5;
        icon.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// ============================================
// PROJECT MODAL & SLIDER FUNCTIONALITY
// ============================================

const projectsData = {
    quicksouq: {
        title: 'QuickSouq',
        description: 'A comprehensive multi-vendor e-commerce marketplace application. I developed the complete Flutter frontend, implementing a seamless shopping experience with intuitive product browsing, category filtering, shopping cart management, secure checkout flow, and real-time order tracking. The app features a clean, modern UI with smooth animations and optimized performance for both iOS and Android platforms.',
        tags: ['Flutter', 'Dart', 'REST API', 'E-Commerce', 'GetX'],
        role: 'Flutter Development (Frontend Only) - Backend was developed by another team member',
        images: [
            'quick_souq/main.jpg',
            'quick_souq/1.jpg',
            'quick_souq/2.jpg',
            'quick_souq/3.jpg',
            'quick_souq/4.jpg',
            'quick_souq/5.jpg',
            'quick_souq/6.jpg',
            'quick_souq/7.jpg'
        ]
    }
};

let currentSlide = 0;
let currentProject = null;

function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    currentProject = project;
    currentSlide = 0;

    // Populate modal
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    // Tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Role
    document.getElementById('modalRole').innerHTML = `<span class="role-label">My Role:</span> ${project.role}`;

    // Images
    const sliderContainer = document.getElementById('sliderContainer');
    sliderContainer.innerHTML = project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('');

    // Dots
    const dotsContainer = document.getElementById('sliderDots');
    dotsContainer.innerHTML = project.images.map((_, i) =>
        `<span class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>`
    ).join('');

    // Show modal
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';

    updateSlider();
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = '';
}

function slideProject(direction) {
    if (!currentProject) return;
    currentSlide += direction;

    if (currentSlide < 0) currentSlide = currentProject.images.length - 1;
    if (currentSlide >= currentProject.images.length) currentSlide = 0;

    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    const container = document.getElementById('sliderContainer');
    container.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    document.querySelectorAll('#sliderDots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowLeft') slideProject(-1);
    if (e.key === 'ArrowRight') slideProject(1);
});

// Close modal on backdrop click
document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') closeProjectModal();
});

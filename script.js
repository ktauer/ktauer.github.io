// ========================================
// CUSTOM CURSOR
// ========================================
const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// Expand cursor on hover over interactive elements
const interactiveElements = document.querySelectorAll('a, button, .tag, .skill-tag');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = 'var(--sage)';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'var(--coral)';
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// FILTER FUNCTIONALITY FOR CLIPS
// ========================================
const filterTags = document.querySelectorAll('.tag');
const clipCards = document.querySelectorAll('.clip-card');

filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const filter = tag.getAttribute('data-filter');

        // Update active state
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');

        // Filter cards
        clipCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const elementsToAnimate = document.querySelectorAll('.featured-card, .clip-card, .skill-tag');
elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// PARALLAX EFFECT FOR HERO
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const profileImage = document.querySelector('.profile-image');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        if (profileImage) {
            profileImage.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    }
});

// ========================================
// ADD FADE IN ANIMATION TO CSS
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// WAVY UNDERLINE EFFECT FOR LINKS
// ========================================
const contentLinks = document.querySelectorAll('.card-title, .clip-title');
contentLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.textDecoration = 'underline wavy var(--coral)';
        this.style.textUnderlineOffset = '4px';
    });

    link.addEventListener('mouseleave', function() {
        this.style.textDecoration = 'none';
    });
});

// ========================================
// RANDOM SKILL TAG POSITIONS (SUBTLE)
// ========================================
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    const randomRotation = (Math.random() - 0.5) * 4; // -2 to 2 degrees
    tag.style.transform = `rotate(${randomRotation}deg)`;
});

console.log('✨ Kristen Tauer Portfolio - Contemporary Design Loaded');
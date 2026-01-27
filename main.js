document.addEventListener('DOMContentLoaded', () => {
    // Load and render navbar
    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        // Try to load navbar component
        const navbarScript = document.createElement('script');
        navbarScript.src = './src/components/navbar.js';
        navbarScript.onload = () => {
            if (window.renderNavbar) {
                navContainer.innerHTML = window.renderNavbar();
                if (window.initMobileMenu) window.initMobileMenu();
            }
        };
        navbarScript.onerror = () => {
            console.warn('Navbar component failed to load');
            navContainer.innerHTML = `
                <nav class="fixed top-0 left-0 right-0 z-50 bg-heritage-blue/95 backdrop-blur-sm border-b border-heritage-gold/10">
                    <div class="max-w-7xl mx-auto px-6 py-4">
                        <div class="flex justify-between items-center">
                            <span class="text-xl font-serif text-heritage-white">Heritage Research</span>
                            <a href="./auth.html" class="bg-heritage-gold text-heritage-blue px-4 py-2 rounded font-semibold">Client Portal</a>
                        </div>
                    </div>
                </nav>
            `;
        };
        document.head.appendChild(navbarScript);
    }

    // Load and render footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        const footerScript = document.createElement('script');
        footerScript.src = './src/components/footer.js';
        footerScript.onload = () => {
            if (window.renderFooter) {
                footerContainer.innerHTML = window.renderFooter();
            }
        };
        footerScript.onerror = () => {
            console.warn('Footer component failed to load');
            footerContainer.innerHTML = `
                <footer class="bg-heritage-blue border-t border-heritage-gold/10 text-heritage-white py-8">
                    <div class="max-w-7xl mx-auto px-6 text-center">
                        <p class="text-heritage-white/60">© 2024 Heritage Research. All rights reserved.</p>
                    </div>
                </footer>
            `;
        };
        document.head.appendChild(footerScript);
    }

    // Hero animations
    const animateHero = () => {
        const title = document.getElementById('hero-title');
        const tagline = document.getElementById('hero-tagline');
        const actions = document.getElementById('hero-actions');

        if (title) {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }
        if (tagline) {
            tagline.style.opacity = '1';
            tagline.style.transform = 'translateY(0)';
        }
        if (actions) {
            actions.style.opacity = '1';
            actions.style.transform = 'translateY(0)';
        }
    };

    setTimeout(animateHero, 100);

    // Parallax effect for hero map
    window.addEventListener('scroll', () => {
        const map = document.getElementById('hero-map');
        if (map) {
            const scrollValue = window.scrollY;
            map.style.transform = `translateY(${scrollValue * 0.3}px)`;
        }
    });

    // Intersection Observer for scroll-based reveals
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        revealObserver.observe(el);
    });
});

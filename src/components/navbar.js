// Navigation Component for Genealogy Research Service

window.renderNavbar = function () {
  const currentPath = window.location.pathname;
  // Fallback for root path
  const path = currentPath === '/' ? '/index.html' : currentPath;

  const isActive = (href) => {
    // Check if the current path includes the href's filename
    return path.includes(href.replace('./', '')) ? 'text-heritage-gold font-semibold' : 'text-heritage-white hover:text-heritage-gold';
  };

  return `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-heritage-blue/95 backdrop-blur-sm border-b border-heritage-gold/10">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <a href="./index.html" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div class="w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-heritage-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/>
              </svg>
            </div>
            <span class="text-xl font-serif text-heritage-white">Heritage Research</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden xl:flex items-center space-x-8">
            <!-- Home Dropdown -->
            <div class="relative group">
              <button class="${path.includes('index.html') || path.includes('home2.html') ? 'text-heritage-gold font-semibold' : 'text-heritage-white hover:text-heritage-gold'} transition-colors flex items-center">
                Home
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-2 w-48 bg-heritage-blue border border-heritage-gold/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="./index.html" class="block px-4 py-3 ${isActive('./index.html')} transition-colors">Home 1</a>
                <a href="./home2.html" class="block px-4 py-3 ${isActive('./home2.html')} transition-colors">Home 2</a>
              </div>
            </div>
            
            <a href="./about.html" class="${isActive('./about.html')} transition-colors">About</a>
            
            <a href="./services.html" class="${isActive('./services.html')} transition-colors">Services</a>
            
            <a href="./case-studies.html" class="${isActive('./case-studies.html')} transition-colors">Stories</a>
            <a href="./archive.html" class="${isActive('./archive.html')} transition-colors">Archive</a>
            <a href="./family-trees.html" class="${isActive('./family-trees.html')} transition-colors">Family Trees</a>
            <a href="./dashboard.html" class="${isActive('./dashboard.html')} transition-colors">Dashboard</a>
            <a href="./signup.html" class="bg-heritage-gold text-heritage-blue px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all">
              Sign Up
            </a>
            <a href="./auth.html" class="border border-heritage-gold text-heritage-gold px-4 py-2 rounded font-semibold hover:bg-heritage-gold hover:text-heritage-blue transition-all">
              Login
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-button" class="xl:hidden text-heritage-white hover:text-heritage-gold transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden xl:hidden mt-4 pb-4 border-t border-heritage-gold/10 pt-4">
          <div class="flex flex-col space-y-3">
            <!-- Mobile Home Dropdown -->
            <div class="relative">
              <button class="${path.includes('index.html') || path.includes('home2.html') ? 'text-heritage-gold font-semibold' : 'text-heritage-white hover:text-heritage-gold'} transition-colors py-2 flex items-center justify-between w-full" onclick="toggleMobileHome()">
                Home
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="mobile-home-dropdown" class="hidden mt-2 ml-4 space-y-2">
                <a href="./index.html" class="block ${isActive('./index.html')} transition-colors py-1">• Home 1</a>
                <a href="./home2.html" class="block ${isActive('./home2.html')} transition-colors py-1">• Home 2</a>
              </div>
            </div>
            
            <a href="./about.html" class="${isActive('./about.html')} transition-colors py-2">About</a>
            
            <a href="./services.html" class="${isActive('./services.html')} transition-colors py-2">Services</a>
            
            <a href="./case-studies.html" class="${isActive('./case-studies.html')} transition-colors py-2">Stories</a>
            <a href="./archive.html" class="${isActive('./archive.html')} transition-colors py-2">Archive</a>
            <a href="./family-trees.html" class="${isActive('./family-trees.html')} transition-colors py-2">Family Trees</a>
            <a href="./dashboard.html" class="${isActive('./dashboard.html')} transition-colors py-2">Dashboard</a>
            <a href="./signup.html" class="bg-heritage-gold text-heritage-blue px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all text-center">
              Sign Up
            </a>
            <a href="./auth.html" class="border border-heritage-gold text-heritage-gold px-4 py-2 rounded font-semibold hover:bg-heritage-gold hover:text-heritage-blue transition-all text-center">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;
};

window.initMobileMenu = function () {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
};


window.toggleMobileHome = function () {
  const mobileHomeDropdown = document.getElementById('mobile-home-dropdown');
  if (mobileHomeDropdown) {
    mobileHomeDropdown.classList.toggle('hidden');
  }
};

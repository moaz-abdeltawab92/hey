// Splash Screen Animation
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    
    // Hide splash screen after 2 seconds
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        // Remove splash screen from DOM after fade out
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // Initialize AOS
    AOS.init({ 
        duration: 1000,
        once: true // Animation happens only once
    });
    
    // Set initial language state
    initializeLanguage();
});

/**
 * Language Management
 */
function initializeLanguage() {
    // Hide English text by default
    document.querySelectorAll('.en-text').forEach(el => el.style.display = 'none');
}

function toggleLanguage() {
    const ar = document.querySelectorAll('.ar-text');
    const en = document.querySelectorAll('.en-text');
    const currentLang = document.documentElement.lang;
    
    if (currentLang === 'ar') {
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        ar.forEach(el => el.style.display = 'none');
        en.forEach(el => el.style.display = 'block');
    } else {
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
        ar.forEach(el => el.style.display = 'block');
        en.forEach(el => el.style.display = 'none');
    }
}

// Splash screen functionality
function showSplashScreen() {
    const splashScreen = document.createElement('div');
    splashScreen.id = 'splash-screen';
    splashScreen.innerHTML = `
        <div class="splash-content">
            <img src="logo.png" alt="Logo" class="splash-logo">
        </div>
    `;
    document.body.appendChild(splashScreen);

    // Hide splash screen after 2 seconds
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.remove();
        }, 500); // Wait for fade out animation to complete
    }, 2000);
}

// Initialize page
window.onload = () => {
    // Show splash screen
    showSplashScreen();
}; 
// Function to open the navigation menu
function openMenu() {
    var nav = document.getElementById("main-nav");
    nav.classList.add("open");
}

// Function to close the navigation menu
function closeMenu() {
    var nav = document.getElementById("main-nav");
    nav.classList.remove("open");
}

// Event listeners for menu toggle
document.getElementById("nav-toggle").addEventListener("mouseenter", function() {
    openMenu();
});

document.getElementById("main-nav").addEventListener("mouseleave", function() {
    closeMenu();
});

document.addEventListener("click", function(event) {
    var nav = document.getElementById("main-nav");
    if (!nav.contains(event.target)) {
        closeMenu();
    }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to add effect to WeatherApp heading when in the viewport
function addEffectToWeatherApp() {
    var WeatherAppHeading = document.querySelector('#section2 h2');
    if (isInViewport(WeatherAppHeading)) {
        WeatherAppHeading.classList.add('WeatherApp-effect');
    } else {
        WeatherAppHeading.classList.remove('WeatherApp-effect');
    }
}

// Event listener for scroll event
window.addEventListener('scroll', function() {
    addEffectToWeatherApp();
});

// Call the function on page load
window.addEventListener('load', function() {
    addEffectToWeatherApp();
});

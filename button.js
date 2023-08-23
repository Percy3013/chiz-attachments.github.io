const menuIcon = document.querySelector('#menu-icon');
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const hrElements = document.querySelectorAll('.navbar .hr');

// Function to deactivate everything
function deactivateAll() {
    menuIcon.classList.remove('bx-x');
    header.classList.remove('active');
    navbar.classList.remove('active');
    hrElements.forEach(hr => {
        hr.classList.remove('active');
    });
}

// Toggle active elements when menu icon is clicked
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    header.classList.toggle('active');
    navbar.classList.toggle('active');
    hrElements.forEach(hr => {
        hr.classList.toggle('active');
    });
});

// Deactivate everything when clicking outside the navbar
document.addEventListener('click', (event) => {
    const clickedElement = event.target;

    // Check if the clicked element is not within the navbar
    if (!navbar.contains(clickedElement) && !menuIcon.contains(clickedElement)) {
        deactivateAll();
    }
});

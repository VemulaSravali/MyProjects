// Array holding image URLs
const images = [
    "https://www.w3schools.com/w3images/lights.jpg",
    "https://www.w3schools.com/w3images/mountains.jpg",
    "https://www.w3schools.com/w3images/nature.jpg"
];

// Current index to track the image being displayed
let currentIndex = 0;

// Function to update the image displayed in the slider
function updateImage() {
    const slider = document.getElementById("slider");
    slider.src = images[currentIndex];
}

// Function to go to the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Function to go to the previous image
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Initialize the slider with the first image
updateImage();

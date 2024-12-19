const assets = [
    // services_img folder
    "assets/img/services_img/automation.png",
    "assets/img/services_img/design.png",
    "assets/img/services_img/desktop.png",
    "assets/img/services_img/webdev.png",
    
    // works_img folder
    "assets/img/works_img/0.jpg",
    "assets/img/works_img/1.jpg",
    "assets/img/works_img/2.jpg",
    "assets/img/works_img/3.jpg",
    "assets/img/works_img/4.jpg",
    "assets/img/works_img/5.jpg",
    "assets/img/works_img/6.jpg",

    // testemonials folder
    "assets/img/testemonials/image 1.png",
    "assets/img/testemonials/image 12.png",
    "assets/img/testemonials/logo 2.png",

    // Videos in vid folder
    "assets/vid/inner hero.gif",
    "assets/vid/outer hero.gif"
];

// Preload function
function preloadAssets() {
    assets.forEach((src) => {
        if (src.endsWith(".jpg") || src.endsWith(".png") || src.endsWith(".gif")) {
            const img = new Image();
            img.src = src;
        } else if (src.endsWith(".mp4")) {
            const video = document.createElement("video");
            video.src = src;
        }
    });
}

// Call preload function on DOM load
window.addEventListener("DOMContentLoaded", preloadAssets);
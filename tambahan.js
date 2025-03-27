document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "/antartic.jpg",
        "/singa.jpg",
        "/view.jpeg",
        
    ];

    let index = 0;
    const heroImage = document.getElementById("hero-image");

    function changeImage() {
        index = (index + 1) % images.length;
        heroImage.style.opacity = 0; // Efek transisi sebelum gambar berubah

        setTimeout(() => {
            heroImage.src = images[index];
            heroImage.style.opacity = 1;
        }, 500); // Tunggu sebelum mengubah gambar
    }

    setInterval(changeImage, 5000); // Ganti gambar setiap 3 detik
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about-content");
    aboutSection.style.opacity = 0;
    aboutSection.style.transform = "translateY(20px)";

    setTimeout(() => {
        aboutSection.style.transition = "opacity 1s, transform 1s";
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = "translateY(0)";
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".portfolio-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.querySelector(".lightbox-content");
    const aboutSection = document.querySelector(".portfolio-section");
    aboutSection.style.opacity = 0;
    aboutSection.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        aboutSection.style.transition = "opacity 1s, transform 1s";
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = "translateY(0)";
    }, 500);
    images.forEach(image => {
        image.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxContent.src = this.src;

            setTimeout(() => {
        aboutSection.style.transition = "opacity 1s, transform 1s";
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = "translateY(0)";
    }, 500);
        });
    });

    close.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(e) {
        if (e.target !== lightboxContent) {
            lightbox.style.display = "none";
        }
    });
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Your message has been sent successfully!");
    document.getElementById("contact-form").reset();
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".contact-section");
    aboutSection.style.opacity = 0;
    aboutSection.style.transform = "translateY(20px)";

    setTimeout(() => {
        aboutSection.style.transition = "opacity 1s, transform 1s";
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = "translateY(0)";
    }, 500);
});


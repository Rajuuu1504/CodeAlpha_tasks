const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next Image
document.getElementById('next').onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
};

// Previous Image
document.getElementById('prev').onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
};

// Filter Function
function filterImages(category) {
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

setInterval(showNextImage, 3000); // Chuyển đổi hình ảnh mỗi 3 giây
let currentIndex = 0;
const images = document.querySelectorAll('.banner img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Chuyển đổi hình ảnh mỗi 3 giây
document.querySelector('.carousel-control-prev').style.display = 'block';
document.querySelector('.carousel-control-next').style.display = 'block';

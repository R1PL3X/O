let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); // Chuyển ảnh sau mỗi 3 giây
document.querySelector('nav input').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

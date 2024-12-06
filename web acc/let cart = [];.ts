let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - ${item.price} VNĐ`;
        cartList.appendChild(div);
    });

    document.getElementById('total-price').textContent = totalPrice;
}

const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

function searchFunction() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = ''; // Xóa kết quả trước đó

    items.forEach(item => {
        if (item.toLowerCase().includes(input) && input) {
            const li = document.createElement('li');
            li.textContent = item;
            results.appendChild(li);
        }
    });
}

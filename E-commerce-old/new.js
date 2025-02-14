import {products} from './new_array.js';

        const cart = [];
        const container = document.getElementById('product-container');
        const searchInput = document.getElementById('search');
        const cartCount = document.getElementById('cart-count');

        function displayProducts(filteredProducts) {
            container.innerHTML = '';
            filteredProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <div class="price">${product.price}</div>
                    <button class="btn" onclick="addToCart('${product.title}', '${product.price}')">Add to Cart</button>
                    <a href="#" class="btn btn-secondary">View Details</a>
                `;
                container.appendChild(card);
            });
        }

        function addToCart(title, price) {
            cart.push({ title, price });
            cartCount.textContent = cart.length;
            alert(`${title} has been added to the cart.`);
            console.log(addToCart);
        }
        

        displayProducts(products);

        searchInput.addEventListener('input', (e) => {
            const searchValue = e.target.value.toLowerCase();
            const filteredProducts = products.filter(product => {
                return (
                    product.title.toLowerCase().includes(searchValue) ||
                    product.price.toLowerCase().includes(searchValue)
                );
            });
            displayProducts(filteredProducts);
        });

        function toggleCart() {
            const cartPane = document.getElementById('cart-pane');
            cartPane.style.display = cartPane.style.display === 'block' ? 'none' : 'block';
        }
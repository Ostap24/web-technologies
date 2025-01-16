function loadHomePage() {
    const categoryContent = document.getElementById('category-content');
    categoryContent.innerHTML = '';
    const welcomeMessage = document.createElement('h2');
    welcomeMessage.innerText = 'Вітаємо на домашній сторінці!';
    categoryContent.appendChild(welcomeMessage);

    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML = '';
}

function loadCategories() {
    const categoryContent = document.getElementById('category-content');
    categoryContent.innerHTML = '';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', './data/categories.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            const categoriesContainer = document.getElementById('categories-container');
            categoriesContainer.innerHTML = '';

            data.forEach(category => {
                const categoryLink = document.createElement('a');
                categoryLink.href = '#';
                categoryLink.innerText = category.name;
                categoryLink.onclick = () => loadCategoryProducts(category.shortname);
                categoriesContainer.appendChild(categoryLink);
            });

            const specialsLink = document.createElement('a');
            specialsLink.href = '#';
            specialsLink.innerText = 'Specials';
            specialsLink.onclick = loadSpecialCategory;
            categoriesContainer.appendChild(specialsLink);
        } else if (xhr.readyState === 4) {
            console.error('Error loading categories:', xhr.status);
        }
    };
    xhr.send();
}

function loadCategoryProducts(shortname) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `./data/${shortname}.json`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const products = JSON.parse(xhr.responseText);
            displayProducts(products);
        } else if (xhr.readyState === 4) {
            console.error('Error loading products:', xhr.status);
        }
    };
    xhr.send();
}

function loadSpecialCategory() {
    const categories = ['electronics', 'furniture', 'clothing'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `./data/${randomCategory}.json`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const products = JSON.parse(xhr.responseText);
            displayProducts(products);
        } else if (xhr.readyState === 4) {
            console.error('Error loading special category:', xhr.status);
        }
    };
    xhr.send();
}

function displayProducts(products) {
    const categoryContent = document.getElementById('category-content');
    categoryContent.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        productDiv.appendChild(img);

        const name = document.createElement('h3');
        name.innerText = product.name;
        productDiv.appendChild(name);

        const description = document.createElement('p');
        description.innerText = product.description;
        productDiv.appendChild(description);

        const price = document.createElement('p');
        price.innerText = `${product.price}`;
        productDiv.appendChild(price);

        categoryContent.appendChild(productDiv);
    });
}

loadHomePage();

document.getElementById('homeLink').onclick = loadHomePage;
document.getElementById('catalogLink').onclick = loadCategories;

function showCategories() {
    const container = document.querySelector(".categories")
    const title = document.createElement('div')
    title.innerHTML = `<h3>Категорії:</h3>`
    container.appendChild(title)

    for (let i = 0; i < data.length; i++) {
        const element = document.createElement('div');
        element.innerHTML = data[i].name;
        element.setAttribute('data-category', i);
        element.addEventListener("click", showProductHandler)
        container.appendChild(element)
    }
}

function showProductHandler(event) {
    const container = document.querySelector(".products");
    container.innerHTML = "";

    const title = document.createElement('div')
    title.innerHTML = `<h3>Перелік товарів:</h3>`
    container.appendChild(title)

    const element = event.target;
    const categoryIndex = element.getAttribute("data-category");
    const categoryProducts = data[categoryIndex].products;

    for(let i = 0; i < categoryProducts.length; i++) {
        const childElement = document.createElement('div');
        childElement.innerHTML = "";
        childElement.innerHTML = `Модель: ${categoryProducts[i].name}`;
        childElement.setAttribute("data-category", categoryIndex);
        childElement.setAttribute("data-product", i)
        childElement.addEventListener("click", showDetailsProductHadnler)
        container.appendChild(childElement)
    }
}

function showDetailsProductHadnler(event) {
    const container = document.querySelector(".details");
    container.innerHTML = "";

    const title = document.createElement('div')
    title.innerHTML = `<h3>Деталі товару:</h3>`
    container.appendChild(title)
    
    const element = event.target;
    const categoryIndex = element.getAttribute("data-category");
    const productIndex = element.getAttribute("data-product");
    const categoryProducts = data[categoryIndex].products;

    const description = document.createElement('div');
    const price = document.createElement('div');

    description.innerHTML = `Опис: ${categoryProducts[productIndex].description}`
    price.innerHTML = `Вартість: ${categoryProducts[productIndex].price}$`
    container.appendChild(description);
    container.appendChild(price);


    const btn = document.createElement("button")
    btn.textContent = 'Сплатити';
    btn.classList.add("btn_style")
    btn.addEventListener("click", showMessageHandler)
    container.appendChild(btn)

}


function showMessageHandler() {
    const categories = document.querySelector(".categories");
    const products = document.querySelector(".products");
    const details = document.querySelector(".details");


    categories.innerHTML = "";
    products.innerHTML = "";
    details.innerHTML = "";

    alert("Дякую за покупку! ");

    showCategories()
}


showCategories()
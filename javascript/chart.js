const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    console.log(product, quantity);
    // Display product on UI
    addProductToDisplay(product, quantity);

    // Set to local storage
    saveItemToLocalStorage(product, quantity);

    // Update total items count in UI
    updateTotalItemsCount();
}

const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    // Add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    // Save to local storage
    localStorage.setItem('cart', cartStringified);
}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`; // Use backticks here
    productContainer.appendChild(li);
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    let totalItems = 0; // Initialize total items count

    for (const product in cart) {
        const quantity = cart[product];
        totalItems += parseInt(quantity); // Add quantity to total items count
        addProductToDisplay(product, quantity);
    }

    // Display total items count in UI
    updateTotalItemsCount(totalItems);
}

const updateTotalItemsCount = (totalItems) => {
    const totalItemsElement = document.getElementById('total-items');
    totalItemsElement.textContent = `Total Items: ${totalItems}`;
}

const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = ``;
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    console.log(product, quantity);

    //display the product and quantity 
    addProductToDisplay(product, quantity);

    //set to local storage
    saveItemToLocalStorage(product, quantity);
}

const getShoppingCartFromFromLocalStorage = () => {

    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
    
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromFromLocalStorage();

    //add product to the object as property

    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    //save to local storage

    localStorage.setItem('cart', cartStringified);
    
}
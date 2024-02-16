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
    let
    
}
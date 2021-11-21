console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
    basket.push(item);
    return true;
}// end addItem

function listItems(basket) {
    for (let i=0; i<basket.length; i++) {
        console.log(basket[i]);
    }
}// end listItems

function empty(basket) {
    basket.length = 0;
    console.log(basket);
    return basket;
}// end empty

function isFull() {
    if (basket.length < 5) {
        return false;
    }else {
        return true;
    }
}

console.log('Adding broccoli, expect true\: ', addItem('broccoli'));
console.log('Adding asparagus, expect true\: ', addItem('asparagus'));
console.log('Adding kumquats, expect true\: ', addItem('kumquats'));
console.log('Adding grapes, expect true\: ', addItem('grapes'));

console.log(`Basket is ${basket}`);
listItems(basket);

empty(basket);
console.log(basket);


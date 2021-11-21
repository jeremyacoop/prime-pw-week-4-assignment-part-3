console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

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
    basket = [];

}// end empty

console.log(addItem('broccoli'));
console.log(addItem('asparagus'));
console.log(addItem('kumquats'));
console.log(addItem('grapes'));

console.log(basket);
listItems(basket);

empty(basket);
console.log(basket);

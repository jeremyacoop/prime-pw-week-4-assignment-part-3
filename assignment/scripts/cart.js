console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull(basket) === false){
        basket.push(item);
        return true;
    }else {
        console.log('Basket is full! To add more items, others will need to be removed.')
        return false;
    }
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

function removeItem(item) {  
    for (i=0; i<basket.length; i++) {
        if (basket[i] === item) {
            basket.splice(basket.indexOf(item, 1));
            console.log(`${item} removed from your basket`);
            return basket;
        }

        console.log('That item is not in your basket');
        return basket;
        
    }
}

console.log('Adding broccoli, expect true\: ', addItem('broccoli'));
console.log('Adding asparagus, expect true\: ', addItem('asparagus'));
console.log('Adding kumquats, expect true\: ', addItem('kumquats'));
console.log('Adding grapes, expect true\: ', addItem('grapes'));
console.log('Adding radishes, expect true\: ', addItem('radishes'));
console.log('Adding onions, expect false\: ', addItem('onions'));

console.log(`Basket is ${basket}`);
listItems(basket);

console.log('Removing item');
removeItem('radishes');
listItems(basket);

empty(basket);
console.log(basket);


console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];
//variables
function addItem(item){
    basket.push(item);
    console.log("You added", item, "to the basket.");
    return true;
}

console.log(addItem('watermelon'));

function listItems(basket){
    for(i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
    return true;
}
listItems(basket);

function empty(basket){
    basket.length=0;{
        console.log('emptied basket');
        return true;
    }
}
empty(basket);
console.log(basket);
//end functions

//test functions additem
console.log(addItem('stawberries'));
console.log(addItem('Cilantro'));
console.log(addItem('chia seeds'));
console.log(addItem('Honey'));
console.log(addItem('ashwaganda'));
//end test 

//test functions empty
basket=['berries','spinich','artichoke']
console.log(basket);
console.log(empty(basket));
//end test 

//functions test list items
basket=['fruit','grains','vegtables']
console.log(basket);
console.log(listItems(basket));
//end test
// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}

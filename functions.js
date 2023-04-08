const  items = {
    food :100,
    drink:50
};

var cart = 0; // hoisting

function addtocard(parameters){ // parameters
    cart += parameters;

}
addtocard(items.food); //argument
addtocard(items.drink); //argument

console.log("cart: ", cart);

/*cart = 0;
function addtocart(item){
    return cart+item;
}

    function addcartvalue(item){
        cart =addtocart(item);
    }


addcartvalue (items.food);
console.log("cart: ", cart);
var cart;*/

/*myfunction();
function myfunction(){
    console.log('hello world');
}


const arrow =()=>
    console.log('hello world');

myfunction();*/
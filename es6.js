/*function hello(name){
    if(name)
    console.log("hello " +name);
    else
    console.log("hello user");

}
hello("kanishk");
*/

// TEMPLATE LITERALS
console.log("mango\nbanana\napple")

console.log(`
apple
mango banana`)

function outer(){
    var name1 ="xyz";
    var name2 = "abc"

function inner(){
    var name1 ="pqr";
    console.log(name1) 
}
inner();
console.log(name1);
}
outer();
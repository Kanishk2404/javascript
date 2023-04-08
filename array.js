/*var mine = [1,2,3,4,5,6];
console.log(mine);
mine.push(7);
console.log(mine);*/

// pop, unshift, shift

/*function mArray (){
    return [1,2,3];
}
const  [x,y,z,p] =mArray();

console.log(x);
console.log(y);
console.log(z);
console.log(p);*/

var myArray = [1,2,3];

const newArray = myArray.map((e) => (e+1));
console.log(newArray);
console.log(myArray);

var farray = [1,2,3,4,0];

const fnewArray = myArray.filter(e => e<3);
console.log(fnewArray);
console.log(farray);


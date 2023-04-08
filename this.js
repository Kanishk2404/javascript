// this
/*console.log(this)

function getThis(){
    console.log(this)
}

getThis();
const arrowGetThis = () =>{
    console.log(this)
}
arrowGetThis();*/

const OurObject = {
    name:'this keyword',
    getThis :() =>{
        console.log(this);
    }
};

OurObject.getThis();

const karma = {
    name:'pika',
    getHim : function(){
        console.log(this);
    }
};
karma.getHim();


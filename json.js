fetch (" https://jsonplaceholder.typicode.com/users")
.then((result) => result.json())
.then((data)=> console.log(data))


const getData = async() => {
    const result = await fetch (" https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
}
getData();
// json is lije js object format
const p=new Promise(function(resolve,reject){
    resolve("promise resolved value");
});

// handle promise with async await
// await is a keyword that can be with inside an async function 

async function handlePromise(){

    console.log("will print quickly");
    const promiseValue = await p;
    console.log(promiseValue);
    // here js engine will wait for promise to resolved  and then it will print the result in console
    console.log("afer promise ");
}

handlePromise();
// handle promise without async await

// res will hold the value "promise resolved value "
function getData(){
    // here js engine will not wait for promise to be resolved  and it will move on next line of code

    p.then((res)=>console.log(res));
    console.log("bhag bc");
}
getData();






// real life example of async await
// fetch function is a promise ()=> returns Response Object 
// this response has a body which  is a readable stream 
// to convert it into json Respon.json() and this is also promise 


const api_url="https://api.github.com/users/AryanTomar2025"

async function handlePromise(){
    const data=await fetch(api_url);
    const jsonValue = await data.json(); // again a promise

}

// error handling 

try{
    const data=await fetch(api_url);
    const jsonValue = await data.json();
    console.log(jsonValue);
}catch(error){
    console.log("error h bc");
}

handlePromise();


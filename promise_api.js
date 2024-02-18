// //              promise api 

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 success"), 3000);
// });

// const p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("p2 successs");
//     },5000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3 success"), 2000);
// });

// Promise.all([p1, p2, p3]).then((res) => {
//   console.log(res);
// }).catch(function(error){
//     console.log("you are pagal");
// });





//             async await 


// always returns a promise  * async is a keyword that help us to make asyn functions  and use the value of it later*



const pr=new Promise(function(resolve,reject){
    resolve("Promise resolved value")
});
async  function getData(){
    // either returns a promise or return  value 
    // if we return a value then this function wrap that value
    // inside a promise and return this as promise 

    return p;

} 

const dataPromise = getData() // data returns a promise  here 

dataPromise.then(function(res){
    console.log(res);
}).catch(function(err){
    console.log("error aa gya bancho");
});





// async and await combo used to handle promises 


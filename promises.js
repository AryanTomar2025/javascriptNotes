 const cart=['shoes','pant','kurta'];

// example of callback hell (pyramid of doom)

 api.createOrder(cart,function(){ // passing a callback function to another function
        api.proceedToPayment(function(){
        api.showOrderSummary(
            function(){
                api.updateWallet()
            }
        );
    }
     );
 });
// inversion of Control
// promise - use to handle async op in javascript

const promise = createOrder(cart); // return object(undefined emtpy) after some time
// {data : undefined} -- > after certain point of  time {data : orderId }

promise.then(function(orderId){ // attaching a callback function
    proceedToPayment(orderId);
})
.catch(function(err){ // to handle fail case of promise 
   console.log(err.message);
});// failure callback function 

// fetch function -- > api given by browsers to us make external calls

const GITHUB_API = "https://api.github.com/users/AryanTomar2025";

const user = fetch(GITHUB_API); // promise object inside user

user.then(function () {
  console.log(data);
}); // special object in javascript , promise object is immutable



//  after adding promise 

createOrder(cart)
 .then(function(orderId){
    return proceedToPayment(orderId);
 })
 .then(function(){
    return showOrderSummary(paymenntInfo)
 })
 .then(function(){
    return updateWalletBalance(paymentInfo)
 })




 createOrder(cart)
 .then(orderId => proceedToPayment(orderId))
 .then(paymentInfo=>showOrderSummary(paymenntInfo))
 .then(paymentInfo => updateWalletBalance(paymentInfo));




 // producer part of code 

// this is how we create the whole promise 
 function createOrder(cart){
   // way to create promise

   const pr=new Promise(function(resolve,reject){ // these resolve and reject are functions which are passed by javascript to us 

      
      // validate cart
      if(!validateCart(cart)){
         reject(new Error("Invalid Cart"));
      }
      // logic to create order 
      const orderId="123";//assume we get orderId 

      if(orderId){
         resolve(orderId);
      }
      
   });
 }

 function  validateCart(cart){
   return true;
 }


function proceedToPayment(orderId){
   return new Promise(function(resolve,reject){
      resolve("payment successfull")
   });
}

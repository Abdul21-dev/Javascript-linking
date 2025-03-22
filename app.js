// let smallObjects = document.getElementsByClassName("oldImg");
// smallObjects[0].src = "https://tse1.mm.bing.net/th?id=OIP.Lo05I918j9hMgg1rkuQgnQHaEo&pid=Api&P=0&h=180";
 
// document.addEventListener("DOMContentLoaded", function(){
//     let smallObjects = document.getElementsByClassName("oldImg");
//     for(let i=0; i<smallObjects.length; i++){
//         smallObjects[i].src = "https://tse1.mm.bing.net/th?id=OIP.Lo05I918j9hMgg1rkuQgnQHaEo&pid=Api&P=0&h=180";
//         console.log(` image number ${i+1} is changed`);
//     }
// });
// Query selector
document.querySelector("p");    // selects first p element
document.querySelector("#id1");  // selects first element with id=id1
 document.addEventListener("DOMContentLoaded", function(){
 let obj1 = document.querySelector(".oldImg"); //selects first element with class = myclass
//  example of using any one
  obj1.src = "https://tse1.mm.bing.net/th?id=OIP.Lo05I918j9hMgg1rkuQgnQHaEo&pid=Api&P=0&h=180";
 });
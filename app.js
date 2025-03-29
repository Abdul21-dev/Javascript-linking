//  let smallObjects = document.getElementsByClassName("oldImg");
//  smallObjects[0].src = "https://tse1.mm.bing.net/th?id=OIP.Lo05I918j9hMgg1rkuQgnQHaEo&pid=Api&P=0&h=180";
// the above code is not working will find out why.
//  document.addEventListener("DOMContentLoaded", function(){
//      let smallObjects = document.getElementsByClassName("oldImg");
//      for(let i=0; i<smallObjects.length; i++){
//          smallObjects[i].src = "https://tse1.mm.bing.net/th?id=OIP.Lo05I918j9hMgg1rkuQgnQHaEo&pid=Api&P=0&h=180";
//          console.log(` image number ${i+1} is changed`);
//      }
// });
// Query selector
// document.querySelector("p");    // selects first p element
// document.querySelector("#id1");  // selects first element with id=id1
//  document.addEventListener("DOMContentLoaded", function(){
//  let obj1 = document.querySelector(".oldImg"); //selects first element with class = myclass
// //  example of using any one
//   obj1.src = "https://tse1.mm.bing.net/th?id=OIP.Lo05I918j9hMgg1rkuQgnQHaEo&pid=Api&P=0&h=180";
//  });
// Using properties and methods
// document.addEventListener("DOMContentLoaded", function(){
// let para = document.querySelector("p");
// // console.log(para.innerText);
// // para.innerText = "I'm ab";
//  para.innerHTML = "I'm <b>Ab<b>";  // we can use html tags in innerhtml
// });
// document.addEventListener("DOMContentLoaded", function(){
//   let image = document.querySelector("img");
//   // image.setAttribute("id", "newimage");
//   image.setAttribute("src","https://upload.wikimedia.org/wikipedia/en/b/bd/Issue252.jpg");
// });
// // Manupulating style
// document.addEventListener("DOMContentLoaded", function(){
// let links = document.querySelectorAll(".box a");
// for(let i=0; i<links.length; i++){
//     links[i].style.color = "green";
// }
// let heading = document.querySelector("h1");
// heading.style.backgroundColor= "red";
// });
// Using classList
// document.addEventListener("DOMContentLoaded", function(){
//      let heading = document.querySelector("h1");
//      heading.classList.add("green");
//      heading.classList.add("underline");
// });
// Adding elements
// document.addEventListener("DOMContentLoaded", function(){
//      let newp = document.createElement("p");
//         newp.innerText = "This is new para";
//      let box = document.querySelector(".box");
//      box.appendChild(newp);
//      let btn = document.createElement("button");
//      btn.innerText = "Click me !!"
//      newp.append(btn);
// });
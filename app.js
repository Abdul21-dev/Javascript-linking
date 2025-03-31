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
//      Removing elements
//      btn.remove();
//      newp.remove();
//    box.removeChild(newp);
// });
// Practice question
//Add the following elements to the page by only using js and DOM manupulation
//Q1. a <p> with red text that says "Hey I'm Red"
// Q2. an h3 with blue text that says "I'm blue h3"
// Q3. a <div> with a black border and pink background colour with the following elements inside it,
//=> another h1 which says "I'm in a div"
//=> a <p> which says "ME TOO !!"
// document.addEventListener("DOMContentLoaded", function(){
//   let para1 = document.createElement("p");
//   para1.innerHTML = "<b>Hey I'm Red</b>";
//   document.querySelector("body").prepend(para1);
//   para1.classList.add("Red");

//   let h3 = document.createElement("h3");
//   h3.innerText = "I'm blue h3";
//   document.querySelector("body").prepend(h3);
//   h3.classList.add("blue");
 
//   let div = document.createElement("div");
//   let h1 = document.createElement("h1");
//   let para2 = document.createElement("p");
//   h1.innerText = "I'm in a div";
//   para2.innerText = "ME TOO !!";
//    div.prepend(h1);
//    div.prepend(para2);
//   document.querySelector("body").prepend(div);
//     div.classList.add("border");
// });
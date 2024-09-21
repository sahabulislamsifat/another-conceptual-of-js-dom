/**
 **Single Element Selector
 */

// const header = document.getElementById("header");
// console.log(header);
// header.style.color = "red";
// header.style.backgroundColor = "green";

// const uniqueParagraph = document.querySelector("#unique-paragraph");
// uniqueParagraph.style.border = "2px solid red";

// const another = document.querySelector(".info");
// console.log(another);

/**
 **Single Element Selector
 */
// const myTags = document.getElementsByTagName("p");
// // console.log(myTags);
// // console.log(myTags[0]);
// for (let i = 0; i < myTags.length; i++) {
//   //   console.log(myTags[i]);
//   const element = myTags[i];
//   element.style.backgroundColor = "purple";
//   element.style.fontSize = "20px";
// }

// const allClassName = document.getElementsByClassName("info");
// // console.log(allClassName);
// for (let i = 0; i < allClassName.length; i++) {
//   const classElement = allClassName[i];
//   classElement.style.backgroundColor = "red";
//   classElement.style.border = "3px solid green";
// }

// const querySelectorAll = document.querySelectorAll(".info");
// for (let i = 0; i < querySelectorAll.length; i++) {
//   const selectorAll = querySelectorAll[i];
//   selectorAll.style.backgroundColor = "blue";
// }

/**
 * *Node vs Element in DOM
 */

// const container = document.querySelector("#container-2");

// console.log(container.childrenNodes);
// console.log(container.children);

// const item2 = document.getElementById("item-2");

// const parent = item2.parentElement.children;
// console.log(parent);

// const nextSibling = item2.nextElementSibling;
// console.log(nextSibling);

// const previousSibling = item2.previousElementSibling;
// console.log(previousSibling);

/**
 * * innerText || textContent || textHTML
 */
// const container4 = document.querySelector(".container4");
// console.log(container4.innerText);
// console.log(container4.textContent);
// console.log(container4.innerHTML);

// const myButton = document.getElementById("myBtn");
// myButton.setAttribute("class", "btn btn-primary bg");
// myButton.setAttribute("disabled", true);
// myButton.removeAttribute("disabled");
// // myButton.setAttribute("id", "myLink");

// const myLink = document.getElementById("myLink");
// console.log(myLink.title);

// const link = myLink.getAttribute("href");
// console.log(link);

/**
 * * Creating an element and append || add class name || class list ('add'), ('remove') || append child vs append || remove () or remove child ()
 */

const container5 = document.querySelector(".container5");
// console.log(container5);
const p = document.createElement("p");
// console.log(p);
p.innerText = "I am created by JS Dynamically";
container5.appendChild(p);

const h2 = document.createElement("h2");
h2.textContent = "Hello! I am H2 inject to HTML through by JS";
h2.classList.add("common-class");
h2.className = "common-class";
h2.classList.remove("common-class");
container5.appendChild(h2);

container5.append(h2, "SahabulIslamSifat");

// Remove and RemoveChild

// container5.remove();

// container5.removeChild(h2);
// container5.removeChild(p);

// console.log("hello");
var myBtn = document.getElementById("click-me-btn");
var container = document.getElementById("container");

console.log(myBtn);
console.log(container);

function handleMyBtnClick(){
  container.classList.add("red");
}

myBtn.addEventListener("click", handleMyBtnClick);
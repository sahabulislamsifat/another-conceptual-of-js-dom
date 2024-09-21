let sum = 0;

function clickMe() {
  // console.log("clicked");
  const h2 = document.getElementById("count");
  sum += 1;
  h2.innerText = sum;
}

const minusButton = document.getElementById("minus-btn");
minusButton.addEventListener("click", function () {
  const h2 = document.getElementById("count");
  sum -= 1;
  h2.innerText = sum;
});

const container = document.getElementById("review");

document.getElementById("submit-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("text-area").value;
  //   console.log(inputValue);
  //   const inputMainValue = inputValue.value;
  const li = document.createElement("li");
  li.innerText = inputValue;
  container.appendChild(li);

  document.getElementById("text-area").value = "";
});

// KeyboardEvent
const inputValue = document
  .getElementById("text-area")
  .addEventListener("keyup", function (event) {
    // console.log(event);
    if (event.key === "Enter") {
      const inputValue = document.getElementById("text-area").value;
      const p = document.createElement("p");
      p.innerText = inputValue;
      container.appendChild(p);

      document.getElementById("text-area").value = "";
    }
  });

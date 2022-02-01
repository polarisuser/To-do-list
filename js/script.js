const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const result = document.querySelector(".todo-list");

btn.addEventListener("click", function () {
    let output = document.createElement("div");
    output.className = "todo-item";
    result.appendChild(output);
    output.innerText = input.value;
    input.value = "";
    output.addEventListener("click", function () {
        output.remove();
    }); 
});
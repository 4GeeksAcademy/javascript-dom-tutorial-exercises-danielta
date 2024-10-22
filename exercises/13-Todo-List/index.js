// Your code here
var addInput = document.querySelector("#addToDo");
var inputValue;

function addDelete(){
    var spans = document.querySelectorAll("span");

    spans.forEach(span => span.addEventListener("click", () => {
        span.parentNode.remove();
    }))
}

addInput.addEventListener("input", (e) => {
    inputValue = e.target.value;
})

addInput.addEventListener("keyup", (evt) => {
    if(evt.key == "Enter") {
        if(inputValue && inputValue != " "){
            document.querySelector("ul").innerHTML += (
                `<li>
                    <span><i class="fa fa-trash"></i></span>
                    ${inputValue}
                </li>`);
        }
        addDelete();
        addInput.value = "";
        inputValue = "";
    }
})

addDelete();

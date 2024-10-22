// let button = document.getElementById("superDuperButton");
// button.addEventListener("click", function() {
// 	// Your code here

// });
let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	let newLi = document.createElement("li"); //isnt anything in "" a string? 
	newLi.innerHTML = "New Element";
	let myList = document.getElementById("myList");
	myList.appendChild(newLi)
});
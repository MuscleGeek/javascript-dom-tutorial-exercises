let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	var myUL = document.querySelector("#myList");
	var addLI = document.createElement("li");
	addLI.appendChild(document.createTextNode("Fourth Element"));
	myUL.appendChild(addLI);
});


function addBlur(elem) {

	console.log(elem);

	var targetDiv = elem;

	if (targetDiv.tagName == "B" || targetDiv.tagName == "I" ) {

		targetDiv = targetDiv.parentNode;

	}

		var clearDiv = document.createElement("div");
		var padding = 2 * parseFloat((window.getComputedStyle(targetDiv, null).getPropertyValue('padding')));

		clearDiv.style.width = (targetDiv.offsetWidth - padding) + "px";
		clearDiv.style.height = (targetDiv.offsetHeight - padding) + "px";
		clearDiv.style.background = "red";
		clearDiv.style.position = "absolute";
		clearDiv.style.zIndex = 10;
		clearDiv.style.opacity = "0.5";
		clearDiv.style.filter = "blur(20px);";

		clearDiv.addEventListener("click", removeBlur, false);

		targetDiv.insertBefore(clearDiv, targetDiv.firstChild);
}

function removeBlur(){
	this.parentNode.removeChild(this);
}
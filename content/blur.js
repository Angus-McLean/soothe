function addBlur(elem) {

	console.log(elem);
	elem.style.color = "red";

	var targetDiv = elem;

	if (targetDiv.tagName == "B" || targetDiv.tagName == "I" ) {

		// If it enters here it will stop working

		var targetClone = targetDiv.cloneNode(true);

		var newSpan = document.createElement("span");
		newSpan.appendChild(targetClone);
		newSpan.style.display = "inline";
		newSpan.style.background = "red";

		targetDiv.parentNode.insertBefore(newSpan, targetDiv);
		targetDiv.parentNode.removeChild(targetDiv);
	}

	else {
		var clearDiv = document.createElement("div");
		var padding = 2 * parseFloat((window.getComputedStyle(targetDiv, null).getPropertyValue('padding')));

		clearDiv.style.width = (targetDiv.offsetWidth - padding) + "px";
		clearDiv.style.height = (targetDiv.offsetHeight - padding) + "px";
		clearDiv.style.background = "red";
		clearDiv.style.position = "absolute";

		targetDiv.insertBefore(clearDiv, targetDiv.firstChild);
	}

}
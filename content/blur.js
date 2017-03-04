window.onload = function() {

	var targetDiv = document.getElementById("toc");

	console.log([targetDiv.offsetWidth, targetDiv.offsetHeight]);

	var clearDiv = document.createElement("div");
	var padding = 2 * parseFloat((window.getComputedStyle(targetDiv, null).getPropertyValue('padding')));

	console.log(targetDiv.offsetWidth - padding);

	clearDiv.style.width = (targetDiv.offsetWidth - padding) + "px";
	clearDiv.style.height = (targetDiv.offsetHeight - padding) + "px";
	clearDiv.style.background = "red";
	clearDiv.style.position = "absolute";
	clearDiv.innerHTML = "BLOCK";


	targetDiv.insertBefore(clearDiv, targetDiv.firstChild);
}

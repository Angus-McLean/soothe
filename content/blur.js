function addBlur(elem) {

	console.log(elem);

	if(elem.soothe) {
		return;
	} else {
		elem.soothe = {};
	}

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

		clearDiv.addEventListener("click", removeBlur, false);
		clearDiv.soothe = {parent : elem};

		// create span for bluring
		var newSpan = document.createElement('span');
		newSpan.style.filter = 'blur(2px)';

		// Append "Lorem Ipsum" text to new span:
		newSpan.appendChild( document.createTextNode(targetDiv.innerText) );
		newSpan.soothe = {parent : elem};


		// Replace old text node with new span:

		targetDiv.insertBefore(clearDiv, targetDiv.firstChild);
		elem.soothe.div = clearDiv;
	}
}

function removeBlur(){
	this.parentNode.removeChild(this);
	this.soothe = null;
}

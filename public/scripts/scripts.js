// Attach event listeners to buttons
var allButtons = document.getElementsByTagName('button');

for (var i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener("click", toggleTrigger, false);
};

// Reflect colours
function showActiveTriggers() {
	chrome.storage.local.get(['activeFilterTypes'], function (arrayOfFilterTypes) {

		(arrayOfFilterTypes.activeFilterTypes).forEach(function(item) {
			var button = document.getElementById(item);
			button.className = "mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-color--red-A100";
		});
	});
}

// Add new trigger
function toggleTrigger(){

	var allPermissions = [];

	chrome.storage.local.get(['activeFilterTypes'], function (arrayOfFilterTypes) {
		allPermissions = arrayOfFilterTypes.activeFilterTypes;
		console.log(allPermissions);
	});

	if (allPermissions.indexOf(this.id) > -1) {
		allPermissions.splice(allPermissions.indexOf(this.id, 1));
	}

	else {
		allPermissions.push(this.id);
	}

	chrome.storage.local.set({'activeFilterTypes': allPermissions});
	showActiveTriggers();

	console.log(allPermissions);
}

showActiveTriggers();



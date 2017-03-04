chrome.storage.local.set({'activeFilterTypes': ['racism', 'sexism']});

chrome.storage.local.get(['activeFilterTypes'], function (arrayOfFilterTypes) {

	(arrayOfFilterTypes.activeFilterTypes).forEach(function(item) {
		var button = document.getElementById(item);
		console.log(button);

		button.style.background = "red !important";
	});

});

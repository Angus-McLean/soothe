var offensiveTypes = [{
	title : 'Tag this as Homophobic',
	type : 'homophobic'
},{
	title : 'Tag this as Sexist',
	type : 'sexism'
},{
	title : 'Tag this as Violent',
	type : 'violence'
},{
	title : 'Tag this as Racist',
	type : 'racism'
},{
	title : 'Tag this as Transphobic',
	type : 'transphobism'
},{
	title : 'Tag this as Sexually Violent',
	type : 'sexual-violence'
}];

var config = {
	apiKey: "AIzaSyCzfBmcJuPk6eEpQVBez41AwMNcQhQICmc",
	authDomain: "soothe-c374a.firebaseapp.com",
	databaseURL: "https://soothe-c374a.firebaseio.com",
	storageBucket: "soothe-c374a.appspot.com",
	messagingSenderId: "261820611892"
};
firebase.initializeApp(config);

var triggersRef = firebase.database().ref().child('triggers');

triggersRef.once('value').then(function (snap) {
	var trigsArrs = fromObjToArr(snap.val());

	chrome.storage.local.set({TRIGGERS : trigsArrs});
});

offensiveTypes.forEach(function (typeObj) {
	triggersRef.child(typeObj.type).on('child_added', updateLocalStorage.bind(null, typeObj.type))
	// triggersRef.on('child_added', function (data) {
	// 	console.log('child_added',typeObj.type, data);
	// 	updateLocalStorage(typeObj.type, data.key);
	// });
});


function updateLocalStorage(type, data) {
	chrome.storage.local.get('TRIGGERS', function (val) {
		val.TRIGGERS[type].push(data.key);
		chrome.storage.local.set({TRIGGERS : val.TRIGGERS});
	});
}

function fromObjToArr(trigsObj) {
	return Object.keys(trigsObj).reduce((obj, type) => {obj[type] = Object.keys(trigsObj[type]); return obj;}, {});
}

function fromArrToDicts(trigsArrs) {
	var trigObj = {}
	for(var i in trigsArrs){
		trigObj[i] = trigsArrs[i].reduce((obj, word)=>{obj[word] = true; return obj}, {});
	}
	return trigObj;
}


offensiveTypes.forEach(function (offenseObj) {
	chrome.contextMenus.create({
		title : offenseObj.title,
		contexts : ['selection'],
		onclick : addOffensiveSlur.bind(null, offenseObj.type)
	})
})

function addOffensiveSlur(type, selectionInfo, tab) {
	console.info('categorizing offensive slur', type, selectionInfo.selectionText);
	var updateObj = {};
	updateObj[selectionInfo.selectionText] = true;
	return triggersRef.child(type).update(updateObj);
}

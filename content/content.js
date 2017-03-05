window.addEventListener("load", onloadFunction,false);

function onloadFunction(event){
    window.removeEventListener("load", onloadFunction, false); //remove listener, no longer needed

    iterateOffensiveNodes(document.body, function (elem) {
      // console.log('Offensive Node found : ', elem);
      addBlur(elem);
    });
}

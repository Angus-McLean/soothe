
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

offensiveTypes.forEach(function (offenseObj) {
  chrome.contextMenus.create({
    title : offenseObj.title,
    contexts : ['selection'],
    onclick : addOffensiveSlur.bind(null, offenseObj.type)
  })
})

function addOffensiveSlur(type, selectionInfo, tab) {
  console.info('categorizing offensive slur', type, selectionInfo.selectionText)
}

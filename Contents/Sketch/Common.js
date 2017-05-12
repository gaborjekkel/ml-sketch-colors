function alertBox(title, message){
  var app = [NSApplication sharedApplication]
  [app displayDialog: message withTitle: title];
};

function getFill(selectedLayer){
  return selectedLayer.style().fills().firstObject().color().immutableModelObject().hexValue()
}

function getBorder(selectedLayer){
  return selectedLayer.style().borders().firstObject().color().immutableModelObject().hexValue()
}

function getThickness(selectedLayer){
  return selectedLayer.style().borders().firstObject().thickness()
}

var colorPalette = [
		{blue: '00AAFF'},
		{grey: '3D474C'} 
	];

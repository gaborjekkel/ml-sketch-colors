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
    { grey: '3D474D' },
    { grey1: '8A9499' },
    { grey2: 'A0A9AD' },
    { grey3: 'CED5D9' },
    { grey4: 'EBF0F2' },
    { grey5: 'F0F5F7' },
    { red:'FF531A' },
    { orange: 'FF9F1A' },
    { yellow: 'FFF2B3' },
    { green: '8ACC47' },
    { turquoise: '41D9D9' },
    { blue: '00AAFF' },
    { purple: 'A47EE6' },
    { brown: '806040' }
];




"use strict";
exports.__esModule = true;
function printLabel(obj) {
    if (obj.name)
        console.log('Contiene un mame!!!');
    console.log(obj.label);
}
var testObj = { secret: 1, label: 'prueba', name: 'existo' };
testObj.label = 'Label 2';
// testObj.secret = 5
printLabel(testObj);
function prueba(val) {
    console.log(val.x);
}
var obj = { x: "p1", y: "p2" };
prueba(obj);
exports["default"] = {};

"use strict";
exports.__esModule = true;
var funcionOpcional = function (x, y /**y?: number */) {
    if (y === void 0) { y = 0; }
    console.log(x, y);
};
funcionOpcional(1);
funcionOpcional(1, 3);
exports["default"] = {};

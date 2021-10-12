var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, size) {
        this.name = name;
        this.size = size;
    }
    Animal.prototype.isBig = function () {
        if (this.size > 10) {
            return true;
        }
        else {
            return false;
        }
    };
    return Animal;
}());
;
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, size) {
        return _super.call(this, name, size) || this;
    }
    return Snake;
}(Animal));
;
var snake = new Snake('Serpiente', 2);
console.log(snake.name);
console.log(snake.isBig());

var Hello = /** @class */ (function () {
    function Hello(message) {
        this.message = message;
    }
    Hello.prototype.saludo = function () {
        return 'saludos ' + this.message;
    };
    return Hello;
}());
var hola = new Hello('TypeScript');
console.log(hola.saludo());

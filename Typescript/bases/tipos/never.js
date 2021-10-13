"use strict";
(function () {
    //never es una función que usualmente va a terminar con un error.
    var abc = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('auxilio');
    console.log('Hola mundo');
})();

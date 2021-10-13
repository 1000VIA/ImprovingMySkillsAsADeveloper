"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'No hay apellido');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();

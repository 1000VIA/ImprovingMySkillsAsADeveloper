"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName('Tony', 'Stack');
    console.log({ name: name });
})();

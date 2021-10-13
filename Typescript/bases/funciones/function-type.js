"use strict";
(function () {
    /**Recibe una funciín que recibe dos números a y b y regresa un numero */
    var addNumbers = function (a, b) { return a * b; };
    /**Recibe una funciín que recibe un string y regresa un string */
    var greet = function (name) { return "Hola  " + name; };
    /**Recibe una funciín que no recibe ningun argumento y regresa un string*/
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado"; };
    // let myFunction: Function;
    //* myFunction = 10;
    //* console.log(myFunction);
    /**************************************************/
    var myFunction1;
    myFunction1 = addNumbers;
    console.log(myFunction1(4, 5));
    /**************************************************/
    var myFunction2;
    myFunction2 = greet;
    console.log(myFunction2('1000VIA'));
    /**************************************************/
    var myFunction3;
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();

"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en prblemas');
    }
    else {
        console.log('Estamos salvados');
    }
    // avengers = 123
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();

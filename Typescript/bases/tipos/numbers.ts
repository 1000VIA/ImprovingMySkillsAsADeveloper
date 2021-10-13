(()=>{

    let avengers: number =  10;
    console.log(avengers);
    
    const villians: number = 20;

    if ( avengers < villians ) {
        console.log('Estamos en prblemas');
    }else{
        console.log('Estamos salvados');
    }

    // avengers = 123

    avengers = Number('55A');

    console.log({ avengers });
    

})();
(() => {

    const hero: string = 'flash';

    function returnName(): string{
        return hero;
    }

    const activateBasignal = (): string =>{
        return 'Batiseñal activada!'
    }
    
    console.log(typeof activateBasignal);

    const heroName = returnName();
    

})();
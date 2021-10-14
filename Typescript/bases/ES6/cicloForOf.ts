(() => {

    type Avenger ={
        name: string,
        weapon:string
    }

    const irman: Avenger = {
        name: 'Iroman',
        weapon:'Armosuit'
    }

    const CaptaInAmerica: Avenger = {
        name: 'Capitán América',
        weapon:'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon:'Mjolnir'
    }

    const avengers: Avenger[] = [ irman, thor, CaptaInAmerica ];

    for(const avenger of avengers){
        console.log( avenger.name, avenger.weapon );
        
    }


})();
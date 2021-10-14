(()=>{
    
    type Avengers = {
        nik: string;
        iroman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nik: 'Samuel L. Jackson',
        iroman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder:1500
    }

    // const { poder, vision } = avengers

    // console.log( poder, vision.toLocaleUpperCase());

    const printAvenger = ({ iroman, ...rest }:Avengers) => {
        console.log(iroman, rest);
        
    }  

    // printAvenger( avengers )

    // const avengersArr: string[] = ['Cap. América', 'Iroman', 'Hulk'];
    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15];
    
    // const iroman = avengersArr[1];
    const [capitan, iroman ,] = avengersArr;

    console.log({ iroman, capitan });
    

})();
(() => {

    class Avenger {
        // private name: string;
        // private team: string;
        // public realName?: string;
        static aveAge: number = 35;
        static getAveAge(){
            return this.name;
        }

        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string,
            ){}

            public bio(){
                return `${ this.name } (${ this.team })`
            }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');

    // console.log( antman );

    // console.log(Avenger.aveAge);
    // console.log(Avenger.getAveAge());//Accediendo a la clase.
    // console.log(antman.bio());
    
    
    


})();
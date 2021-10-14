(() => {

    class Avenger {
        private name: string;
        private team: string;
        public realName?: string;
        static aveAge: number = 35;

        constructor( name: string, team: string, realName?: string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capotan');

    // console.log( antman );
    

    /**para acceder a las propiedades estaticas se 
     * hace referencia a la clase seguido de la propiedad estática.
    */
    // console.log( Avenger.aveAge );
    


})();
(() => {

    class Apocalisis {

        static instance: Apocalisis;

        private constructor( public name: string){}

        static callApocalisis(): Apocalisis{
            if(!Apocalisis.instance){
                Apocalisis.instance = new Apocalisis('Soy Apocalisis... la única');
            }

            return Apocalisis.instance;
        }

        changeName( newName: string): void {
            this.name = newName;
        }
    }


    const apocalisis1 =  Apocalisis.callApocalisis();
    const apocalisis2 =  Apocalisis.callApocalisis();
    const apocalisis3 =  Apocalisis.callApocalisis();

    apocalisis1.changeName('Dayana')

    // const apocalisis = new Apocalisis('Soy Apocalisis... la única');
    

    console.log(apocalisis1);
    



})();
(() => {


    class Avenger {

        constructor( name = 'No name', power = 0 ){
            this.name = name;
            this.power = power;
        }
    }
    

    class FlyAvenger extends Avenger {
        flying;

        constructor( name, power ){
            super( name, power );
            this.flying = true;
        }
    }

    const hulk = new Avenger( 'Hulk', 9001 )
    const falcomn = new FlyAvenger( 'Falcon', 50 )

    console.log(hulk);
    console.log(falcomn);
    

})();
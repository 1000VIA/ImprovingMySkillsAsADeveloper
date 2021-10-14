(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
       
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo!';
        }
    }

    class villian extends Mutante {
        conquietarMundo(){
            return 'Mundo conquistado';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new villian('Magneto', 'Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquietarMundo());

    const printName = (charater: Mutante) => console.log(charater.realName);

    // printName(wolverine)
    
    

})();
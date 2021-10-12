class Hellos {
    message: string;

    constructor(message: string){
        this.message = message;
    }

    saludo(){
        return 'saludos ' + this.message;
    }
}

let holas = new Hellos('TypeScript');

console.log(hola.saludo());


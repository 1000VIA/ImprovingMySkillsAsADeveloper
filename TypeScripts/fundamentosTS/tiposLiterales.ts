interface ValidacioExitosa {
    esvalido: true;
    reason: null;
}

interface Validaciofallida {
    esvalido: false;
    reason: string;
}

type ResultadoValidacion = ValidacioExitosa | Validaciofallida;

const resultado: ResultadoValidacion =  {
    esvalido: true,
    reason: null
}
console.log(resultado);

type Dado = 1 | 2 | 3 | 4 | 5 | 6;
const dado: Dado = 3;
console.log(dado);

type Color = 'rojo' | 'verde' | 'azul';
const color: Color = 'rojo';
console.log(color);



export default {}
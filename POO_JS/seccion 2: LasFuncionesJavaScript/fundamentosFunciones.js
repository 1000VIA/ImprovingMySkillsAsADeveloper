function sumarNumeros()  {
    //prototype: objeto que llega vacio.
    //arguments: un arreglo con todos los argumentos que pasamos.
    let i, tot = 0;
    let numeros = arguments.length;
    for (i = 0; i < numeros; i++) {
        tot += arguments[i];
    }
    return tot;
}
alert(sumarNumeros(2,6,8));
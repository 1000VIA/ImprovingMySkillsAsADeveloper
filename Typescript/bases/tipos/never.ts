(() => {

    //never es una función que usualmente va a terminar con un error.
    const abc = (message: string):( never | number) => {

        if (false) {
            throw new Error( message );
        }
        return 1;        
    }

    abc('auxilio');
    console.log('Hola mundo');
    

})();
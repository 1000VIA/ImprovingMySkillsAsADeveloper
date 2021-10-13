(() =>  {

    /**Recibe una funciín que recibe dos números a y b y regresa un numero */
    const addNumbers = ( a: number, b: number ) => a * b;
    /**Recibe una funciín que recibe un string y regresa un string */
    const greet = ( name: string) => `Hola  ${ name }`;
    /**Recibe una funciín que no recibe ningun argumento y regresa un string*/
    const saveTheWorld = () => `El mundo está salvado`;

    // let myFunction: Function;

    //* myFunction = 10;
    //* console.log(myFunction);
    
    /**************************************************/
    let myFunction1: (x: number, y: number)=> number;

    myFunction1 = addNumbers;
    console.log(myFunction1( 4, 5 ));

    /**************************************************/
    let myFunction2: ( y: string)=> string;
    myFunction2 = greet;
    console.log(myFunction2( '1000VIA' ));


    /**************************************************/
    let myFunction3: ()=> string;
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
    

})();
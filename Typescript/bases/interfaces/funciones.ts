(() => {

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbersFuncion: addTwoNumbers;

    addNumbersFuncion = (a: number, b:number) => a * b;

   
    
    console.log(addNumbersFuncion(30, 15));
    

})();
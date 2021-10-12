type SomethinngComplex = {
    foo: number,
    bar: string
}
 function takeSomethingComplex(arg: SomethinngComplex){
    console.log(arg.foo, arg.bar);
 }

 function getBar(): string {
     return 'some bar';
 }

/**
 * Example error production
 */
 const fail = {
     foo: 123,
     bar: getBar()
 };

 takeSomethingComplex(fail); // TS ERROR HAPPENS HERE
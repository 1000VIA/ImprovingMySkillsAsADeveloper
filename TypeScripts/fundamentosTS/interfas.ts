interface objectInterface {
    label: string;
    name?: string; //no es requerida
    readonly secret:number;
}

function printLabel(obj: objectInterface){
    if(obj.name) console.log('Contiene un mame!!!');
    
    console.log(obj.label);
}
let testObj:objectInterface = { secret: 1, label: 'prueba', name: 'existo'};

testObj.label = 'Label 2';
// testObj.secret = 5

printLabel(testObj);



interface exam {
    x: string;
  }
   
  function prueba(val: exam){
      console.log(val.x);
  }
   
  const obj = {x: "p1", y: "p2"}
   
  prueba(obj);

  export default {}
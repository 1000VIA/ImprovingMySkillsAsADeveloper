
/**
 *  forEach() - en los Sets
 */


let personas = new Set(["Milvia", "Dayana", "Henry"]);

//Si queremos barrer el set, lo ideal es usar un forEach().

personas.forEach((valor, lave, setOriginal)=>{
    console.log( valor, lave, setOriginal );

    console.log(personas === setOriginal);
})

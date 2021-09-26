
// Asignamos la función a la variable saludo.
//cuando no le asignamos nombre a una función la llamamlos función anónima.
var  saludo = function(ahora)  {
    if (ahora >= 22 || ahora <= 5) {
        document.write("Buenas noches");
    }else
    document.write("Buenas días");
}
// llama a la función 
saludo(10)
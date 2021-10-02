/**
 *  Programación orientada a objetos
 */

function Canvas(){
    this.canvas = null;
    this.ctx = null;
    this.imagen = new Image();
}

//Creamos nuestros métodos y los pasamos por medio del prototype
Canvas.prototype = {
    inicio:function(){
        if (this.canvas && this.canvas.getContext) {
            this.ctx = this.canvas.getContext("2d");
            if (this.ctx) {
                return this.ctx;
            }else{
                null
            }
        }
    },
    procesaImagen:function(){
        canvas.limpiar();
        this.ctx.drawImage(this.imagen, 10, 10);
    },
    filtro:function(tipo){
        if(tipo === "oscurecer"){new Oscurecer(this);}
        if(tipo === "aclarar"){new Aclarar(this);}
        if(tipo === "grises"){new Grises(this);}
        if(tipo === "negativo"){new Negativo(this);}
        if(tipo === "flip"){new FlipHorizontal(this);}
    },
    limpiar:function(){
        let w = this.imagen.width;
        let h = this.imagen.height;
        this.ctx.clearRect(250,10,w,h);
    },
    cargar:function(archivo){
        this.imagen.src ="imagenes/"+archivo;
        this.imagen.onload = function(e){
            canvas.procesaImagen();
        }
    },
    dibujar:function(datos){
        this.ctx.putImageData(datos,250,10)
    },
}

function Filtro(canvas){
    this.w = canvas.imagen.width;
    this.h = canvas.imagen.height;
    this.imagenData = canvas.ctx.getImageData(10,10,this.w, this.h);
    this.data = this.imagenData.data;
}

function Oscurecer(canvas){//Creamos una clase o función contructora llamada Oscurecer
    f = new Filtro(canvas); //Usamos el filtro y recibimos el canvas
    for(let i = 0; i < f.data.length; i+=4){
        f.data[i] -= 100; //rojo
        f.data[i + 1] -= 100; //verde
        f.data[i + 2] -= 100; //azul
    }
    canvas.dibujar(f.imagenData);
}
function Aclarar(canvas){//Creamos una clase o función contructora llamada Aclarar
    f = new Filtro(canvas); //Usamos el filtro y recibimos el canvas
    for(let i = 0; i < f.data.length; i+=4){
        f.data[i] += 100; //rojo
        f.data[i + 1] += 100; //verde
        f.data[i + 2] += 100; //azul
    }
    canvas.dibujar(f.imagenData);
}
function Grises(canvas){//Creamos una clase o función contructora llamada Grises
    f = new Filtro(canvas); //Usamos el filtro y recibimos el canvas
    for(let i = 0; i < f.data.length; i+=4){
        let gris = (f.data[i] + f.data[i+1]+ f.data[i+2]) / 3;
        f.data[i] = gris; //rojo
        f.data[i + 1] = gris; //verde
        f.data[i + 2] = gris; //azul
    }
    canvas.dibujar(f.imagenData);
}
function Negativo(canvas){//Creamos una clase o función contructora llamada Negativo
    f = new Filtro(canvas); //Usamos el filtro y recibimos el canvas
    for(let i = 0; i < f.data.length; i+=4){
        f.data[i] = 255 - f.data[i]; //rojo
        f.data[i + 1] = 255 - f.data[i + 1]; //verde
        f.data[i + 2] = 255 - f.data[i + 2]; //azul
    }
    canvas.dibujar(f.imagenData);
}

function FlipHorizontal(canvas){
    f = new Filtro(canvas);
    for(let x = 0; x < f.w / 2; x++){
        for(let y = 0; y < f.h; y++){
            let i = (y * f.w + x);
            let j = (y * f.w + ((f.w - 1) - x));

            //Valores temporales
            let p1 = f.data[i * 4]; //Rojo
            let p2 = f.data[i * 4 + 1]; //verde
            let p3 = f.data[i * 4 + 2]; //azul

            f.data[i * 4] = f.data[j * 4];
            f.data[i * 4 + 1] = f.data[j * 4 + 1];
            f.data[i * 4 + 2] = f.data[j * 4 + 2];

            f.data[j * 4] = p1;
            f.data[j * 4 + 1] = p2;
            f.data[j * 4 + 2] = p3;
        }
    }
    canvas.dibujar(f.imagenData);
}

window.onload = function(){
    //
    let archivoSelect = document.getElementById("archivo");
    let filtroSelect = document.getElementById("filtro");

    /***************** 
    EVENTOS
    ***************/
    archivoSelect.onchange = function(){
        canvas.cargar(archivoSelect.value);
    }
    filtroSelect.onchange = function(){
        canvas.filtro(filtroSelect.value);
    }
    /***************** 
    CODIGO
    ***************/
    canvas = new Canvas();
    canvas.canvas = document.getElementById("canvas");
    if (canvas.inicio()) {
        canvas.cargar("atenea.png")
    }else{
        alert("El navegador no acepta el CANVAS")
    }

}
/**
 *  La estructura del objeto base del NAMESPACE
 */

//Creamos las propiedades y funciones que vamos a usar
DIBUJA={
    canvas:null,
    bandera:false,
    pos:{},
    ctx:null,
    inicio:function(){
        if (this.canvas && this.canvas.getContext) {
            this.ctx = this.canvas.getContext("2d");
            if (this.ctx) {
                // alert("El navegador acepta el CANVAS")
                return this.ctx;
            }else{
                alert("El navegador no acepta el CANVAS")
            }
        }else{
            alert("El navegador no acepta el CANVAS")
        }
    },
    ajusta:function(xx,yy){
        let posCanvas = this.canvas.getBoundingClientRect();//Ajustamos por medio del método getBoundingClientRect
        let x = xx - posCanvas.left;
        let y = yy - posCanvas.top;
        return {x:x, y:y}
    },
    dibuja:function(inicio, fin){
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.moveTo(inicio.x, inicio.y);
        this.ctx.lineTo(fin.x, fin.y);
        this.ctx.stroke();
    }
}
window.onload = function(){ //niciamos el valor del canvas
    DIBUJA.canvas = document.getElementById("canvas");//Pasamos la referencia de canvas con el id: canvas
    //Creamos los Eventos
    DIBUJA.canvas.onmousedown=function(e){
        this.pos = DIBUJA.ajusta(e.clientX, e.clientY)//Detectamos las coordenadas
        this.bandera = true;
    }
    DIBUJA.canvas.onmouseup=function(e){
        this.bandera = false;
    }
    DIBUJA.canvas.onmousemove=function(e){
        if (this.bandera) {
            let fin = DIBUJA.ajusta(e.clientX, e.clientY);
            //Llamamos al objeto DIBUJA a nuestra función dibuja
            DIBUJA.dibuja(this.pos, fin);
            this.pos = fin;
        }
    }
    /******** INICIO *********/
    DIBUJA.inicio();
}
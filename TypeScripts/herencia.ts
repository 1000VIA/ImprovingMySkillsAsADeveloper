class Animal {
    public name:string
    readonly size: number;

    constructor(name:string, size: number){
        this.name = name;
        this.size = size;
    }

    public isBig(){
        if (this.size > 10) {
            return true;
        }else{
            return false;
        }
    }
};

class Snake extends Animal {
    constructor(name:string, size:number){
        super(name, size);
    }
};

let snake = new Snake('Serpiente', 2);

console.log( snake.name);
console.log( snake.isBig());
console.log( snake);

const funcionOpcional = (x: number, y: number = 0 /**y?: number */) => {
    console.log(x, y);
}

funcionOpcional(1);
funcionOpcional(1, 3);

export default {}
(() => {
    
    const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): string => {
        if(upper){
            return `${ firstName } ${ lastName || 'No hay apellido' }`.toUpperCase();
        }else{
            return `${ firstName } ${ lastName || 'No hay apellido' }`;
        }
        
    }

    const name = fullName('Tony', 'Stark', true);

    console.log({ name });
    

})();
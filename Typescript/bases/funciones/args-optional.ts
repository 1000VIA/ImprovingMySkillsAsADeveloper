(() => {
    
    const fullName = ( firstName: string, lastName?: string ): string => {
        return `${ firstName } ${ lastName || 'No hay apellido' }`;
    }

    const name = fullName('Tony');

    console.log({ name });
    

})();
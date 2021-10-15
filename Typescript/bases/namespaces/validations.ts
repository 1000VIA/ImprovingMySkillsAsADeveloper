
namespace Validations {

    export const validateText = ( text: string ): boolean => {

        return (text.length > 3 ? true : false )

        // if ( text.length > 3 ) {
        //     return true;
        // }else{
        //     return false;
        // }
    }

    export const validateDate = ( myDate: Date ): boolean => {
        return ( isNaN( myDate.valueOf() ) )
            ? false 
            : true
    }

}

console.log(Validations.validateText('Milvia'));

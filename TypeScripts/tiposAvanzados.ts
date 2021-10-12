interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}


declare function getSmallPet(): Fish | Bird 
    
const pet = getSmallPet();

if('swim' in pet ){
    pet.swim();
}

function isFish( pet:Fish | Bird ): pet is Fish{
    return(pet as Fish).swim !== undefined; // Se castea una variable a un tipo en espesifico.
}

if(isFish(pet)){
    pet.swim();
}else{
    pet.fly();
}
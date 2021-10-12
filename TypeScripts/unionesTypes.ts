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
pet.layEggs();


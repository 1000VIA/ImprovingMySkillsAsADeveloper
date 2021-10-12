var pet = getSmallPet();
if ('swim' in pet) {
    pet.swim();
}
function isFish(pet) {
    return pet.swim !== undefined; // Se castea una variable a un tipo en espesifico.
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}

"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class villian extends Mutante {
        conquietarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new villian('Magneto', 'Magnus');
    const printName = (charater) => console.log(charater.realName);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.aveAge = 35;
    const antman = new Avenger('Antman', 'Capotan');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe se ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAveAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.aveAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
})();
(() => {
    class Apocalisis {
        constructor(name) {
            this.name = name;
        }
        static callApocalisis() {
            if (!Apocalisis.instance) {
                Apocalisis.instance = new Apocalisis('Soy Apocalisis... la única');
            }
            return Apocalisis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalisis1 = Apocalisis.callApocalisis();
    const apocalisis2 = Apocalisis.callApocalisis();
    const apocalisis3 = Apocalisis.callApocalisis();
    apocalisis1.changeName('Dayana');
    console.log(apocalisis1);
})();
//# sourceMappingURL=main.js.map
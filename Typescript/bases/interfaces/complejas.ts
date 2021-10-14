(() => {

    interface Client {
        name: string,
        age?:number,
        address: Address,
        getFullAddress( id: string ):string;
    }

    interface Address {
        id:number,
        zip: string,
        city: string
        
    }
    const client: Client = {
        name: 'Milvia',
        age: 33,
        address:{
            id:123,
            zip: 'KFL SUD',
            city:'Medellin'
        },

        getFullAddress( id: string ){
            return this.address.city;
        }
    }


    const client2: Client = {
        name: 'Dayana',
        age: 18,
        address: {
            id:123,
            zip: 'KFL SUD',
            city:'Medellin'
        },
        getFullAddress( id: string ){
            return this.address.city;
        }
    }


})();
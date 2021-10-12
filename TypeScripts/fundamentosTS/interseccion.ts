type Persons = {
    firstName: string;
    lastName: string;
};

type Clients = {
    clientNumber: number;
};

type NewClients =  Person & Client;

// const x: NewClients;



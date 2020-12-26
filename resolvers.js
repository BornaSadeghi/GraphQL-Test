const personDatabase = {};
const continentDatabase = {};

continentDatabase[69] = {
    name: "Oceania",
    countries: ["Australia", "New Zealand"]
}

let generateId = () => Math.floor(Math.random()*10e9);

class Person {
    constructor (id, { firstName, lastName, gender, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}

class Continent {
    constructor (id, { name, countries }) {
        this.id = id;
        this.name = name;
        this.countries = countries;
    }
}

const resolvers = {
    getPerson: ({ id }) => {
        return new Person (id, personDatabase[id]);
    },
    createPerson: ({ input }) => {
        let id = generateId();
        personDatabase[id] = input;
        return new Person (id, input);
    }, 
    hello: () => "hey bud",
    getContinent: ({ name }) => {
        for (let id in continentDatabase){
            let continent = continentDatabase[id]
            console.log(continent.name, name)
            if (continent.name == name){
                return new Continent(id, continentDatabase[id]);
            }
        }
    },
    createContinent: ({ input }) => {
        let id = generateId();
        continentDatabase[id] = input;
        return new Continent(id, input)
    },
}

export default resolvers;
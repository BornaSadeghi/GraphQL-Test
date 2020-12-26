import Person from './controllers/PersonController';
import Continent from './controllers/ContinentController';

const personDatabase = {};
const continentDatabase = {};

continentDatabase[69] = {
    name: "Oceania",
    countries: ["Australia", "New Zealand"]
}

let generateId = () => Math.floor(Math.random()*10e9);

const resolvers = {
    getPerson: ({ id }) => {
        return new Person (id, personDatabase[id]);
    },
    createPerson: ({ input }) => {
        let id = generateId();
        console.log(input.age)
        personDatabase[id] = input;
        return new Person (id, input);
    }, 
    hello: () => "hey bud",
    getContinent: ({ name }) => {
        for (let id in continentDatabase){
            let continent = continentDatabase[id]
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
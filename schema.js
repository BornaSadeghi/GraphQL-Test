import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        getPerson(id: ID): Person
        getContinent(name: String): Continent
        hello: String
    }

    type Person {
        id: ID
        firstName: String!
        lastName: String!
        age: Int!
        gender: Gender!
        email: String!
        isLeftHanded: Boolean
        balance: Float
    }

    input PersonInput {
        id: ID
        firstName: String!
        lastName: String!
        age: Int!
        gender: Gender!
        email: String!
        isLeftHanded: Boolean
        balance: Float
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Continent {
        id: ID
        name: String!
        countries: [String]!
    }

    input ContinentInput {
        id: ID
        name: String!
        countries: [String]!
    }

    type Country {
        id: ID
        name: String!
        continent: Continent!
    }

    type Mutation {
        createPerson(input: PersonInput): Person
        createContinent(input: ContinentInput): Continent
    }

`);

export default schema;
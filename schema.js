import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        person: Person
    }

    type Person {
        id: ID
        firstName: String
        lastName: String
        age: Int
        gender: String
    }
`);

export default schema;
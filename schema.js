import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        person: Person
    }

    type Person {
        id: ID
        firstName: String!
        lastName: String!
        age: Int!
        emails: [Email]!
        gender: String!
        pets: [Pet]
    }

    type Pet {
        name: String
        age: Int
    }

    type Email {
        email: String!
    }
`);

export default schema;
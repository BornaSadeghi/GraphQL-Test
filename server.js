import express from 'express'
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('i like graph queue ell')
});

const root = {
    person: () => {
        return {
            "id": 69,
            "firstName": "Jowe",
            "lastName": "Swanson",
            "age": 19,
            "gender": "Male",
            "emails": [
                { email: "sadeghiborna@gmail.com" },
                { email: "sadegb1@mcmaster.ca" }
            ],
            "pets": [
                { name: "Mango" },
                { name: "Catter", age: 5 }
            ]
        }
    }
}

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('Running on localhost:8080/graphql'))

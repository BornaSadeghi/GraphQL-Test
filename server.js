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
            "gender": "Male"
        }
    }
}

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('Running on localhost:8080/graphql'))

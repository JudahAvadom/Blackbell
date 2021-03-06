import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
    resolvers,
    typeDefs
});

server.listen().then(({url}) => {
    console.log(`Server running at ${url}`);
})
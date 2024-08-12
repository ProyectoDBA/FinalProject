// Call ApolloServer and startStandaloneServer
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from "mongoose";

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/', { dbName: 'Enterprise'})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Load models
import './models/professionals.js';
import './models/employers.js';
import './models/jobPosting.js';
import './models/application.js';

// Load data resources
import { typeDefs } from './data/schema.js';
import { resolvers } from './data/resolvers.js';

// Publish data resources
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Run Apollo Server
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000} 
});

console.log(`Server ready at ${url}`);



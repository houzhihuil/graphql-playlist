const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

 
// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb+srv://root:7M92575Mn6QC0hjO@cluster0.na3ur4v.mongodb.net/cluster0')

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});

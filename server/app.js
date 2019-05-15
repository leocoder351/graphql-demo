const express = require('express');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// connect to Mongodb Atlas
mongoose.connect('mongodb+srv://leocoder:qq123456@graphql-demo-vv9as.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
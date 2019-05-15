const express = require('express');
const graphqlHttp = require('express-graphql');
<<<<<<< HEAD
const mongoose = require('mongoose');
=======
>>>>>>> 6467802c25456302c38afe0db7a898690e3a9c35
const schema = require('./schema/schema');

const app = express();

<<<<<<< HEAD
// connect to Mongodb Atlas
mongoose.connect('mongodb+srv://leocoder:qq123456@graphql-demo-vv9as.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
=======
app.use('/graphql', graphqlHttp({
  schema
>>>>>>> 6467802c25456302c38afe0db7a898690e3a9c35
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
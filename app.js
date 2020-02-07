const express = require("express");
const app = express();
const schema = require("./schema/schema");
const mongoose = require("mongoose");
require("dotenv/config");

// Require graphql express
const graphHTTP = require("express-graphql");

// Connect to the atlas mongoDB
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true
  },
  () => {
    console.log("Connected to mongo atlas");
  }
);

// Add the graphql to the middleware
app.use(
  "/graphql",
  graphHTTP({
    schema,

    graphiql: true
  })
);

app.listen(4000, () => console.log("Listening on port 4000"));

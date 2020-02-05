const express = require("express");
const app = express();
const schema = require("./schema/schema");

// Require graphql express
const graphHTTP = require("express-graphql");

// Add the graphql to the middleware
app.use(
  "/graphql",
  graphHTTP({
    schema,

    graphiql: true
  })
);

app.listen(4000, () => console.log("Listening on port 4000"));

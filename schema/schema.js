const graphql = require("graphql");
const _ = require("lodash");

// Dummy data
const books = [
  { name: "The one two", genre: "Fantasy", id: "1" },
  { name: "Boat", genre: "Horror", id: "2" },
  { name: "Where do that go?", genre: "Sci-Fic", id: "3" }
];

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// This is like a schema for a model
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    genre: {
      type: GraphQLString
    }
  })
});

// This the root query which we create all our queries to query data.
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db / other source
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

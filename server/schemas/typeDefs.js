const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        authors: [String]
        description: String
        bookId: ID
        link: String
        title: String
        image: String
    }

    input BookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
      }

    type Query {
        user: User
    }

    type Auth {
        token: ID
        user: User
    }

    type Mutation {
        removeBook(bookId: ID!): User
        saveBook(input: BookInput): User
        addUser(username: String!, email:String!, password:String!): Auth
        login(email:String!, password:String!): Auth        
    }

`

module.exports = typeDefs;
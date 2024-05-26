const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    password: String!
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input bookInput{
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    SaveBook(newBook: bookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

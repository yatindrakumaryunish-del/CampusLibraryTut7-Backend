const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const pool = require('./db');

// 1. GraphQL Schema Define karo
const typeDefs = `#graphql
  type Author {
    id: ID!
    name: String!
    country: String
    books: [Book!]!
  }

  type Book {
    id: ID!
    title: String!
    year: Int
    author: Author!
  }

  type Query {
    authors: [Author!]!
    author(id: ID!): Author
    books(year: Int): [Book!]!
  }

  type Mutation {
    addBook(title: String!, year: Int, authorId: ID!): Book!
    deleteBook(id: ID!): Boolean!
  }
`;

// 2. Resolvers Define karo (Database operations)
const resolvers = {
  Query: {
    // Sabhi authors ko fetch karo
    authors: async () => {
      const [rows] = await pool.query('SELECT * FROM authors');
      return rows;
    },

    // Specific author ko fetch karo by ID
    author: async (_parent, { id }) => {
      const [rows] = await pool.query(
        'SELECT * FROM authors WHERE id = ?',
        [id]
      );
      return rows[0];
    },

    // Books fetch karo (optional year filter ke saath)
    books: async (_, { year }) => {
      if (year !== undefined && year !== null) {
        const [rows] = await pool.query(
          'SELECT * FROM books WHERE year = ?',
          [year]
        );
        return rows;
      }

      const [rows] = await pool.query('SELECT * FROM books');
      return rows;
    }
  },

  // Author type ke liye nested resolver
  Author: {
    books: async (author) => {
      const [rows] = await pool.query(
        'SELECT * FROM books WHERE author_id = ?',
        [author.id]
      );
      return rows;
    }
  },

  // Book type ke liye nested resolver
  Book: {
    author: async (book) => {
      const [rows] = await pool.query(
        'SELECT * FROM authors WHERE id = ?',
        [book.author_id]
      );
      return rows[0] || null;
    }
  },

  // Mutations (Data add/delete karne ke liye)
  Mutation: {
    // Naya book add karo
    addBook: async (_parent, { title, year, authorId }) => {
      const [result] = await pool.query(
        'INSERT INTO books (title, year, author_id) VALUES (?, ?, ?)',
        [title, year ?? null, authorId]
      );

      // Newly inserted book ko fetch karke return karo
      const [rows] = await pool.query(
        'SELECT * FROM books WHERE id = ?',
        [result.insertId]
      );

      return rows[0];
    },

    // Book delete karo by ID
    deleteBook: async (_, { id }) => {
      const [result] = await pool.query(
        'DELETE FROM books WHERE id = ?',
        [id]
      );

      return result.affectedRows > 0;
    }
  }
};

// 3. Apollo GraphQL Server start karo
async function start() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  });

  console.log(`🚀 GraphQL Server ready at ${url}`);
  console.log(`📚 Open in browser: ${url}`);
}

start();

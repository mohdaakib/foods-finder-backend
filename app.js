import express from "express";
import { limiter } from "./src/middlewares/rateLimiter.js";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./src/graphql/schema.js";
import resolvers from "./src/graphql/resolvers.js";
import searchRoutes from "./src/routes/searchRoutes.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import logger from "./src/utils/logger.js";

async function startServer() {
  const app = express();

  // Middleware
  app.use(limiter);
  app.use(express.json());

  // REST Routes
  app.use("/search", searchRoutes);

  // GraphQL Setup
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  // Error Handling
  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    logger.info(`🚀 Server running on port ${PORT}`);
    logger.info(
      `GraphQL endpoint: http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
  });
}

startServer().catch((err) => {
  logger.error("Failed to start server", err);
});

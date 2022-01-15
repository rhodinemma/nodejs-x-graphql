import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

async function initServer() {
  const app = express();
  dotenv.config();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("Server started successfully");
  });
  const PORT = process.env.PORT || 4000;
  try {
    await mongoose.connect(process.env.mongodb);
    console.log("Database connected successfully");
  } catch {
    console.log(error);
  }
  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
  });
}

initServer();
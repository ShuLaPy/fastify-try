const fastify = require("fastify")({ logger: true });

// routes
const routes = require("./routes");

// db
const mongoose = require("mongoose");

// db connection
mongoose
  .connect("mongodb://localhost/fastify-try")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

// routes
fastify.get("/", async (request, reply) => {
  return { visitor: "Shubham Lad" };
});

fastify.register(routes, { prefix: "/api" });

// starting server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is running at ${address}`);
  } catch (error) {}
};

start();

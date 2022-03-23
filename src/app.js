const fastify = require("fastify")({ logger: true });

fastify.get("/", async (request, reply) => {
  return { visitor: "Shubham Lad" };
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is running at ${address}`);
  } catch (error) {}
};

start();

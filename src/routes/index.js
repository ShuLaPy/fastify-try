const courseController = require("../controllers/course.contrller");

module.exports = function (fastify, opts, done) {
  fastify.get("/course", courseController.getCourse);
  fastify.get("/course/:id", courseController.getCourseById);
  fastify.post("/course", courseController.addNewCourse);
  fastify.put("/course/:id", courseController.updateCourse);
  fastify.delete("/course/:id", courseController.deleteCourse);
  done();
};

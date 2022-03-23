const courseController = require("../controllers/course.contrller");

const routes = [
  {
    method: "GET",
    url: "/api/course",
    handler: courseController.getCourse,
  },
  {
    method: "GET",
    url: "/api/course/:id",
    handler: courseController.getCourseById,
  },
  {
    method: "POST",
    url: "/api/course",
    handler: courseController.addNewCourse,
  },
  {
    method: "PUT",
    url: "/api/course/:id",
    handler: courseController.updateCourse,
  },
  {
    method: "DELETE",
    url: "/api/course/:id",
    handler: courseController.deleteCourse,
  },
];

module.exports = routes;

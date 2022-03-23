const Course = require("../models/Course");

exports.getCourse = async (request, reply) => {
  try {
    const courses = await Course.find();
    return courses;
  } catch (error) {
    throw error;
  }
};

exports.getCourseById = async (request, reply) => {
  try {
    const courseId = request.params.id;
    const course = await Course.findById(courseId);
    return course;
  } catch (error) {
    throw error;
  }
};

exports.addNewCourse = async (request, reply) => {
  try {
    const course = await Course.create(request.body);
    return course;
  } catch (error) {
    throw error;
  }
};

exports.updateCourse = async (request, reply) => {
  try {
    const courseId = request.params.id;
    const updateData = request.body;
    const { ...updatedCourse } = updateData;
    const course = await Course.findByIdAndUpdate(courseId, updatedCourse, {
      new: true,
    });
    return course;
  } catch (error) {
    throw error;
  }
};

exports.deleteCourse = async (request, reply) => {
  try {
    const courseId = request.params.id;
    const course = await Course.findByIdAndDelete(courseId);
    return course;
  } catch (error) {
    throw error;
  }
};

const mongoose = require("mongoose");

const instructorDetailSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Example: "B.M. Rafekul Islam"
    imageUrl: { type: String, required: true }, // Example: "assets/images/testimonial/testimonial-7.jpg"
    designation: { type: String, required: true }, // Example: "Advanced Educator"
    rating: { type: String, required: true }, // Example: "4.4 Rating"
    review: { type: String, required: true }, // Example: "75,237 Reviews"
    student: { type: String, required: true }, // Example: "912,970 Students"
    course: { type: String, required: true }, // Example: "16 Courses"
    description: { type: String, required: true }, // Example: "John is a brilliant educator, whose life was spent for computer science and love of nature."
    category: { type: String, required: true }, // Example: "Development"
    relatedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RelatedCourse', required: true }], // Array of related courses
});

const InstructorDetail = mongoose.model("InstructorDetail", instructorDetailSchema);

module.exports = InstructorDetail;


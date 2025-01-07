const mongoose = require("mongoose");

const relatedCourseSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true }, // Example: "assets/images/course/course-online-01.jpg"
    title: { type: String, required: true }, // Example: "React Front To Back"
    rating: { type: Number, required: true }, // Example: 5
    reviews: { type: String, required: true }, // Example: "15 Reviews"
    bookmark: { type: String, required: true }, // Example: "Bookmark"
    lessons: { type: String, required: true }, // Example: "12 Lessons"
    students: { type: String, required: true }, // Example: "50 Students"
    pText: { type: String, required: true }, // Example: "It is a long established fact that a reader will be distracted."
    author: { type: String, required: true }, // Example: "Angela"
    authorImageUrl: { type: String, required: true }, // Example: "assets/images/client/avatar-02.png"
    authorLink: { type: String, required: true }, // Example: "profile.html"
    authorCategory: { type: String, required: true }, // Example: "Development"
    currentPrice: { type: String, required: true }, // Example: "$60"
    offPrice: { type: String, required: true }, // Example: "$120"
    link: { type: String, required: true }, // Example: "course-details.html"
    off: { type: String, required: true }, // Example: "-40%"
    btnText: { type: String, required: true }, // Example: "Learn More"
    btnIcon: { type: String, required: true }, // Example: "feather-arrow-right"
    addToCart: { type: Boolean, required: true }, // Example: false
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true }, // Reference to Instructor model
});

const RelatedCourse = mongoose.model("RelatedCourse", relatedCourseSchema);

module.exports = RelatedCourse;
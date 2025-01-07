const mongoose = require("mongoose");
const { Schema } = mongoose;


const courseDetailSchema = new Schema({
    breadCrumbArea: {
        listTitle: { type: String, required: true }, // Example: "Web Development"
        title: { type: String, required: true }, // Example: "The Complete Histudy 2022: From Zero to Expert!"
        description: { type: String, required: true }, // Example: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!"
        imageUrl: { type: String, required: true }, // Example: "assets/images/bg/bg-image-10.jpg"
        author: { type: String, required: true }, // Example: "Angela"
        authorImage: { type: String, required: true }, // Example: "assets/images/client/avatar-02.png"
        authorLink: { type: String, required: true }, // Example: "profile.html"
        authorCategory: { type: String, required: true }, // Example: "Development"
        rating: { type: String, required: true }, // Example: "4.8"
        totalRating: { type: String, required: true }, // Example: "215,475 rating"
        totalStudent: { type: String, required: true }, // Example: "616,029 students"
        lastUpdated: { type: String, required: true }, // Example: "12/2024"
        language: { type: String, required: true }, // Example: "English"
        certification: { type: String, required: true }, // Example: "Certified Course"
        instructor: { type: String, required: true }, // Example: "Angela"
        instructorImage: { type: String, required: true }, // Example: "assets/images/client/avatar-02.png"
        instructorLink: { type: String, required: true }, // Example: "profile.html"
        instructorCategory: { type: String, required: true }, // Example: "Development"
    },
    courseDetailContent: {
        instructor: { type: Schema.Types.ObjectId, ref: "InstructorDetail" },
        overviewBox: {
            title: { type: String, required: true }, // Example: "What you'll learn"
            description: { type: String, required: true }, // Example: "Are you new to PHP or need a refresher? ..."
            listOneItems: { type: [String], required: true }, // Example: ["Become an advanced, confident, and modern JavaScript developer from scratch.", ...]
            listTwoItems: { type: [String], required: true }, // Example: ["Use the Jupyter Notebook Environment. JavaScript developer from scratch.", ...]
            pText: { type: String, required: true }, // Example: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ..."
        },
        courseContentBox: {
            id: { type: Number, required: true }, // Example: 1
            accBtnText: { type: String, required: true }, // Example: "Intro to Course and Histudy"
            accBtnTime: { type: String, required: true }, // Example: "1hr 30min"
            collapse: { type: Boolean, required: true }, // Example: true
            contentResources: [{
                title: { type: String, required: true }, // Example: "Course Intro"
                time: { type: String }, // Example: "30 min"
                preview: { type: String }, // Example: "Preview"
                videoIcon: { type: Boolean, required: true }, // Example: true
            }], // Array of contentResourceSchema
            title: { type: String, required: true }, // Example: "Course Content"
            description: { type: String, required: true }, // Example: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ..."
        },
        reqDes: {
            title: { type: String, required: true }, // Example: "Requirements" or "Description"
            list: { type: [String], required: true }, // Example: ["Become an advanced, confident, and modern JavaScript developer from scratch.", ...]
        },
        review: { type: Schema.Types.ObjectId, ref: "Review" },
        featuredReviews: [{ type: Schema.Types.ObjectId, ref: "FeaturedReview" }],
        relatedCourses: [{ type: Schema.Types.ObjectId, ref: "RelatedCourse" }],
    },
});

const CourseDetail = mongoose.model("CourseDetail", courseDetailSchema);

module.exports = CourseDetail;
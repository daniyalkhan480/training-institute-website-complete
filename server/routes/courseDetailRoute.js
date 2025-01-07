const express = require("express");
const Router = express.Router();

// custom packages
const CourseDetail = require("../models/course-detail/courseDetailSchema");
const Review = require("../models/course-detail/featureReviewSchema");
const RelatedCourse = require("../models/course-detail/relatedCourseSchema");


// Get all course details
Router.get("/", async (req, res) => {
  const courseDetail = await CourseDetail.find();
  res.status(200).json({
    msg: "Course Detail Route",
    courseDetail,
  });
});

// Get details of single course using id  
Router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const courseDetail = await CourseDetail.findById(id)
    .populate('courseDetailContent.instructor') // Populate the instructor field
    .populate('courseDetailContent.review') // Populate the review field
    .populate('courseDetailContent.featuredReviews') // Populate the featuredReview field
    .populate('courseDetailContent.relatedCourses'); // Populate the relatedCourse field

  res.status(200).json({message : "Course Detail Route" , courseDetail});
});


// Create a new course detail

Router.post("/", async (req, res) => {
  const courseDetail = await CourseDetail.create(req.body);
  res.status(200).json({
    msg: "New Course Detail Created Route",
    courseDetail,
  });
});

// Update a course detail
Router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const courseDetail = await CourseDetail.findByIdAndUpdate(id, req.body);
  res.status(200).json({
    msg: "Course Detail Updated Route",
    courseDetail,
  });
});

// Delete a course detail
Router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const courseDetail = await CourseDetail.findByIdAndDelete(id);
  res.status(200).json({
    msg: "Course Detail Deleted Route",
    courseDetail,
  });
}); 




// Review Route 
Router.get("/:id/reviews", async (req, res) => {
  const id = req.params.id;
  const reviews = await Review.find({ course: id });
  res.status(200).json({
    msg: "Reviews Route",
    reviews,
  });
});

// Create a new review
Router.post("/:id/reviews", async (req, res) => {
  const id = req.params.id;
  const review = await Review.create({ ...req.body, course: id });
  res.status(200).json({
    msg: "New Review Created Route",
    review,
  });
});

// Update a review
Router.patch("/:id/reviews/:reviewId", async (req, res) => {
  const id = req.params.id;
  const reviewId = req.params.reviewId;
  const review = await Review.findByIdAndUpdate(reviewId, req.body);
  res.status(200).json({
    msg: "Review Updated Route",
    review,
  });
});

// Delete a review
Router.delete("/:id/reviews/:reviewId", async (req, res) => {
  const id = req.params.id;
  const reviewId = req.params.reviewId;
  const review = await Review.findByIdAndDelete(reviewId);
  res.status(200).json({
    msg: "Review Deleted Route",
    review,
  });
});


module.exports = Router;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    title: { type: String, required: true }, // Example: "Review"
    subTitle: { type: String, required: true }, // Example: "Course Rating"
    rating: {
        Obtained: { type: Number, required: true }, // Example: 4.5
        Total: { type: Number, required: true }, // Example: 5
        rating1: {
            percentage: { type: Number, required: true }, // Example: 1
            rating: { type: Number, required: true }, // Example: 5
        },
        rating2: {
            percentage: { type: Number, required: true }, // Example: 1
            rating: { type: Number, required: true }, // Example: 4
        },
        rating3: {
            percentage: { type: Number, required: true }, // Example: 6
            rating: { type: Number, required: true }, // Example: 3
        },
        rating4: {
            percentage: { type: Number, required: true }, // Example: 29
            rating: { type: Number, required: true }, // Example: 2
        },
        rating5: {
            percentage: { type: Number, required: true }, // Example: 63
            rating: { type: Number, required: true }, // Example: 1
        },
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
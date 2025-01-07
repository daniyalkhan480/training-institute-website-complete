const mongoose = require("mongoose");

const featuredReviewSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true }, // Example: "assets/images/testimonial/testimonial-3.jpg"
    name: { type: String, required: true }, // Example: "Farjana Bawnia"
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model for name
    rating: { type: Number, required: true }, // Example: 5
    description: { type: String, required: true }, // Example: "At 29 years old, my favorite compliment is being told that I look like my mom..."
    like: { type: Number, required: true }, // Example: 10
    dislike: { type: Number, required: true }, // Example: 2
});


const FeaturedReview = mongoose.model("FeaturedReview", featuredReviewSchema);

module.exports = FeaturedReview;
import React from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing service! The products are top-notch and delivery was super fast.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Very satisfied with the quality and customer support. Highly recommend!",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Michael Brown",
    review: "Great experience overall. Would love more discounts though!",
    rating: 4,
  },
];

const ReviewCard = ({ name, review, rating }) => {
  return (
    <div className="p-6 shadow-lg rounded-lg bg-white text-gray-800 max-w-sm transform transition duration-200 hover:scale-105 hover:shadow-2xl">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm mt-2">{review}</p>
      <p className="mt-2 text-yellow-500">⭐ {rating}/5</p>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <div className="py-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10 text-center">
      <p>&copy; {new Date().getFullYear()} MyShoppy. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
        <a href="#" className="hover:text-yellow-400">Terms of Service</a>
        <a href="#" className="hover:text-yellow-400">Contact Us</a>
      </div>
    </footer>
  );
};

const ReviewsAndFooter = () => {
  return (
    <>
      <ReviewsSection />
      <Footer />
    </>
  );
};

export default ReviewsAndFooter;

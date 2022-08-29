import React from "react";
import reviewData from "../data/ReviewsData";
import ReviewCards from "./ReviewCards";

function Reviews() {
  const reviewElements = reviewData.map((item) => {
    return (
      <ReviewCards
        key={item.id}
        review={item.review}
        img={item.profile.img}
        name={item.profile.name}
        title={item.profile.title}
      />
    );
  });
  return (
    <section className="mt-[7.5rem] px-9 flex flex-col items-center">
      <div className="review py-9 px-3">
        <div className="review-card gap-y-6 gap-x-10 grid grid-cols-1 md:grid-cols-3">
          {reviewElements}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

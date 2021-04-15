import React from "react";
import Rating from "react-star-review";

import style from "./ReviewCard.module.css";

export default function ReviewCard({ response }) {
  let { items } = response;

  return (
    <div>
      {items.map((review, index) => {
        return (
          <div className={style.review_details} key={`review_${index}`}>
            <div className={style.review_title_star}>
              <div>
                <p className={style.review_title}>{review.review_title}</p>
              </div>
              <div>
                <Rating
                  size={20}
                  rating={review.review_rating.substring(0, 3)}
                />
              </div>
            </div>
            <p className={style.review_name}>
              By <span>{review.profile}</span> - {review.reviewed_on}
            </p>
            <p className={style.review_content}>{review.review_content}</p>
          </div>
        );
      })}
    </div>
  );
}

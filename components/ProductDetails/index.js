import React from "react";
import Rating from "react-star-review";
import style from "./ProductDetails.module.css";

export default function ProductDetails({ response }) {
  debugger;
  let { title, totalReview, averageStar } = response;
  return (
    <div className={style.cardHeader}>
      <div>
        <p className={style.product_title}>{title}</p>
        <p className={style.total_reviews}>{totalReview}</p>
      </div>
      <div>
        <p>Average Ratings</p>
        <Rating size={20} rating={averageStar.substring(0, 3)} />
      </div>
    </div>
  );
}

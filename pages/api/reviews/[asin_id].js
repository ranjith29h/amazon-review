var Xray = require("x-ray");
var x = Xray();

export default (req, res) => {
  console.log(req.query);
  const { asin_id } = req.query;
  x(`https://www.amazon.com/product-reviews/${asin_id}/`, {
    title: ".product-title a",
    averageStar: ".averageStarRating span",
    totalReview: ".averageStarRatingNumerical span",
    items: x(".review", [
      {
        profile: ".a-profile-name",
        review_title: ".review-title span",
        review_content: ".review-text-content span",
        review_rating: ".review-rating span",
        reviewed_on: ".review-date",
      },
    ])
      .paginate(".a-last a@href")
      .limit(1),
  })(function (err, obj) {
    res.status(200).json(obj);
  });
};

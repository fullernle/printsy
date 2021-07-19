export const fetchReviews = (productId) =>
  $.ajax({
    method: "GET",
    url: `/api/reviews/${productId}`,
  });

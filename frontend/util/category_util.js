export const fetchCategory = (categoryId) =>
  $.ajax({
    method: "GET",
    url: `/api/categories/${categoryId}`,
  });

export const fetchCategories = () =>
  $.ajax({
    method: "GET",
    url: "/api/categories",
  });

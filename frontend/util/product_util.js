export const createProduct = (product) =>
  $.ajax({
    method: "POST",
    url: "/api/products",
    data: { product },
  });

export const showProduct = (productId) =>
  $.ajax({
    method: "GET",
    url: `/api/products/${productId}`,
  });

export const allProducts = () =>
  $.ajax({
    method: "GET",
    url: "/api/products",
  });

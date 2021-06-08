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

export const filterCategory = (state, categoryId) => {
  let products = Object.values(state.entities.products);
  let filtered = [];

  for (let i = 0; i < products.length; i++) {
    let categories = products[i].categories;
    for (let j = 0; j < categories.length; j++) {
      if (categories[j].id === categoryId) {
        filtered.push(products[i]);
        break;
      }
    }
  }

  return filtered;
};

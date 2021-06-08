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

// export const filterCategory = (state, categoryId) => {
//   let products = Object.values(state.entities.products);
//   let filtered = [];
//   console.log(categoryId);
//   // console.log(products);
//   // console.log(state);
//   for (let i = 0; i < products.length; i++) {
//     let categories = products[i].categories;
//     // console.log(categories);
//     for (let j = 0; j < categories.length; j++) {
//       if (categories[j].id === categoryId) {
//         filtered.push(products[i]);
//         break;
//       console.logconsole.log}
//     }
//   }

//   console.log(filtered);
//   return filtered;
// };

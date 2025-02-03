console.log("index loaded");

const kategori_list_container = document.querySelector(".grid_3-2");
fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(categories) {
  console.log("Mine data er", categories);
  const markup = categories

    .map(
      (category) =>
        ` 
            <a href="produktliste.html?category=${category.category}" class="categories">${category.category}</a>   
`
    )
    .join("");
  console.log("Min markup er", markup);

  kategori_list_container.innerHTML = markup;
}

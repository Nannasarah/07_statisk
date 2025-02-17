const mycategory = new URLSearchParams(window.location.search).get("category");
document.querySelector("h1").innerHTML = mycategory;
console.log("produktliste loader", mycategory);

const product_list_container = document.querySelector(".product_list_container");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showlist(data));

function showlist(products) {
  const markup = products

    .map(
      (product) =>
        ` 
          <div class="box" >

          <p>${product.soldout ? '<div class="bsoldo">Sold out</div>' : ""}</p>
                <img class="pic ${product.soldout ? "soldout" : ""}" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                <h3>${product.productdisplayname}</h3>
                <p class="line">${product.articletype}</p>
                            <p class="line">${product.category}</p>
                <p>DKK ${product.price},- </p>
                         <p class="rabat ${product.discount && "isonsale"}">-${product.discount}%</p>
                          
                <a href="produkt.html?product=${product.id}">Read more</a>
            </div>`
    )
    .join("");

  product_list_container.innerHTML = markup;
}

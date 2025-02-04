let produktside = document.querySelector(".produktside");
let productId = 1163;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    produktside.innerHTML = `
        <div>
            <img src=" https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="tshirt">
        </div>
        <div class="produkt-info">
            <h1>Product Information</h1>
            <div>
                <h2>Model name</h2>
                <p>${data.productdisplayname}</p>
                <h2>Color</h2>
                <p>${data.basecolour}</p>
                <h2>Inventory number</h2>
                <p>${data.id}</p>
                    <h2>Price</h2>
                <p>${data.id}</p>
            </div>
            <div>
                <h1>${data.brandname}</h1>
                <p>Nike, creating experiences for today's athlete</p>
            </div>
        </div>
        <div class="produktside-højre">
            <h1>${data.productdisplayname}</h1>
            <div>
                <p>${data.brandname} | ${data.articletype}</p>
                <div class="choosesize">
                    <label for="size">Choose a size:</label>
                    <select name="size" id="size">
                        <option value="s">s</option>
                        <option value="m">m</option>
                        <option value="l">l</option>
                        <option value="xl">xl</option>
                    </select>
                </div>
            </div>
            <a href="produkt.html" class="knap">Add to basket</a>
        </div>`;
  });

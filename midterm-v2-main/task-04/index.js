/**
 * პირობა იხილეთ HTML ფაილში
 */
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const productList = document.getElementById("productList");

  renderProducts(products);

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query));
    renderProducts(filteredProducts);
  });

  function renderProducts(products) {
    productList.innerHTML = "";
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "card";

      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header";

      const avatar = document.createElement("div");
      avatar.className = "avatar";
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      avatar.appendChild(image);

      const productInfo = document.createElement("div");
      productInfo.className = "product-info";

      const name = document.createElement("h3");
      name.textContent = product.name;
      productInfo.appendChild(name);

      const description = document.createElement("p");
      description.className = "product-info";
      description.textContent = product.description;
      productInfo.appendChild(description);

      cardHeader.appendChild(avatar);
      cardHeader.appendChild(productInfo);

      const cardContent = document.createElement("div");
      cardContent.className = "card-content";

      const productId = document.createElement("p");
      productId.className = "product-id";
      productId.textContent = `Product ID: ${product.id}`;
      cardContent.appendChild(productId);

      productElement.appendChild(cardHeader);
      productElement.appendChild(cardContent);

      productList.appendChild(productElement);
    });
  }
});
const products = [
  {
    id: 1,
    name: "LG OLED TV",
    description: "65-inch OLED 4K Smart TV",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 2,
    name: "Sonos Arc",
    description: "Premium Smart Soundbar",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 3,
    name: "Dyson V15 Detect",
    description: "Cordless Vacuum Cleaner",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 4,
    name: "Instant Pot Duo",
    description: "7-in-1 Electric Pressure Cooker",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 5,
    name: "Bose Noise Cancelling Headphones 700",
    description: "Over-ear wireless headphones",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 6,
    name: "Samsung Smart Refrigerator",
    description: "Family Hub Refrigerator with touchscreen display",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 7,
    name: "Roomba i7+",
    description: "Robot Vacuum with Automatic Dirt Disposal",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 8,
    name: "Ninja Foodi Grill",
    description: "Indoor Grill and Air Fryer",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 9,
    name: "Apple HomePod",
    description: "Smart speaker with Siri",
    image: "https://fakeimg.pl/150x150",
  },
  {
    id: 10,
    name: "Breville Barista Express",
    description: "Espresso Machine",
    image: "https://fakeimg.pl/150x150",
  },
];

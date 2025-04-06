// Sample product data
const products = {
    1: {
      title: "Roller Blinds",
      image: "img/products/roller-blinds.png",
      description: "TRoller Blinds are a type of window covering that consists of a single piece of fabric that rolls up and down to cover or uncover a window. They are available in various materials, colors, and patterns, making them a versatile choice for home decor."
    },
    2: {
      title: "Chairs",
      image: "img/products/chair.png",
      description: "A chair is a piece of furniture designed for sitting, typically consisting of a seat, backrest, and legs. Chairs come in various styles, materials, and designs, serving both functional and aesthetic purposes in homes and offices."
    },
    // Add more products as needed
  };
  
  // Get the URL parameter (id=...)
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  // Get elements
  const titleEl = document.getElementById("product-title");
  const imageEl = document.getElementById("product-image");
  const descEl = document.getElementById("product-description");
  
  // If valid product, show content
  if (products[productId]) {
    const product = products[productId];
    titleEl.textContent = product.title;
    imageEl.src = product.image;
    descEl.textContent = product.description;
  } else {
    titleEl.textContent = "Product Not Found";
    imageEl.style.display = "none";
    descEl.textContent = "The product you're looking for doesn't exist.";
  }
  
// Sample product data
const products = {
    1: {
      title: "Roller Blinds",
      mainTitle: "Stylish & Functional Blinds by Chithra Decors",
      image: "img/products/roller-blinds.png",
      description1: "Roller Blinds are a type of window covering that consists of a single piece of fabric that rolls up and down to cover or uncover a window. They are available in various materials, colors, and patterns, making them a versatile choice for home decor.",
      description2:"Our blinds are crafted with precision to offer privacy, light control, and elegance. From homes to offices, we help transform windows into stylish features that enhance your interior design. With a variety of colors, patterns, and mechanisms to choose from, you’re sure to find the perfect fit.",
      description3:"Let Chithra Decors help you bring comfort and sophistication to your interiors. Our team is committed to offering personalized solutions and professional installation services for an effortless and satisfying experience.",
      description4:"We pride ourselves on quality craftsmanship and attention to detail. Our blinds are made using durable materials that are easy to clean and maintain, ensuring long-lasting performance and visual appeal. Whether you prefer a minimal modern look or a classic feel, Chithra Decors has the right solution for you.",
      description5:"From consultation to installation, we offer end-to-end service that makes updating your windows seamless and stress-free. Discover the perfect blend of style and practicality with our exclusive blinds collection. Contact us today to explore our wide selection and get a free quote!",
    },
    2: {
        title: "Chairs",
        mainTitle: "Stylish & Functional Chairs by Chithra Decors",
        image: "img/products/chair.png",
        description1: "A chair is a piece of furniture designed for sitting, typically consisting of a seat, backrest, and legs. Chairs come in various styles, materials, and designs, serving both functional and aesthetic purposes in homes and offices.",
        description2: "At Chithra Decors, our chairs are crafted with premium materials to ensure durability, comfort, and timeless style. Whether you're looking for elegant dining chairs, ergonomic office chairs, or casual lounge seating, we offer a wide variety to suit your interior needs.",
        description3: "Our range includes modern, classic, and contemporary designs that complement both residential and commercial spaces. Upholstery options include high-quality fabric, leather, and eco-friendly materials that cater to all preferences and budgets.",
        description4: "Each chair undergoes strict quality checks for stability, finish, and functionality, ensuring long-lasting performance. The ergonomic design ensures proper posture support, making them perfect for prolonged sitting whether at home, work, or gatherings.",
        description5: "Choose Chithra Decors for stylish and reliable seating solutions that enhance the comfort and beauty of your space. Customization options are available to match your décor theme, ensuring each piece is as unique as your space."
      } ,     
    3:{
        title: "Sofas",
        mainTitle: "Elegant & Comfortable Sofas by Chithra Decors",
        image: "img/products/sofa.png",
        description1: "A sofa is a key piece of furniture designed for relaxation and social interaction, typically featuring cushioned seating, armrests, and a backrest. Sofas are available in various sizes, shapes, and materials, offering both style and comfort for living spaces.",
        description2: "At Chithra Decors, our sofas are thoughtfully crafted to blend luxury with functionality. Whether you're looking for a cozy two-seater, a spacious sectional, or a sleek modern design, we have a wide selection to suit every room and lifestyle.",
        description3: "Our collection includes timeless classics, contemporary pieces, and modular designs that enhance any interior. Upholstered with high-quality fabric, velvet, or leatherette, our sofas provide aesthetic appeal along with long-lasting durability.",
        description4: "Each sofa is built with strong frames and high-density cushions to ensure comfort and support. We pay close attention to stitching, padding, and finish to deliver premium-quality seating for your home or commercial space.",
        description5: "Choose Chithra Decors for sofas that not only elevate your interiors but also offer unmatched comfort. We also offer customization options to tailor size, fabric, and color — making every sofa uniquely yours."
      },  
      4:{
        title: "Stools",
        mainTitle: "Compact & Versatile Stools by Chithra Decors",
        image: "img/products/stool.png",
        description1: "Stools are compact, backless seats that offer flexible seating solutions in various settings like kitchens, bars, living areas, and workspaces. Known for their minimalist design and portability, stools come in different heights and styles to suit any decor.",
        description2: "At Chithra Decors, our stools are crafted to combine durability with modern design. From sleek bar stools to rustic wooden options and cushioned vanity stools, we have a wide variety to match your personal and functional needs.",
        description3: "Our stools are available in materials such as solid wood, metal, plastic, and upholstered finishes — ideal for both indoor and semi-outdoor spaces. Whether you need them for casual seating or decorative purposes, our collection has you covered.",
        description4: "Each stool is designed for strength, stability, and comfort, with attention to ergonomics and finish. Lightweight yet sturdy, our stools are easy to move around and perfect for adding extra seating wherever needed.",
        description5: "Explore our stylish stool collection at Chithra Decors and elevate your space with furniture that's both practical and eye-catching. Customization in color, size, and finish is available to match your design theme."
      }
              
    // Add more products as needed
  };
  
  // Get the URL parameter (id=...)
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  // Get elements
  const titleEl = document.getElementById("product-title");
  const imageEl = document.getElementById("product-image");
  const titleE2 = document.getElementById("product-title2");
  const descEl = document.getElementById("product-description1");
  const descE2 = document.getElementById("product-description2");
  const descE3 = document.getElementById("product-description3");
  const descE4 = document.getElementById("product-description4");
  const descE5 = document.getElementById("product-description5");
  
  // If valid product, show content
  if (products[productId]) {
    const product = products[productId];
    titleEl.textContent = product.title;
    titleE2.textContent = product.mainTitle;
    imageEl.src = product.image;
    descEl.textContent = product.description1;
    descE2.textContent = product.description2;
    descE3.textContent = product.description3;
    descE4.textContent = product.description4;
    descE5.textContent = product.description5;
  } else {
    titleEl.textContent = "Product Not Found";
    titleE2.textContent = "Product Not Found";
    imageEl.style.display = "none";
    descEl.textContent = "The product you're looking for doesn't exist.";
    descE2.textContent = "The product you're looking for doesn't exist.";
    descE3.textContent = "The product you're looking for doesn't exist.";
    descE4.textContent = "The product you're looking for doesn't exist.";
    descE5.textContent = "The product you're looking for doesn't exist.";
  }
  
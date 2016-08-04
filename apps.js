var musicProducts = [
  
  {title: "Basic Package",
    price: "$325",
    description: "Full band demo with great singer, plus instrumental tracks, on cd, $325 US",
    img: "product-basic.png"
  },  

  {title: "Sheet Music",
    price: "$25 A Song",
    description: "",
    img: "product-sheetmusic.png"
  },  

  {title: "Full Band",
    price: "$225",
    description: "",
    img: "product-basic.png"
  },  

  {title: "Instrumental",
    price: "$",
    description: "Background tracks only.",
    img: "product-instrumental.png"
  },  

  {title: "CDs",
    price: "$5 Each",
    description: "",
    img: "product-cd.png"
  },  

  {title: "Songwriting Coaching",
    price: "$",
    description: "",
    img: "product-coaching.png"
  },  

  {title: "Skype Lessons",
    price: "$X",
    description: "",
    img: "product-lesson.png"
  },  

  {title: "Attend the Coaching Lessons",
    price: "$X",
    description: "",
    img: "product-session.png"
  },  


];

var productCard  = "";
for (var i = 0; i < musicProducts.length; i++) {
  productCard += "<div class='card'>";
  productCard += "<h1>" + musicProducts[i].title + "</h1>";
  productCard += "<img class ='picture' src= ' " + musicProducts[i].img + " '>";
  productCard += "<p class='price'>" + musicProducts[i].price + "</p>";
  productCard += "<p class='description'>" + musicProducts[i].description + "</p>";
  productCard +="</div>";

};

document.getElementById("musicProducts").innerHTML = productCard;
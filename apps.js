var musicProducts = [
  
  {title: "Full Demo",
    price: "$325",
    description: "Full band demo with great singer, plus instrumental tracks on CD.",
    img: "images/product-basic.png"
  },  

  {title: "Sheet Music",
    price: "$25 A Song",
    description: "Your song charted out in the Nashville Numbers method.",
    img: "images/product-sheetmusic.png"
  },  

  {title: "Basic Demo",
    price: "$150",
    description: "Acoustic guitar, bass and drum machine, great vocal.",
    img: "images/product-basic.png"
  },  

  {title: "Instrumental",
    price: "$225",
    description: "Full band tracks only, no vocal.",
    img: "images/product-instrumental.png"
  },  

  {title: "CDs",
    price: "$5/each",
    description: "Extra copies of CD, with label.",
    img: "images/product-cd.png"
  },  

  {title: "Songwriting Coaching",
    price: "$50/session",
    description: "Feedback on your lyrics/melody.  All feedback via email.",
    img: "images/product-coaching.png"
  },  

  {title: "Skype Lessons",
    price: "$30/session",
    description: "Learn fundamentals on the banjo, mandolin, dobro, fiddle and guitar.  Must have your own insturment.",
    img: "images/product-lesson.png"
  },  

  {title: "Attend the Recording Session",
    price: "$100/session",
    description: "Attend the studio session when your song is brought to life.",
    img: "images/product-session.png"
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
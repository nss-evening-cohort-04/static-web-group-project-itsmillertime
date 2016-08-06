var musicProducts = [

  {title: "Basic Demo",
    price: "$325/song",
    description: "Full band demo with great singer, plus instrumental tracks on CD.",
    png: "images/product-basic.png"
  },

  {title: "Sheet Music",
    price: "$25/Song",
    description: "Your song charted out in the Nashville Numbers method.",
    png: "images/product-sheetmusic.png"
  },

  {title: "Basic Demo",
    price: "$150/song",
    description: "Acoustic guitar, bass and drum machine, great vocal.",
    png: "images/product-basic.png"
  },

  {title: "Instrumental",
    price: "$225/song",
    description: "Full band tracks only, no vocal.",
    png: "images/product-instrumental.png"
  },

  {title: "CDs",
    price: "$5/each",
    description: "Extra copies of CD, with label.",
    png: "images/product-cd.png"
  },

  {title: "Songwriting Coaching",
    price: "$50/session",
    description: "Feedback on your lyrics/melody.  All feedback via email.",
    png: "images/product-coaching.png"
  },

  {title: "Skype Lessons",
    price: "$30/session",
    description: "Learn fundamentals on the banjo, mandolin, dobro, fiddle and guitar.  Must have your own instrument.",
    png: "images/product-lesson.png"
  },

  {title: "Attend the Recording Session",
    price: "$100/session",
    description: "Attend the studio session when your song is brought to life.",
    png: "images/product-session.png"
  },


];

var productCard  = "";
for (var i = 0; i < musicProducts.length; i++) {
  productCard += "<div class='productCard'>";
  // productCard += "<h1>" + musicProducts[i].title + "</h1>";
  productCard += "<img class ='picture' src= ' " + musicProducts[i].png + " '>";
  productCard += "<p class='price'>" + musicProducts[i].price + "</p>";
  productCard += "<p class='description'>" + musicProducts[i].description + "</p>";
  productCard +="</div>";

};

document.getElementById("musicProducts").innerHTML = productCard;
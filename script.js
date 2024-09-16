const params = new URLSearchParams(window.location.search);
let selectedCategory = params.get("category");

if (!selectedCategory) {
  selectedCategory = "Produkter"; // Hvis der ikke er en kategori, vis en generisk tekst
}

// Sæt kategoriens navn som overskrift
const categoryTitle = document.querySelector("#categoryTitle");
categoryTitle.textContent = `Kategori: ${selectedCategory}`;

console.log("selectedCategory", selectedCategory);

// her henter jeg kategorierne
if (selectedCategory)
  // Lav en fetch-forespørgsel med filter baseret på kategori, encode URI gør så det virker
  fetch(
    `https://bbrajrfgxxltyoiktvaf.supabase.co/rest/v1/TSL?Taksonomi1=eq.${encodeURIComponent(
      selectedCategory
    )}`,
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJicmFqcmZneHhsdHlvaWt0dmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU4NjIsImV4cCI6MjA0MTUzMTg2Mn0.LPtDyElMP9iDorwkofjSW-JBN1Mk9SWx2EwcBK3nnfc",
      },
    }
  )
    .then((res) => res.json())
    .then(showProducts);

function showProducts(products) {
  console.log(products);
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#productTemplate");
  // lav en kopi
  const copy = template.content.cloneNode(true);
  // ændre indhold
  copy.querySelector(".brand").textContent = product.Mærke;
  copy.querySelector(".model").textContent = product.Produktnavn;
  copy.querySelector(".kategori").textContent = product.Taksonomi1;

  //appende
  document.querySelector(".grid_1_1_1").appendChild(copy);
}

// "Asset ID": "C00332"
// ​
// "Mærke": "GoPro"
// ​
// Objektkode: 9154
// ​
// "Produktnavn og model": "GoPro Chesty"
// ​
// "Taksonomi 1": "Audio/Photo/Video Equipment"
// ​
// "Taksonomi 2": "Camera Mounts"
// ​
// "Taksonomi 3": ""
// ​
// Type: " Camera Mounts"

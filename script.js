// url https://bbrajrfgxxltyoiktvaf.supabase.co

// api nøgle eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJicmFqcmZneHhsdHlvaWt0dmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU4NjIsImV4cCI6MjA0MTUzMTg2Mn0.LPtDyElMP9iDorwkofjSW-JBN1Mk9SWx2EwcBK3nnfc

fetch("https://bbrajrfgxxltyoiktvaf.supabase.co/rest/v1/TSL", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJicmFqcmZneHhsdHlvaWt0dmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU4NjIsImV4cCI6MjA0MTUzMTg2Mn0.LPtDyElMP9iDorwkofjSW-JBN1Mk9SWx2EwcBK3nnfc",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  // items.forEach()
}

//function(){}

// funktion fra peter i undervisning ikke sikkert nødvendig men den er til billeder
function showData(items) {
  console.log(items);
  items.forEach(showImage);
}

function showImage(item) {
  console.log("data item", item);

  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  const image = clone.querySelector("img");
  image.alt = "image of" + item.name;
  image.src = `img/${item.img}`;

  document.querySelector("body").appendChild(image);
}

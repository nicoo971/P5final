const params = new URLSearchParams(location.search);
let teddy =null;
let id = params.get("id");
fetch("http://localhost:3000/api/teddies/" + id)
  .then((response) => response.json())
  .then((response) => { teddy= response;
    // addteddy(response);
    console.log(response);
    let html = ` <div class="col-lg-4 col-md-6 mb-4 mx-auto pt-3 ">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="${teddy.imageUrl}" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a  href="produits.html#${teddy._id}">${teddy.name}</a>
          </h4>
          <h5>${teddy.price/100 +" Euros"}</h5>
          <p class="card-text">${teddy.description}</p>
        </div>
        <label for="color-select">Choose a color:</label>
        <select name="colors" id="color-select">  
        </select>
       s
           </button>
      </div>
     </div>`;
               document.getElementById("containner").innerHTML += html;
            let options = '';
            for (color of teddy.colors) {
                options += '<option value="' + color + '">' + color + '</option>'
            }
            document.getElementById("color-select").innerHTML += options;
  });
  function addcart()
  {
    addteddy(teddy);
  }
  // getCurrentTeddy();
  // function getCurrentTeddy() {
  //   let request = new XMLHttpRequest();
  //   request.onload = createTeddyCard;
  //   request.onerror = function (data) {
  //       console.log(data);
  //   }
  //   request.open("GET", "http://localhost:3000/api/teddies"); request.send();}
  // function createTeddyCard(e) {
  //   let teddyId = location.href.split('#')[1];
  //   console.log("test",e.target.responseText);
  //   let data = JSON.parse(e.target.responseText);
  //   for (let teddy of data) {
  //       if (teddy._id === teddyId) {
  //           let html = ` <div class="col-lg-4 col-md-6 mb-4 mx-auto pt-3 ">
  //   <div class="card h-100">
  //     <a href="#"><img class="card-img-top" src="${teddy.imageUrl}" alt=""></a>
  //     <div class="card-body">
  //       <h4 class="card-title">
  //         <a  href="produits.html#${teddy._id}">${teddy.name}</a>
  //       </h4>
  //       <h5>${teddy.price/100}€</h5>
  //       <p class="card-text">${teddy.description}</p>
  //     </div>
  //     <label for="color-select">Choose a color:</label>
  //     <select name="colors" id="color-select">  
  //     </select>
  //     <button class="bloc-button btn btn-lg btn-block cta-hero btn-atomic-grey" id="btn-cart"
  //     type="submit" aria-label="Envoyer" data-id="${teddy._id}" data-name="${teddy.name}" data-img="${teddy.imageUrl}" data-price="${teddy.price}" data-desc="${teddy.description}" >
  //     Ajouter au panier
  //       </button>
  //   </div>
  // </div>`;
  
  
  //   }
  // }

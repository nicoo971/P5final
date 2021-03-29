fetch("http://localhost:3000/api/teddies")
  .then((response) => response.json())
  .then((response) => {
    for (let i = 0; i < response.length; i++) {
      let titre = "le cours";
      let teddy =response[i];
      console.log(teddy);
      let html = `  <div class="card" style="width: 18rem;">
<img src="${teddy.imageUrl}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${teddy.name}</h5>
  <p class="card-text">${teddy.price}</p>
  <a href="article.html?id=${teddy._id}" class="btn btn-primary">Voir le Produit</a>
</div>
  </div>`;
      document.getElementById("containner").innerHTML += html;
    }

    // for off
  });


let panier = getPanier();

for (let i = 0; i < panier.length; i++) {
    let titre = "le cours";
    let teddy = panier[i];
    console.log(teddy);
    let html = `  <div class="card" style="width: 18rem;">
<img src="${teddy.imageUrl}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${teddy.name}</h5>
  <p class="card-text">${teddy.price}*${teddy.quantity}=${
    teddy.price * teddy.quantity
  }</p>
  <a href="article.html?id=${
    teddy._id
  }" class="btn btn-primary">Ajouter au Panier</a>
</div>
  </div>`;
    const containerElt = document.getElementById("containnerpanier");
    containerElt.innerHTML += html;
}

function calculprix() {
    total = 0;
    //  let teddy = panier[i];
    for (let i = 0; i < panier.length; i++) {
        total += panier[i].price * panier[i].quantity;
    }
    const prixtotalElt = document.getElementById("prixtotal");
    prixtotalElt.innerHTML += total;

    //const listElement = document.getElementsByClassName("prixtotal");
    //listElement[0].innerHTML += total;
}

calculprix();
// for off

function envoidelacommande(e) {
    e.preventDefault();
    const emailElt = document.getElementById("email");
    alert(emailElt.value);

    if (emailElt.value==""){
      
        alert("Merci de remplit tout les champs");
        return;
    }
    
    var data = {
        contact: {
            firstName: "nico",
            lastName: "pouget",
            address: "nico",
            city: "nimes",
            email: emailElt.value,
        },
        products: ["5beaabe91c9d440000a57d96"]
    };

    var option = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }

    };

    fetch("http://localhost:3000/api/teddies/order", option)
        .then((response) => response.json())
        .then((response) => {
            localStorage.clear();
            document.getElementById("containner").innerHTML= `<h2>merci ${response.contact.firstName} pour votre commande</h2>
            <h3>votre numéro de commande est ${response.orderId}`
           
        });

        
}
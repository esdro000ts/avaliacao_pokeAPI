
const card = document.getElementById("card");
let pokeBusca = document.getElementById('pokeBusca')

function getPoke() {

    var pokemon = pokeBusca.value.toLowerCase()
    let url_api = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`

    fetch(url_api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showPoke(data)
    });

}

function showPoke(poke) {
  
  const nome = poke.name.toUpperCase()
  const numeroPoke = poke.id
  const image = poke.sprites.front_default



  card.innerHTML = ''

  const cardElement = document.createElement("div");

    cardElement.classList.add("card");

    cardElement.innerHTML = `

        <img src=${image} alt="">
        <div class="card-info">
            <h3>Information</h3>
            <br>
            <div class="information">
                <p><strong>NOME:</strong> ${nome} </p>
                <p><strong>POKEDEX NUMBER:</strong> ${numeroPoke} </p>
            </div>
        </div>
 `;

    card.appendChild(cardElement);

}
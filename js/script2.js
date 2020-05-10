const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

const cardsContainer = document.querySelector("#cards");

let data = [];

async function fetchCards() {
  let response = await fetch(apiUrl);

  const dataResponse = await response.json();

  return dataResponse;
}

function renderCards(cards) {
  cardsContainer.innerHTML = "";
  cards.map(renderCard);
}

function renderCard(card) {
  const div = document.createElement("div");

  div.className = "cardItem";

  div.innerHTML = `
  <div class="cardType">${card.property_type}</div>
  <img
    src="${card.photo}"
    class="cardImage"
  />
    <h1 class="cardName">${card.name}</h1>
    <h3 class="cardPrice">R$ ${card.price},00</h3>
  </div>
  `;

  cardsContainer.appendChild(div);
}

async function main() {
  data = await fetchCards();

  if (data[0]) {
    renderCards(data);
  }
}

main();

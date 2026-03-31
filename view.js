updateView();

function updateView() {
  app.innerHTML = /*HTML*/ `
  <h1>Enkle kontoer</h1>
  <p>Navn: ${bankAccount.name}</p>
  <p>Saldo: ${bankAccount.balance} kr</p>
  <button onclick="changeBalance(5000)">Legg til 5000 kr</button>
  <button onclick="changeBalance(-5000)">Ta ut 5000 kr</button>
  <button onclick="changeBalance(-30000)">Ta ut 30000 kr</button>
  <input 
    placeholder="Egendefinert beløp"
    type="number" 
    onchange="addCustomAmount(this.value)" />
  `;
}

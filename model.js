const app = document.getElementById("app");

const bankAccount = {
  name: "Andreas",
  balance: 30000,

  changeBalance: function (amount) {
    if (this.balance + amount < 0) {
      alert(
        "Beklager, du har ikke dekning på konto for å ta ut dette beløpet.",
      );
    } else {
      this.balance += amount;
    }
  },
};

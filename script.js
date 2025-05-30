// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cryptoList = document.getElementById("crypto-list");

  const cryptos = [
    { name: "Bitcoin", symbol: "BTC", price: "$67,500" },
    { name: "Ethereum", symbol: "ETH", price: "$3,600" },
    { name: "Solana", symbol: "SOL", price: "$160" },
    { name: "Cardano", symbol: "ADA", price: "$0.45" },
  ];

  cryptos.forEach(crypto => {
    const card = document.createElement("div");
    card.className = "crypto-card";

    card.innerHTML = `
      <h3>${crypto.name} (${crypto.symbol})</h3>
      <p>Current Price: <strong>${crypto.price}</strong></p>
    `;

    cryptoList.appendChild(card);
  });
});


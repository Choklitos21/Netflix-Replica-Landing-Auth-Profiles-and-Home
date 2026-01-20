document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("loggedUser")) {
        window.location.href = 'index.html';
    }
});

let catalogList = [
    {
        src: "media/images/SpyxFamily%20card.svg",
        name: "SPY x FAMILY",
        alt: "SpyFamily Card"
    },
    {
        src: "media/images/BNHA%20card.svg",
        name: "My Hero Academia",
        alt: "BNHA Card"
    },
    {
        src: "media/images/dragonball%20card.svg",
        name: "Dragon Ball Z",
        alt: "DBZ Card"
    },
    {
        src: "media/images/Chainsaw%20card.svg",
        name: "Chainsaw man",
        alt: "Chainsaw man Card"
    },
    {
        src: "media/images/Neverland%20card.svg",
        name: "THE PROMISED NEVERLAND",
        alt: "Neverland Card"
    },
    {
        src: "media/images/Onepiece%20card.svg",
        name: "One Piece",
        alt: "One Piece Card"
    },
    {
        src: "media/images/Overlord3%20card.svg",
        name: "Overlord",
        alt: "Overlord Card"
    },
    {
        src: "media/images/Parasyte%20card.svg",
        name: "Parasite",
        alt: "Parasite Card"
    },
    {
        src: "media/images/Tanya%20card.svg",
        name: "Saga of Tanya the Evil (Youjo Senki)",
        alt: "Tanya card"
    },
    {
        src: "media/images/Tokyorevengers%20card.svg",
        name: "Tokyo Revengers",
        alt: "Tokyo Revengers Card"
    },
]

document.addEventListener("DOMContentLoaded", function() {
    let catalog = document.getElementById("catalog")

    catalogList.forEach(value => {
        let newDiv = document.createElement("div")
        newDiv.classList.add("anime-card-container")
        newDiv.innerHTML = `
        <img src="${value.src}" alt="SpyFamily Card">
        <h4>${value.name}</h4>
        <h4>Sub | Dob</h4>
        `
        catalog.appendChild(newDiv)
    })
});

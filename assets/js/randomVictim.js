const victims = [
    "Ellison",
    "Amy",
    "Jordan",
    "Harmanjot",
    "Netto",
    "Sash",
    "Alex",
    "Salman",
    "Ben",
    "Trishane",
    "Kaye",
    "Nick",
    "Sagiri",
    "Abdirahman",
    "Shayne",
    "Gabriella",
    "Jaymen",
    "Minh",
    "Constan",
    "Bao",
    "Hannah",
    "Dylan",
    "Diana",
    "Thiviya",
    "Favour",
    "Abed",
    "Keyshawn",
    "Will",
    "Iva",
    "Nathan",
    "Xin",
    "Safa",
    "Mateusz",
    "Esra",
    "Hao",
    "Alastair"
];

function newVictim(){
    let victimEl = document.getElementById("victim");
    victimEl.innerText = victims[Math.floor(Math.random() * victims.length)];
}

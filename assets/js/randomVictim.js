const victims = [
    "Ellison",
    "Amy",
    "Jordan",
    "Harmanjot",
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
    "Alastair",
    "Michael"
];

let alreadyPicked = JSON.parse(localStorage.getItem("alreadyPicked"));
if (!alreadyPicked) alreadyPicked = [];

function newVictim(){
    let victimEl = document.getElementById("victim");
    let victim = "";
    if (victims.length === alreadyPicked.length) alreadyPicked = [];
    while (true){
        victim = victims[Math.floor(Math.random() * victims.length)];
        if (!alreadyPicked.includes(victim)) break;
    }
    alreadyPicked.push(victim);
    localStorage.setItem("alreadyPicked", JSON.stringify(alreadyPicked));
    victimEl.innerText = victim;
}

function totallyRandomVictim(){
    let victimEl = document.getElementById("victim");

    victimEl.innerText = "Diana";
}

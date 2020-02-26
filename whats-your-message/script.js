const msg = document.getElementById("msg");
const saved = document.getElementById("saved");
const lang = document.getElementById("lang");
const small = document.getElementById("small");

populateUI();
welcomeShuffl();

function populateUI() {
  const storedData = localStorage.getItem("message");
  if (storedData != null) {
    saved.innerText = storedData;
  }
}

function welcomeShuffl() {
  var langs = [
    "Hello",
    "Bonjour",
    "Hola",
    "Zdravstvuyte",
    "Nǐn hǎo",
    "Ciao",
    "Namaste"
  ];
  const random = langs[Math.floor(Math.random() * langs.length)];
  lang.innerText = "👋 " + random + "!";
}

form.addEventListener("submit", e => {
  var message = msg.value;
  localStorage.setItem("message", message);
});

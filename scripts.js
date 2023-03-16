// carrousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

setInterval(function () {
  plusSlides(1);
}, 5000);

document.querySelector(".seta1").addEventListener("click", function () {
  plusSlides(-1);
});

document.querySelector(".seta2").addEventListener("click", function () {
  plusSlides(1);
});

// modal do desenvolvedor
function openModal() {
  document.getElementById("modal-contato").style.display = "block";
}

function closeModal() {
  document.getElementById("modal-contato").style.display = "none";
}

// modal do carrinho

var modal = document.getElementById("modal");
var btn = document.querySelector(".open-modal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function abrirModal1() {
  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };

  onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

// carrinho de compras

var add = document.querySelectorAll(".add");
var jogo1 = document.getElementById("jogo1");
var fifa = document.getElementById(`fifa`);
var gow = document.getElementById(`gow`);
var gta = document.getElementById(`gta`);
var assassino = document.getElementById(`assassino`);
var spider = document.getElementById(`spider`);
var skate = document.getElementById(`skate`);
var cod2 = document.getElementById(`cod2`);
var codBO = document.getElementById(`codBO`);
var lego = document.getElementById(`lego`);
var farcry = document.getElementById(`farcry`);
var doom = document.getElementById(`doom`);
var cod3 = document.getElementById(`cod3`);

var addCarrinho = document.getElementById("add-carrinho");
var carrinho = document.getElementById("carrinho");
var txtquantidade = document.getElementById("quantidade");
var valor = document.getElementById("valor");
var valorTotal = document.getElementById("valorTotal");
var qtdGame = document.getElementById("qtd-game");
var soma = 0;
var totalGame = 0;

fifa.addEventListener(`click`, () => {
  valorp = 200.0;
  jogo1.value = "FIFA 23";
});
gow.addEventListener(`click`, () => {
  jogo1.value = "God of War";
  valorp = 90.0;
});
gta.addEventListener(`click`, () => {
  jogo1.value = "GTA V";
  valorp = 40.0;
});
assassino.addEventListener(`click`, () => {
  jogo1.value = "Assassin's Creed IV ";
  valorp = 80.0;
});

spider.addEventListener(`click`, () => {
  jogo1.value = "Spider-Man";
  valorp = 100.0;
});

skate.addEventListener(`click`, () => {
  jogo1.value = "Tony Hawk's Pro Skater 1+2";
  valorp = 90.0;
});

cod2.addEventListener(`click`, () => {
  jogo1.value = "Call of Duty - Modern Warfare II";
  valorp = 60.0;
});

codBO.addEventListener(`click`, () => {
  jogo1.value = "Call of Duty - Black Ops";
  valorp = 50.0;
});

lego.addEventListener(`click`, () => {
  jogo1.value = "Lego - Jurassic Park";
  valorp = 20.0;
});

farcry.addEventListener(`click`, () => {
  jogo1.value = "FarCry V";
  valorp = 120.0;
});

doom.addEventListener(`click`, () => {
  jogo1.value = "Doom";
  valorp = 170.0;
});

cod3.addEventListener(`click`, () => {
  jogo1.value = "Call of Duty MW 2 - Versão Extendida";
  valorp = 135.0;
});

addCarrinho.addEventListener("click", () => {
  var qtd = Number(qtdGame.value);
  var opcao = jogo1.value;
  totalGame = qtd * valorp;
  carrinho.innerHTML += `<p>${opcao}  (${qtd}x)   <strong>R$ ${totalGame}</strong> </p>`;

  soma += totalGame;
  valorTotal.innerHTML = `<p> R$ ${soma} </p>`;
});

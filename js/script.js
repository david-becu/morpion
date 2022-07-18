// =======================================
// Section déclarative et initalisations
// =======================================

const choice = document.querySelectorAll(".case");
const turn = document.querySelector(".tour");
const wonBy = document.querySelector(".wonBy");

// compteur de tour
let count = 0;

// Symbole attribué auc joueur
const playerOne = "❌";
const playerTwo = "⭕";
let activePlayer = playerOne;

// Déterminer les conditions de victoire
const gg = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Initialisation des cases
//function initialize() {
choice.forEach((caseSelection) => {
  caseSelection.textContent = "";
});
turn.textContent = "";
wonBy.textContent = "";
//}
//initialize();

// >>>>>>>>>>>>>>> Déclarations fonctionnelles
// Déterminer le joueur actif
function changePlayer() {
  activePlayer == playerOne
    ? (activePlayer = playerTwo)
    : (activePlayer = playerOne);
}

// Déterminer si les conditions de victoire sont réunies
// N.B. tempPlayer doit être déclaré localement dans la fonction
// pour être utilisable indifféremment par le joueur 1 ou 2
function winner() {
  tempPlayer = [];
  // Déterminer si le symbole pour le joueur actuel
  // correspond à l'une des séries indicées du tableau «gg»
  choice.forEach((caseWinner) => {
    if (caseWinner.textContent == activePlayer) {
      tempPlayer.push(caseWinner.getAttribute("case"));
      // Comparaison de la sélection avec gg
      for (let i = 0; i < gg.length; i++) {
        let win = 0;
        for (let j = 0; j < gg[i].length; j++) {
          if (tempPlayer[j] == gg[i][j]) {
            win++;
          }

          if (win == 3) {
            wonBy.innerText = `Le joueur ${activePlayer} a gagné`;
            console.log(`Le joueur ${activePlayer} a gagné`);
            console.log(activePlayer + " = " + tempPlayer);
            break;
          }
        }
      }
    }
  });
}

// <<<<<<<<<<<<<< Fin déclarations fonctionnelles

// ============================================
// Fin de section déclarative et initalisations
// ============================================

// ============================================
// Section principale du programme
// ============================================

// Détermine la case choisie par les événements
choice.forEach((caseSelection) =>
  caseSelection.addEventListener("click", () => {
    turn.innerText = `Tour : ${count + 1} - ${activePlayer} vient de jouer`;
    // Vérifier si la case est vide :
    // Si la case est vide ajouter le symbole du joueur
    if (caseSelection.textContent == "") {
      caseSelection.textContent = activePlayer;
    }
    if (activePlayer == playerTwo) {
      count++;
    }
    winner();
    changePlayer();
  })
);
// ============================================
// Fin de la section principale du programme
// ============================================

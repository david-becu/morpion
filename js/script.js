// =======================================
// Section déclarative et initalisations
// =======================================

// compteur de tour
let count = 0;

// Symbole attribué auc joueur
const playerOne = "❌";
const playerTwo = "⭕";

// Déterminer les conditions de victoire
const gg = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Initialisation des cases
const choice = document.querySelectorAll(".case");
choice.forEach((caseSelection) => {
  caseSelection.textContent = "";
});

// >>>>>>>>>>>>>>> Déclarations fonctionnelles
// Déterminer le joueur actif
function activePlayer() {
  return count % 2 != 0 ? playerOne : playerTwo;
}

// Déterminer si les conditions de victoire sont réunies
function winner() {
  // Déterminer si le symbole pour le joueur actuel
  // correspond à l'une des séries indicées du tableau «gg»
  tempPlayer = [];
  choice.forEach((caseWinner) => {
    if ((caseWinner.textContent = activePlayer())) {
      tempPlayer.push(caseWinner.getAttribute("case"));
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
    count++;
    // Vérifier si la case est vide :
    // Si la case est vide ajouter le symbole du joueur
    if (caseSelection.textContent == "") {
      caseSelection.textContent = activePlayer();
    }
    // Si le compteur est au moins égal à trois vérifier si le joueur à gagné
    if (count >= 3) {
      winner();
    }
  })
);
// ============================================
// Fin de la section principale du programme
// ============================================

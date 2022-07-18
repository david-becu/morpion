// compteur de tour
let count = 0;
const playerOne = "❌";
const playerTwo = "⭕";

// Déterminer les conditionds de victoire
const gg = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
];

// Détermine la case choisie par les événements
let choice = document.querySelectorAll(".case");
choice.forEach((caseSelection) =>
  caseSelection.addEventListener("click", () => {
    //Récupérer le numéro de la case cliquée
    // Ajouter la croix ou le cercle correspondant au joueur
    // Si le compteur est au moins égal à trois vérifier si le jopueur à gagné
  })
);

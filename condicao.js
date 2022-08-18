// Fazer vitamina de banana com morango, ou,
// banana, ou,
// morango.

// Lista: Banana, morango e leite.

const banana = true;
const morango = true;
const leite = true;


function vitamina (ingredient1, ingredient2) {
  if (ingredient1 == "banana" && ingredient2 == "leite") {
    return `Vitamina de ${ingredient1} com ${ingredient2}`
  } else if (ingredient1 == "morango" && ingredient2 == "leite") {
    return `Vitamina de ${ingredient1} com ${ingredient2}`
  } else {
    return `não é possível fazer a vitamina`
  }
}

const result = vitamina("morango", "leite");

console.log(result);

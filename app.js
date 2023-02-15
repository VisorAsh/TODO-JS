// test

const année = prompt("Ajoutez votre année de naissance") * 1
const n = 2023
const age = n - année

if (n >= année) {
    console.log(`Vous avez ${age} ans cette année.`);
} else {
    console.log("Vous n'êtes pas encore née");
}

console.log("ça marche super bien")
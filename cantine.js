let client = "AWA";
let codeduplat = 1;
let quantite = Number("3");
let montantverse = 5000;
let prixunitaire = 0;
let nomduplat = "Plat inconnu";

switch (codeduplat) {
    case 1:
        prixunitaire = 1500;
        nomduplat = "Attiéké-poisson";
        break;
    case 2:
        prixunitaire = 2000;
        nomduplat = "Riz-poulet";
        break;
    case 3:
        prixunitaire = 1000;
        nomduplat = "Alloco-oeuf";
        break;
    default:
        prixunitaire = 0;
        nomduplat = "Plat invalide";
        console.log("Code du plat invalide");
        break;
}

console.log(`Client : ${client}`);
console.log(`Nom du plat : ${nomduplat}`);
console.log(`Prix unitaire : ${prixunitaire} FCFA`);


function calculerMontantTotal(prixunitaire, quantite) {
    return prixunitaire * quantite;
}
for (let portion = 1; portion <= quantite; portion++) {
    console.log(`Portion ${portion}`);
}

let montanttotal = calculerMontantTotal(prixunitaire, quantite);
console.log(`Montant total : ${montanttotal} FCFA`);
let reste = montantverse - montanttotal;
console.log(`Reste : ${reste} FCFA`);

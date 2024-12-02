const elementMolecules = [
    { elements: ["H", "O"], molecule: "H₂O" }, // Water
    { elements: ["C", "O"], molecule: "CO₂" }, // Carbon Dioxide
    { elements: ["H", "C"], molecule: "CH₄" }, // Methane
    { elements: ["N", "H"], molecule: "NH₃" }, // Ammonia
    { elements: ["Cl", "H"], molecule: "HCl" }, // Hydrochloric Acid
    { elements: ["S", "O"], molecule: "SO₂" }  // Sulfur Dioxide
];

console.log(elementMolecules);

// elements
let hydrogen = document.getElementById('hydrogen-button');
let oxygen = document.getElementById('oxygen-button');
let carbon = document.getElementById('carbon-button');
let nitrogen = document.getElementById('nitrogen-button');
let chlorine = document.getElementById('chlorine-button');
let sulfur = document.getElementById('sulfur-button');
// molecule display
let explore = document.getElementById('explore-button');


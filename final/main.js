let hydrogen = document.getElementById('hydrogen-button');
let oxygen = document.getElementById('oxygen-button');
let carbon = document.getElementById('carbon-button');
let nitrogen = document.getElementById('nitrogen-button');
let chlorine = document.getElementById('chlorine-button');
let sulfur = document.getElementById('sulfur-button');
let exploreButton = document.getElementById('explore-button');

let selectedElements = [];
let matchedMolecules =[];
const elementMolecules = [
    { elements: ["H", "O"], molecule: "H₂O Water" }, // Water 
    { elements: ["H", "C"], molecule: "CH₄ Methane" }, // Methane 
    { elements: ["H", "N"], molecule: "NH₃ Ammonia" }, // Ammonia 
    { elements: ["H", "Cl"], molecule: "HCl Hydrochloric Acid" }, // Hydrochloric Acid 
    { elements: ["H", "S"], molecule: "H₂S Hydrogen Sulfide" }, // Hydrogen Sulfide 
    { elements: ["O", "C"], molecule: "CO₂ Carbon Dioxide" }, // Carbon Dioxide 
    { elements: ["O", "N"], molecule: "NO Nitric Oxide"}, // Nitric Oxide 
    { elements: ["O", "Cl"], molecule: "Cl₂O Dichlorine Monoxide" }, // Dichlorine Monoxide 
    { elements: ["O", "S"], molecule: "SO₂ Sulfur Dioxide" }, // Sulfur Dioxide 
    { elements: ["C", "N"], molecule: "CN Cyanide" }, // Cyanide 
    { elements: ["C", "Cl"], molecule: "CCl₄ Carbon Tetrachloride " }, // Carbon Tetrachloride 
    { elements: ["C", "S"], molecule: "CS₂ Carbon Disulfide " }, // Carbon Disulfide 
    { elements: ["N", "Cl"], molecule: "NCl₃ Nitrogen Trichloride " }, // Nitrogen Trichloride 
    { elements: ["N", "S"], molecule: "NS Nitrosyl Sulfide " }, // Nitrosyl Sulfide 
    { elements: ["Cl", "S"], molecule: "SCl₂ Sulfur Dichloride" }, // Sulfur Dichloride
];

hydrogen.addEventListener('click', handleElementClick);
oxygen.addEventListener('click', handleElementClick);
carbon.addEventListener('click', handleElementClick);
nitrogen.addEventListener('click', handleElementClick);
chlorine.addEventListener('click', handleElementClick);
sulfur.addEventListener('click', handleElementClick);


function handleElementClick(event) {
    const elementSymbol = event.target.getAttribute('data-symbol');
    console.log("Element clicked:", elementSymbol);

    if (selectedElements.includes(elementSymbol)) {
        console.log("Element already selected. Ignoring.");
        return;
    }

    if (selectedElements.length < 2) {
        selectedElements.push(elementSymbol);
    } else {
        selectedElements = [elementSymbol];
    }
    console.log("Selected elements:", selectedElements);
    updateExploreButton();
}

// function OLD_updateExploreButton() {
//     if (selectedElements.length === 2) {
//         const foundMolecule = elementMolecules.find(pair => 
//             (pair.elements.includes(selectedElements[0]) && pair.elements.includes(selectedElements[1]))
//         );
//         if (foundMolecule) {
//             exploreButton.innerText = `Molecule: ${foundMolecule.molecule}`;
//         } else {
//             exploreButton.innerText = 'No molecule found!';
//         }
//         console.log("Found molecule:", foundMolecule);
//     } else {
//         exploreButton.innerText = 'Explore More';
//     }
 
// }


function updateExploreButton() {
    if (selectedElements.length === 2) {
        matchedMolecules = []; //clears array

        elementMolecules.forEach(item => {
            if (item.elements.includes(selectedElements[0]) && item.elements.includes(selectedElements[1])) {
                matchedMolecules.push(item); 
            }
        });

        if (matchedMolecules.length > 0) {
            exploreButton.innerText = `Molecule: ${matchedMolecules[0].molecule}`;
        } else {
            exploreButton.innerText = 'No molecule found!';
        }

        console.log("Found molecule(s):", matchedMolecules);
    } else {
        exploreButton.innerText = 'Explore More';
    }
}




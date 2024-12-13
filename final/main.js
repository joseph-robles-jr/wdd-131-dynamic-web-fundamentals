// main.js
import elementMolecules from './molecules.js';

let hydrogen = document.getElementById('hydrogen-button');
let oxygen = document.getElementById('oxygen-button');
let carbon = document.getElementById('carbon-button');
let nitrogen = document.getElementById('nitrogen-button');
let chlorine = document.getElementById('chlorine-button');
let sulfur = document.getElementById('sulfur-button');
let exploreButton = document.getElementById('explore-button');

let selectedElements = [];
let matchedMolecules = [];

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

function updateExploreButton() {
    if (selectedElements.length === 2) {
        matchedMolecules = []; // clears array

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

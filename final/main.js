const elementMolecules = [
    { elements: ["H", "O"], molecule: "H₂O" }, // Water
    { elements: ["C", "O"], molecule: "CO₂" }, // Carbon Dioxide
    { elements: ["H", "C"], molecule: "CH₄" }, // Methane
    { elements: ["N", "H"], molecule: "NH₃" }, // Ammonia
    { elements: ["Cl", "H"], molecule: "HCl" }, // Hydrochloric Acid
    { elements: ["S", "O"], molecule: "SO₂" }  // Sulfur Dioxide
];

console.log(elementMolecules);

var selectedElements = [];
// elements
var hydrogen = document.getElementById('hydrogen-button');
var oxygen = document.getElementById('oxygen-button');
var carbon = document.getElementById('carbon-button');
var nitrogen = document.getElementById('nitrogen-button');
var chlorine = document.getElementById('chlorine-button');
var sulfur = document.getElementById('sulfur-button');
// molecule display
var explore = document.getElementById('explore-button');

hydrogen.addEventListener('click', handleElementClick); 
oxygen.addEventListener('click', handleElementClick); 
carbon.addEventListener('click', handleElementClick); 
nitrogen.addEventListener('click', handleElementClick); 
chlorine.addEventListener('click', handleElementClick); 
sulfur.addEventListener('click', handleElementClick);



function handleElementClick(event)  // this uses an event to see if the items in selected Elements are in a molecule, then returns it.
    {
    const elementSymbol = event.target.innerText.split(' ')[0];
    if (selectedElements.length < 2) 
        {
            selectedElements.push(elementSymbol); 

        } 
        else 
        { 
            selectedElements = [elementSymbol]; 
        } 
        elementMoleculesQuery();
    }


function elementMoleculesQuery()
    {
        if (selectedElements.length === 2) 
            { const foundMolecule = elementMolecules.find(pair => (pair.elements.includes(selectedElements[0]) && pair.elements.includes(selectedElements[1])) );
                if (foundMolecule) 
                    { 
                        explore.innerText = `Molecule: ${foundMolecule.molecule}`;
                        
                    }
                else 
                { 
                    explore.innerText = 'No molecule found!';
                } 
                selectedElements = []; //clear array
            } 
            
        else 
        { 
            explore.innerText = 'Explore More Molecules';
        }
    }


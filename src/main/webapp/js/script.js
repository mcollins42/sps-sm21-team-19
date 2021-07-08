// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/*Display all the drugs */
function showDrugs() {
  fetch('/list-drugs').then(response => response.json()).then((drugs) => {
    const drugListElement = document.getElementById('drug-list');
    drugs.forEach((drug) => {
      drugListElement.appendChild(createDrugElement(drug));
    }) 
  });
}

function createDrugElement(drug) {
    const drugElement = document.createElement('li');
    drugElement.className = 'drug';

    const nameElement = document.createElement('p');
    nameElement.innerText = 'Name: '+ drug.name;

    const whatIsElement = document.createElement('p');
    whatIsElement.innerText = 'whatIs: ' + drug.whatIs;

    const usesElement = document.createElement('p');
    usesElement.innerText = 'Uses: ' + drug.uses;

    const sideEffectsElement = document.createElement('p');
    sideEffectsElement.innerText = 'Side Effects: ' + drug.sideEffects;

    const risksElement = document.createElement('p');
    risksElement.innerText = 'Risks: ' + drug.risks;

    drugElement.appendChild(nameElement);
    drugElement.appendChild(whatIsElement);
    drugElement.appendChild(usesElement);
    drugElement.appendChild(sideEffectsElement);
    drugElement.appendChild(risksElement);
    
    return drugElement;
}
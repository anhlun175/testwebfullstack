// let board = document.getElementById('boardDiv');
// let boardSize = 4;

// let numberOfAircraft = 4;

// let matrix = null

// let aircraftCoordinates = []

// let loadBoard = function() {

//     var allCoordinates = [];

//     matrix = new Array(boardSize)

//     for (var y = 0; y < boardSize; y++) {
//         var rowDiv = document.createElement('div')

//         matrix[y] = new Array(boardSize);

//         for (var x = 0; x < boardSize; x++) {

//             var button = document.createElement('button');

//             rowDiv.appendChild(button);

//             matrix[y][x] = button;
//             button.x = x;
//             button.y = y;
//             allCoordinates.push(button)
//         }

//         board.appendChild(rowDiv);


//     }

//     generateAircraft(allCoordinates);

// }

// let generateAircraft = function(allCoordinates) {

//     aircraftCoordinates = []
//     var count = 0;
//     while (count++ <= numberOfAircraft)

//         var idx = Math.floor(Math.random() * allCoordinates.length);

//     var coordinate = allCoordinates[idx];

//     matrix[coordinate.y][coordinate.x].aircraft = true;

//     allCoordinates.splice(idx, 1);

//     let aircraftShow = coordinate.y + ":" + coordinate.x;
//     console.log(aircraftShow);

//     aircraftCoordinates.push(coordinate);
// }

// let showAircraft = function() {
//     for (var idx in aircraftCoordinates) {
//         var x = aircraftCoordinates[idx].x;
//         var y = aircraftCoordinates[idx].y;

//         matrix[y][x].style.background = 'yellow';
//         matrix[y][x].style.fontSize = 'large';
//         matrix[y][x].style.color = 'red';
//         matrix[y][x].innerText = '*';
//     }
// }

// loadBoard();

let btnAircraft1 = document.querySelector('#aircraft');
let btnAircraft2 = document.querySelector('#aircraftTen');
let btnMiss1 = document.querySelector('#miss1')
let btnMiss2 = document.querySelector('#miss2')
let btnMiss3 = document.querySelector('#miss3')
let btnMiss4 = document.querySelector('#miss4')
let btnMiss5 = document.querySelector('#miss5')
let btnMiss6 = document.querySelector('#miss6')
let btnMiss7 = document.querySelector('#miss7')
let btnMiss8 = document.querySelector('#miss8')
let btnMiss9 = document.querySelector('#miss9')
let btnMiss10 = document.querySelector('#miss10')
let btnMiss11 = document.querySelector('#miss11')
let btnMiss12 = document.querySelector('#miss12')
let btnMiss13 = document.querySelector('#miss13')
let btnMiss14 = document.querySelector('#miss14')



btnAircraft1.addEventListener('click', () => btnAircraft1.style.backgroundColor = '#000000');
btnAircraft2.addEventListener('click', () => btnAircraft2.style.backgroundColor = '#000000');
btnMiss1.addEventListener('click', () => btnMiss1.style.backgroundColor = '#ffffff');
btnMiss1.addEventListener('click', () => btnAircraft1.style.backgroundColor = '#49474733');
btnMiss2.addEventListener('click', () => btnMiss2.style.backgroundColor = '#ffffff');
btnMiss2.addEventListener('click', () => btnAircraft1.style.backgroundColor = '#49474733');
btnMiss3.addEventListener('click', () => btnMiss3.style.backgroundColor = '#ffffff');
btnMiss4.addEventListener('click', () => btnMiss4.style.backgroundColor = '#ffffff');
btnMiss5.addEventListener('click', () => btnMiss5.style.backgroundColor = '#ffffff');
btnMiss5.addEventListener('click', () => btnAircraft1.style.backgroundColor = '#49474733');
btnMiss6.addEventListener('click', () => btnMiss6.style.backgroundColor = '#ffffff');
btnMiss7.addEventListener('click', () => btnMiss7.style.backgroundColor = '#ffffff');
btnMiss8.addEventListener('click', () => btnMiss8.style.backgroundColor = '#ffffff');
btnMiss8.addEventListener('click', () => btnAircraft1.style.backgroundColor = '#49474733');
btnMiss9.addEventListener('click', () => btnMiss9.style.backgroundColor = '#ffffff');
btnMiss9.addEventListener('click', () => btnAircraft1.style.backgroundColor = '#49474733');
btnMiss9.addEventListener('click', () => btnAircraft2.style.backgroundColor = '#49474733');
btnMiss10.addEventListener('click', () => btnMiss10.style.backgroundColor = '#ffffff');
btnMiss10.addEventListener('click', () => btnAircraft2.style.backgroundColor = '#49474733');
btnMiss11.addEventListener('click', () => btnMiss11.style.backgroundColor = '#ffffff');
btnMiss11.addEventListener('click', () => btnAircraft2.style.backgroundColor = '#49474733');
btnMiss12.addEventListener('click', () => btnMiss12.style.backgroundColor = '#ffffff');
btnMiss13.addEventListener('click', () => btnMiss13.style.backgroundColor = '#ffffff');
btnMiss13.addEventListener('click', () => btnAircraft2.style.backgroundColor = '#49474733');
btnMiss14.addEventListener('click', () => btnMiss14.style.backgroundColor = '#ffffff');
btnMiss14.addEventListener('click', () => btnAircraft2.style.backgroundColor = '#49474733');
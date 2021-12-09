// getting the div container
var container = document.getElementById('container');

// getting everything with the class hexCode
var hexCode = document.getElementsByClassName('hexCode');

// getting the New Color button
var generateButton = document.getElementById('generate');

// getting the Save This Color button
var saveButton = document.getElementById('save');

// getting boxes for saving colors
var boxes = document.getElementsByClassName('box');    

// getting copy buttons from html
var copyButton = document.getElementsByClassName('copyButton');


// creating array to randomly generate hex code with
var hexCharacters = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F',];

// adding event listener to new color button to run function
generateButton.addEventListener('click', generateHex);

function generateHex(){
    hex = '#';

    //randomly generating up to 6 characters by looping through array
    for(let i=0; i<6; i++){
        const i = Math.floor(Math.random() * hexCharacters.length); //Math.floor takes a number a rounds it down to the nearest whole number
        hex += hexCharacters[i]; // concatenating the '#' and hex code
    }

    // styling based on generated hex code
    container.style.backgroundColor = hex;
    hexCode[0].innerText = hex;
    generateButton.style.backgroundColor = hex;
    saveButton.style.backgroundColor = hex;
}

// adding event listener to save button to run function 
saveButton.addEventListener('click', saveHex);

// getting the length of the keys in local storage
var hexArray = Object.keys(localStorage).length;

// saving codes to local storage
function saveHex(){
    hexArray++
        localStorage.setItem(hexArray, hex);

        // changing inner text when saving a color
        if(hexCode[1] = localStorage[1]){
            hexCode[1].innerText = localStorage[1]
        }
        else{hexCode[1].innerText = '#ffffff'}

        if(hexCode[2] = localStorage[2]){
            hexCode[2].innerText = localStorage[2]
        }
        else{hexCode[2].innerText = '#ffffff'}

        if(hexCode[3] = localStorage[3]){
            hexCode[3].innerText = localStorage[3]
        }
        else{hexCode[3].innerText = '#ffffff'}
        
        if(hexCode[4] = localStorage[4]){
            hexCode[4].innerText = localStorage[4]
        }
        else{hexCode[4].innerText = '#ffffff'}

        if(hexCode[5] = localStorage[5]){
            hexCode[5].innerText = localStorage[5]
        }
        else{hexCode[5].innerText = '#ffffff'}

        // styles the buttons and boxes from the generated hex code
        boxes[0].style.backgroundColor = localStorage[1];
        copyButton[0].style.backgroundColor = localStorage[1];

        boxes[1].style.backgroundColor = localStorage[2];
        copyButton[1].style.backgroundColor = localStorage[2];

        boxes[2].style.backgroundColor = localStorage[3];
        copyButton[2].style.backgroundColor = localStorage[3];

        boxes[3].style.backgroundColor = localStorage[4];
        copyButton[3].style.backgroundColor = localStorage[4];

        boxes[4].style.backgroundColor = localStorage[5];
        copyButton[4].style.backgroundColor = localStorage[5];

        if(hexArray >= 5){
            hexArray = 0
            localStorage.setItem(hexArray, hex);
        }
    }

// this adds an event listener to each copy button.
copyButton[0].addEventListener('click', copyHexCode1);
copyButton[1].addEventListener('click', copyHexCode2);
copyButton[2].addEventListener('click', copyHexCode3);
copyButton[3].addEventListener('click', copyHexCode4);
copyButton[4].addEventListener('click', copyHexCode5);

// these functions copy the saved hex code form local storage to clipboard 
function copyHexCode1(){
    navigator.clipboard.writeText(hexCode[1].innerText);
    alert('Copied Hex Code: ' + localStorage[1])
}

function copyHexCode2(){
    navigator.clipboard.writeText(hexCode[2].innerText);
    alert('Copied Hex Code: ' + localStorage[2])
}

function copyHexCode3(){
    navigator.clipboard.writeText(hexCode[3].innerText);
    alert('Copied Hex Code: ' + localStorage[3])
}

function copyHexCode4(){
   navigator.clipboard.writeText(hexCode[4].innerText);
    alert('Copied Hex Code: ' + localStorage[4]) 
}

function copyHexCode5(){
    navigator.clipboard.writeText(hexCode[5].innerText);
    alert('Copied Hex Code: ' + localStorage[5])
}

document.onload = localStorage.clear()




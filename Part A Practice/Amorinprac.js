let currentGreeting = "Hello, Guy's";

const year = 2025;
const creator = "Amorin";

document.getElementById('greetingDisplay').textContent = currentGreeting;

function updateTheGreeting() {
    currentGreeting = "Welcome to your practice page!";
    document.getElementById('greetingDisplay').textContent = currentGreeting;
    console.log("Greeting updated!");
}

let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"]; 

const allFruitsListDiv = document.getElementById('allFruitsList'); 
const ulElement = document.createElement('ul'); 

for (let i = 0; i < fruits.length; i++) {
    const fruitName = fruits[i]; 
    const listItem = document.createElement('li'); 
    listItem.textContent = fruitName; 
    ulElement.appendChild(listItem); 
}
allFruitsListDiv.appendChild(ulElement); 


document.getElementById('fruitDisplay').textContent = fruits[2]; 


const studentProfile = {
    firstName: "Christian Paul",
    lastName: "Amorin",
    age: 20,
    course: "Computer Engineering",
    city: "Tres de Abril, Cebu City"
};

document.getElementById('studentName').textContent = studentProfile.firstName + " " + studentProfile.lastName;
document.getElementById('studentAge').textContent = studentProfile.age;



const myParagraphToChange = document.getElementById('changeMeParagraph');

function applyNewStyle() {
    myParagraphToChange.style.color = 'Red';
    myParagraphToChange.style.fontSize = '22px';
    myParagraphToChange.style.fontWeight = 'bold';
    myParagraphToChange.textContent = "Let's Goooooooooo";
}

function addNewContentToPage() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Tryyyyyyyyyy!";
    newParagraph.style.color = '#8a2be2';
    const contentArea = document.getElementById('newContentArea');
    contentArea.appendChild(newParagraph);
}


const helloButton = document.getElementById('helloButton');
const responseDisplay = document.getElementById('responseMessage');

helloButton.addEventListener('click', function() {
    responseDisplay.textContent = "Hello po! salamat sa pag click!";
    console.log("The 'Hello' button was pressed!");
});

const typingInputField = document.getElementById('typingInput');
const liveTypingDisplay = document.getElementById('liveTypingDisplay');

typingInputField.addEventListener('input', function(event) {
    liveTypingDisplay.textContent = event.target.value;
});



document.getElementById('updateGreetingButton').addEventListener('click', updateTheGreeting);
document.getElementById('styleChangeButton').addEventListener('click', applyNewStyle);
document.getElementById('addNewTextButton').addEventListener('click', addNewContentToPage);

window.addEventListener('load', function() {
    alert("Your page has loaded! Time to explore the basic interactions.");
});
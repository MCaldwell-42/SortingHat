$(document).ready(function(){ 
    $("#sortTron").click(function(e){
        event.preventDefault();
      $(this).hide();
      $("#sortingForm").show();
    });
  }); //jumbo click event that causes jumbo to hide and sortform to show


const sortButton = document.getElementById("sort");
const studentName = document.getElementById("nameInput");
const students = [];
let studentCounter = 1;
const Houses = [`<img src="./house pics/huffle.png">`, `<img src="./house pics/gryff.png">`, `<img src="./house pics/raven.png">`, `<img src="./house pics/slytherin.png">`];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buttonEvents = () => {
    sortButton.addEventListener('click', addStudent);
};

const deleteFunction = (e) => {
    const buttonId = e.target.id;
    students.forEach((student, index) => {
        if(student.id === buttonId){
            students.splice(index, 1);
        };
    });
    domStringBuilder(students);
    addDeleteEvents();
};


const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName('expelButton');
    for( let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    };
};
  const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    arrayToPrint.forEach((student) => {
        
        domString += `<div class="card col-3" >`;
        domString +=    `<div id='card' class='card-body'>`;
        domString +=        `<h3 class="card-title">${student.name}</h3>`;
        domString +=        `<h4>${student.house}</h4>`;
        domString +=      `<a class="btn btn-danger expelButton" id = ${student.id}>Expel</a>`;
        // domString += `<img src=${pet.imageUrl}>`;
        domString +=    `</div>`;
        domString += `</div>`;
    });
printToDom('studentCards', domString);
};

const addStudent = (e) => {
    e.preventDefault();
    const inputText = studentName.value
    const kidsHouse = Houses[Math.floor(Math.random()*Houses.length)];
    const newStudent = {
        name: inputText,
        house: kidsHouse,
        id: `student${studentCounter}`,
    };
    students.push(newStudent);
    studentCounter++;
    domStringBuilder(students);
    addDeleteEvents();
    studentName.value='';
};
  
const init = () => {
    buttonEvents();
};

init();
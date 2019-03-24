const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buttonEvents = () => {
    document.getElementById("sort").addEventListener("click", makeStudentCard);
};

const chooseHouse = () => {
    houseNum = math.floor(math.random() * 5);
    return houseNum;
};


$(document).ready(function(){ 
    $("#sortTron").click(function(e){
        event.preventDefault();
      $(this).hide();
      $("#sortingForm").show();
    });
  }); //jumbo click event that causes jumbo to hide and sortform to show


  const makeStudentCard = () => {

    let studentName = document.getElementById("nameInput").value
    let domString = '';
    chooseHouse();
console.log(houseNum);
    domString += `<div id='card'>`;
    domString += `<h3>${studentName}</h3>`
    
    // domString += `<img src=${pet.imageUrl}>`;

    domString += `</div>`;
    
printToDom('studentCards', domString);
};

  
const init = () => {
    buttonEvents;
};

init();
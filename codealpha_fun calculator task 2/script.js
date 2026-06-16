let display = document.getElementById("display");

// Add numbers and operators
function addValue(value){
  display.value = display.value + value;
}

// Clear screen
function clearDisplay(){
  display.value = "";
}

// Delete last value
function removeLast(){
  display.value = display.value.slice(0, -1);
}

// Calculate answer
function calculateResult(){

  try{
    display.value = eval(display.value);
  }

  catch{
    display.value = "Error";
  }
}

// Keyboard Support

document.addEventListener("keydown", function(event){

  let key = event.key;

  // Numbers and operators
  if(!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/" || key === "."){
    addValue(key);
  }

  // Enter key
  else if(key === "Enter"){
    calculateResult();
  }

  // Backspace key
  else if(key === "Backspace"){
    removeLast();
  }

  // Escape key
  else if(key === "Escape"){
    clearDisplay();
  }

});
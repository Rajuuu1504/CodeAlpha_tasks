const text = "Frontend Developer & Intern at Code Alpha";

const typingText = document.getElementById("typing-text");

let index = 0;

function typeEffect(){

    if(index < text.length){

        typingText.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect,100);
    }
}

typeEffect();
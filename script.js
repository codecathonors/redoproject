const h2 = document.createElement("h2");
h2.textContent = "Yes, character stats as in a video game...";

document.querySelector("body").appendChild(h2);

const coopevent1 = document.querySelector(".coopevent1")

coopevent1.addEventListener('click', function(){
    alert('Cooper\'s birthday is April 1st!');
})

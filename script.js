const h2 = document.createElement("h2");
h2.textContent = "Yes, character stats as in a video game...";

document.querySelector("body").appendChild(h2);

const coopevent1 = document.getElementById("coopevent1");

coopevent1.addEventListener("click", addText);

function addText() {
    coopevent1.textContent = "Cooper is a Brussels Griffon/Shih Tzu mix, also known as a 'Shiffon.'"
}

const coopevent2 = document.getElementById("coopevent2");

coopevent2.addEventListener("click", addText);

function addText() {
    coopevent2.textContent = "The Brussel Griffon breed is what George Lucas based the Ewoks on!"
}
    
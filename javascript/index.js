let isloaded = false;
function onload(){
    let button = document.querySelector("#buttonguessID");
    button.addEventListener("mouseover", (event) => {    
        loadimage();
    });
    button.addEventListener("mouseout", (event) => {
        unloadimage();
    });
}

function loadimage(){
    let divbutton = document.querySelector("#guessID");
    let newimage = document.createElement("img");
    divbutton.appendChild(newimage);
    newimage.src = "img/genshinguess.PNG"
    let isloaded = true;
}

function unloadimage(){
    var divbutton = document.querySelector("#guessID");
    var child = divbutton.lastElementChild; 
    divbutton.removeChild(child);
    let isloaded = false;
}


// select items
const createBtn = document.querySelector(".btn-success");
const cont2 = document.querySelector(".container2");
const cont3 = document.querySelector(".container3");
const checkBtn = document.querySelector("#check-icon");
const closeBtn = document.querySelector("#x-icon");
const textArea = document.querySelector("#note-text");
var i = 0;

// Variables
var random_margin = ["-5px", "7px", "5px", "10px", "15px", "20px"];

var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];

var random_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328","#16f5d0","#089dd4","#910af2","#ed099a","#ed7b09","#8ccf40","#ffffff"];

// Event listeners
closeBtn.addEventListener("click", typeNote);

createBtn.addEventListener("click", () => {
    cont3.style.display = "block";
});

checkBtn.addEventListener("click", createNote);

// Functions
function typeNote() {
    cont3.style.display = "none";
}

function createNote() {
    // want the value inside textarea entered by user
    // var noteText = document.getElementById("note-text").value;
    var noteText = textArea.value;
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    if (noteText == "") {
        alert("Enter text to add a note");
    } else {
        node1.innerHTML = noteText;

        node1.setAttribute("style", "width: 250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; word-wrap:break-word; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)");

        node1.style.margin = margin();
        node1.style.transform = rotate();
        node1.style.background = color();

        node0.appendChild(node1);
    
        // insertAdjacentElement is longer and new but does the same thing as appendChild so it doesnt matter which we use
        cont2.insertAdjacentElement("beforeend", node0);
        // cont2.appendChild(node0);
    
        node0.addEventListener("mouseenter", () => {
            node0.style.transform = "scale(1.2)";
            node0.style.zIndex = 1000;
        });

        node0.addEventListener("mouseleave", () => {
            node0.style.transform = "scale(1)";
            node0.style.zIndex = 0;
        });

        node0.addEventListener("dblclick", () => {
            node0.remove();
        });

        setBackToDefault();
    }
    
}

function margin() {
    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
    return random_rotate[Math.floor(Math.random()* random_rotate.length)];
}

function color() {
    if (i > random_color.length - 1) {
        i = 0;
    }
    return random_color[i++];
}

function setBackToDefault() {
    textArea.value = "";
}
let queue = [];

const form = document.getElementById("wait");
const join = document.getElementById("join");
const call = document.getElementById("call");

// Check that the required elements exist
if (!form || !join || !call) {
    throw new Error("Form or button is missing.");
}

// Store both event listeners
form.addEventListener("submit", joinQueue);
call.addEventListener("click", callNext);

// Add a person to the queue
function joinQueue(event) {
    event.preventDefault();

    let data = new FormData(form);
    let name = data.get("who");
    let minutes = data.get("mins");
    let bay = data.get("bay");
    let mins = document.getElementById("mins");

    // Check for an empty name
    if (name.trim() === "") {
        document.getElementById("status").textContent = "undefined";
        return;
    }

    // Check that minutes are a number
    if (minutes.trim() === "" || !Number.isFinite(Number(minutes))) {
        mins.setCustomValidity("not a number");
        mins.reportValidity();
        return;
    }

    mins.setCustomValidity("");

    name = name.trim();
    minutes = Number(minutes);

    // Find the same person in the same bay
    let found = false;

    for (let i = 0; i < queue.length; i++) {
        if (queue[i].name === name && queue[i].bay === bay) {
            queue[i].minutes += minutes;
            found = true;
            break;
        }
    }

    // Add a new row if no match was found
    if (found === false) {
        queue.push({ name: name, minutes: minutes, bay: bay });
    }

    form.elements["who"].value = "";
    form.elements["mins"].value = "";

    drawBoard();
    document.getElementById("status").textContent =
        "Customer added to the queue.";
}

// Display the queue and update the figures
function drawBoard() {
    let board = document.getElementById("board");
    let longest = 0;

    board.innerHTML = "";

    for (let i = 0; i < queue.length; i++) {
        let row = board.insertRow();

        row.insertCell().textContent = queue[i].name;
        row.insertCell().textContent = queue[i].minutes;
        row.insertCell().textContent = queue[i].bay;

        if (Number.isFinite(queue[i].minutes) &&
            queue[i].minutes > longest) {
            longest = queue[i].minutes;
        }
    }

    document.getElementById("waiting").textContent = queue.length;
    document.getElementById("longest").textContent = longest;
}

// Remove the longest wait
function callNext() {
    let longest = -Infinity;
    let index = -1;

    for (let i = 0; i < queue.length; i++) {
        if (Number.isFinite(queue[i].minutes) &&
            queue[i].minutes >= longest) {
            longest = queue[i].minutes;
            index = i;
        }
    }

    if (index !== -1) {
        queue.splice(index, 1);
    }

    drawBoard();
}

// Setting variables to hold the intervalID and a counter
let intervalID;
let counter = 0;

function startCounter() {
intervalID = setInterval(function() {
     // Create the logic needed in the setInterval() function for
    // incrementing the counter and outputting to the console
    counter++;
    console.log(counter);
}, 1000);
}

function stopCounter(){
    // add the logic required to stop the counter using clearInterval()
    clearInterval(intervalID);
}

let startButton = document.getElementById("Start");
let stopButton = document.getElementById("Stop");

// Adding missing a callback function to event listener
startButton.addEventListener("click" startCounter);
startButton.addEventListener("click" startCounter);
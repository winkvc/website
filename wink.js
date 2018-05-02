var fullCycleMs = 5000;
var winkTimeMs = 500;

function startWink() {
  document.getElementById("winky").innerHTML= ";)";
  setTimeout(endWink, winkTimeMs);
}

function endWink() {
  document.getElementById("winky").innerHTML= ":)";
}

function winkAtSetInterval() {
  setInterval(startWink, fullCycleMs);
}

endWink();
winkAtSetInterval();

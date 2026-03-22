let mode = "normal";

const modeIndicator = document.createElement("div");
modeIndicator.id = "quail-indicator";
document.body.appendChild(modeIndicator);

function setMode(m) {
  mode = m;
  updateIndicator();
}

function updateIndicator() {
  modeIndicator.textContent  = `-- ${mode.toUpperCase()} --`;
  modeIndicator.dataset.mode = mode;
}

updateIndicator();

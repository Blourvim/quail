const SITE_TARGETS = [
  {
    url: "linkedin.com",
    selector: "a[href], button, [role=button], [role=tab]"
  },
  {
    url: "github.com",
    selector: "a[href], button, .js-navigation-open, [role=button]",
  },
  {
    url: "default",
    selector: "a[href], button, input:not([type=hidden]), select, textarea, [role=button], [role=link], [role=menuitem], [role=tab]"
  }
];


const HINT_CHARS = "fasdhjklqwertyuıozxcvbmn";
let hintElements = [];
let hintInput = "";
let hintAction = null;
function targetSelectors(url) {

  let target = SITE_TARGETS.find((website) => url.includes(website.url));

  if (target === undefined) {
    return SITE_TARGETS[SITE_TARGETS.length - 1].selector;
  } else {

    return target.selector
  }
}

function startHints(url) {
  clearHints();
  const targets = Array.from(document.querySelectorAll(targetSelectors(url)));
  if (targets.length === 0) return;
  const labels = generateLabels(targets.length);
  hintInput = "";

  targets.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    const div = document.createElement("div");
    div.textContent = labels[i];
    div.className = "quail-hint";
    div.dataset.label = labels[i];
    div.style.cssText = `left: ${rect.left}px; top: ${rect.top}px;`;
    document.body.appendChild(div);
    hintElements.push({ el, label: labels[i], div });
  });

  setMode("hint");
}

function handleHintKey(key) {
  if (!HINT_CHARS.includes(key)) return;
  hintInput += key;

  let remaining = 0;
  hintElements.forEach(h => {
    const matches = h.label.startsWith(hintInput);
    h.div.style.opacity = matches ? "1" : "0.2";
    if (matches) remaining++;
  });

  const match = hintElements.find(h => h.label === hintInput);
  if (match) {
    match.el.focus();
    match.el.click();
    setMode("normal");
    clearHints();
    return;
  }

  if (remaining === 0) {

    setMode("normal");
    clearHints();
  }
}

function clearHints() {
  hintElements.forEach(h => h.div.remove());
  hintElements = [];
  hintInput = "";
  hintAction = null;
}

function generateLabels(n) {
  const chars = HINT_CHARS.split("");
  const labels = [];
  if (n <= chars.length) {
    for (let i = 0; i < n; i++) labels.push(chars[i]);
    return labels;
  }
  for (let i = 0; i < chars.length && labels.length < n; i++)
    for (let j = 0; j < chars.length && labels.length < n; j++)
      labels.push(chars[i] + chars[j]);
  return labels;
}

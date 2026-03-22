document.addEventListener("keydown", (e) => {

  if (mode === "insert") {
    if (e.key === "Escape") { setMode("normal"); e.preventDefault(); }
    return;
  }

  if (mode === "hint") {
    e.preventDefault();
    if (e.key === "Escape") { setMode("normal"); return; }
    handleHintKey(e.key);
    return;
  }

  if (mode === "command") {
    if (e.key === "Escape") { setMode("normal"); e.preventDefault(); }
    return;
  }

  if (mode === "normal") {
    e.preventDefault();
    switch (e.key) {
      case "i": setMode("insert"); break;
      case ":": setMode("command"); break;
      case "h": setMode("hint"); break;
    }

  }

}, true);

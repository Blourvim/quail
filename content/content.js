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

  if (mode == "normal") {
    e.preventDefault();
    switch (e.key) {
      // mode switches
      case "i": setMode("insert"); break;
      case ":": setMode("command"); break;
      case "h": setMode("hint"); break;

      // function keys :
      //
      // ing page navigations
      case "j": scrollBy({ top: 100 }); break;
      case "k": scrollBy({ top: -100 }); break;
      case "g": break;
      case "gg": break; //todo: this will need an input buffer system
      case "G": break;

      case "d": break;
      case "H": break;
      case "b": break;
      case "o": break;
    }

  }

}, true);

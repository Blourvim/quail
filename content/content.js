document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { setMode("normal"); e.preventDefault(); }

  if (mode === "insert") {
    return;
  }

  if (mode === "hint") {
    return;
  }

  if (mode === "command") {
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
      case "r": location.reload(); break;
      case "g": break;
      case "gg": break; //todo: this will need an input buffer system
      case "G": window.scrollTo(0, document.body.scrollHeight); break;

      case "d": break;
      case "H": break;
      case "b": break;
      case "o": break;
    }

  }

}, true);

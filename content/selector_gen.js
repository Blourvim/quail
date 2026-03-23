document.addEventListener("click", (e) => {
  const el = e.target;

  const entry = {
    time: new Date().toISOString(),
    site: location.hostname,
    tag: el.tagName.toLowerCase(),
    id: el.id || null,
    classes: el.className || null,
    role: el.getAttribute("role") || null,
    type: el.getAttribute("type") || null,
    href: el.getAttribute("href") || null,
    name: el.getAttribute("name") || null,
    label: el.getAttribute("aria-label") || null,
    alt: el.getAttribute("alt") || null,
    text: el.textContent.trim().slice(0, 80) || null,
    html: el.outerHTML.slice(0, 300),
  };

  // strip nulls
  Object.keys(entry).forEach(k => entry[k] === null && delete entry[k]);

  console.log({ entry })
}, true);

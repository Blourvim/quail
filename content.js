const banner = document.createElement("div");
banner.textContent = "hello world";
banner.style.cssText = `
  position: fixed;
  top: 0; left: 0; right: 0;
  background: rebeccapurple;
  color: white;
  padding: 8px;
  text-align: center;
  z-index: 999999;
  font-family: monospace;
`;
document.body.appendChild(banner);

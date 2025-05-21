function footer_content() {
  return "<p><a href=\"https://github.com/samp5\">github</a>  <a href=\"mailto:sampraneis@gmail.com\">email me</a> <a href=\"https://github.com/rebelot/kanagawa.nvim\">what color scheme is this?</a> <br>&copy;2025 Sam Praneis.</p>"
}

function insert_footer() {
  document.getElementById("my-footer").innerHTML = footer_content();
}

function updateTildeGutter() {
  const gutter = document.querySelector('.tilde-gutter');
  const container = document.querySelector('.container');

  if (!gutter || !container) return;

  const containerHeight = container.getBoundingClientRect().height;
  const lineHeightStr = getComputedStyle(container).lineHeight;
  const lineHeight = lineHeightStr === 'normal' ? 1.2 * parseFloat(getComputedStyle(container).fontSize) : parseFloat(lineHeightStr);

  const linesCount = Math.floor(containerHeight / lineHeight);

  const tildes = Array(linesCount).fill('~').join('\n');

  gutter.textContent = tildes;
}

document.addEventListener('load', updateTildeGutter);
window.addEventListener('load', updateTildeGutter);
window.addEventListener('resize', updateTildeGutter);

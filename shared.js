// HOK Academy — shared behaviour across all hero guide pages

(function () {
  const btn = document.createElement('a');
  btn.href = 'index.html';
  btn.className = 'back-btn';
  btn.innerHTML = '<span class="arrow">&#8592;</span> Guide Library';
  document.body.prepend(btn);
})();

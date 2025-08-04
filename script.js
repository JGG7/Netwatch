(function(a, s, y, n, c, h, i, d, e) {
  s.className += ' ' + y;
  h.start = 1 * new Date();
  h.end = i = function() {
    s.className = s.className.replace(RegExp(' ?' + y), '');
  };
  (a[n] = a[n] || []).hide = h;
  setTimeout(function() {
    i();
    h.end = null;
  }, c);
  h.timeout = c;
})(window, document.documentElement, 'async-hide', 'dataLayer', 4000, {'GTM-MB323TS': true});

// --- GTM script principal ---
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-MB323TS');

// --- DOM Ready logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Toggle Noticias
  const toggleButton = document.querySelector('.toggle-news');
  const additionalNews = document.querySelector('.additional-news');

  if (toggleButton && additionalNews) {
    toggleButton.addEventListener('click', () => {
      const isHidden = additionalNews.style.display === 'none';
      additionalNews.style.display = isHidden ? 'block' : 'none';
      toggleButton.textContent = isHidden ? 'OCULTAR NOTICIAS' : 'MÁS NOTICIAS';
    });
  }

  // Selección de juego
  const opciones = document.querySelectorAll(".juego-opcion");
  const mensaje = document.getElementById("mensaje-juego");

  const textos = {
    base: "Has seleccionado Cyberpunk 2077 (juego base).",
    ultimate: "Incluye el juego base y todas las expansiones.",
    phantom: "Necesitas tener Cyberpunk 2077 para poder jugar a Phantom Liberty."
  };

  opciones.forEach(opcion => {
    opcion.addEventListener("click", function () {
      const tipo = this.getAttribute("data-juego");

      // Reset selección
      opciones.forEach(o => o.classList.remove("seleccionado"));

      // Selección múltiple lógica
      if (tipo === "phantom") {
        this.classList.add("seleccionado");
        const base = document.querySelector('.juego-opcion[data-juego="base"]');
        if (base) base.classList.add("seleccionado");
      } else {
        this.classList.add("seleccionado");
      }

      // Mostrar texto
      if (mensaje) mensaje.textContent = textos[tipo] || "";
    });
  });

  // Menú hamburguesa funcional
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }

  // Dropdowns en móvil
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
      if (window.innerWidth <= 767.9) {
        e.preventDefault();
        this.classList.toggle('active');
      }
    });
  });
});

(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date();
        h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
        (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
        })(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-MB323TS':true});

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
        (window,document,'script','dataLayer','GTM-MB323TS');

        document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.toggle-news');
  const additionalNews = document.querySelector('.additional-news');

  toggleButton.addEventListener('click', () => {
    if (additionalNews.style.display === 'none') {
      additionalNews.style.display = 'block';
      toggleButton.textContent = 'OCULTAR NOTICIAS';
    } else {
      additionalNews.style.display = 'none';
      toggleButton.textContent = 'MÁS NOTICIAS';
    }
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const opciones = document.querySelectorAll(".juego-opcion");

    opciones.forEach(opcion => {
      opcion.addEventListener("click", function () {
        // Quitar clase "seleccionado" de todas las opciones
        opciones.forEach(o => o.classList.remove("seleccionado"));

        // Agregar clase "seleccionado" a la opción clickeada
        this.classList.add("seleccionado");
      });
    });
  });

   document.addEventListener("DOMContentLoaded", function () {
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

        // Primero, quitar la clase "seleccionado" a todos
        opciones.forEach(o => o.classList.remove("seleccionado"));

        // Luego, aplicar lógica de selección múltiple
        if (tipo === "phantom") {
          this.classList.add("seleccionado");

          // También seleccionar el juego base
          const base = document.querySelector('.juego-opcion[data-juego="base"]');
          if (base) base.classList.add("seleccionado");
        } else {
          this.classList.add("seleccionado");
        }

        // Mostrar el texto correspondiente
        mensaje.textContent = textos[tipo] || "";
      });
    });
  });
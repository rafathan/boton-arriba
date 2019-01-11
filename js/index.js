window.addEventListener("scroll", () => {
  // El valor 100 es el tamaño del scroll el cual se puede modificar, entre mayor sea el valor, más tardará en aparacer el botón
  if (window.scrollY >= 100) {
    document.getElementById("boton").classList.add("boton-arriba-aparecer");
  } else {
    document.getElementById("boton").classList.remove("boton-arriba-aparecer");
  }
})
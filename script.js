// Cambiar tonos de verde
function cambiarVerde() {
    const valor = document.getElementById("verde").value;
    const colorHex = `#00${parseInt(valor).toString(16).padStart(2, '0')}00`; // Verde puro
    document.getElementById("verdeColor").style.backgroundColor = colorHex;
    document.getElementById("verdeHex").textContent = colorHex.toUpperCase();
  }
  
  // Cambiar tonos de rojo
  function cambiarRojo() {
    const valor = document.getElementById("rojo").value;
    const colorHex = `#${parseInt(valor).toString(16).padStart(2, '0')}0000`; // Rojo puro
    document.getElementById("rojoColor").style.backgroundColor = colorHex;
    document.getElementById("rojoHex").textContent = colorHex.toUpperCase();
  }
  
  // Cargar imagen del escudo
  function cargarEscudo(event) {
    const archivo = event.target.files[0];
    if (archivo) {
      const escudoImagen = document.getElementById("escudoImagen");
      escudoImagen.src = URL.createObjectURL(archivo);
    }
  }
  
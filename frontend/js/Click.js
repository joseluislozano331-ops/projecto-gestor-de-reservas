    // Si moviste la carpeta 'audios' dentro de 'frontend', usa esta ruta:
const sonidoPiedra = new Audio('/audios/Stone1.wav');

// (Si NO moviste la carpeta y la dejaste afuera, cambia la línea de arriba por: '../audios/Stone1.wav')

function reproducirSonido() {
    // Reinicia el sonido a 0 para que suene en cada clic, aunque hagas clics muy seguidos
    sonidoPiedra.currentTime = 0; 
    
    sonidoPiedra.play().catch(error => {
        console.warn("Error al reproducir el audio:", error);
    });
}

// Detecta el clic izquierdo en toda la página
document.addEventListener('click', reproducirSonido);

// Detecta el clic derecho en toda la página
document.addEventListener('contextmenu', reproducirSonido);

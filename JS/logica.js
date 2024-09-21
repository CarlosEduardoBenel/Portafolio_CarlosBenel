function copiarContenido(contenido) {
    navigator.clipboard.writeText(contenido).then(() => {
        mostrarMensaje();
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

function mostrarMensaje() {
    const feedbackElement = document.getElementById("copyFeedback");
    feedbackElement.classList.add("show");
    
    setTimeout(() => {
        feedbackElement.classList.remove("show");
    }, 2000);
}

document.getElementById("copyEmail").addEventListener("click", function(event) {
    event.preventDefault();
    copiarContenido('benelcarloseduardo@gmail.com');
});
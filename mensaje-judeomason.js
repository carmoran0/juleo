// Script para mostrar el mensaje especial JUDEOMASON
document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar el mensaje especial JUDEOMASON
    window.mostrarMensajeJudeomason = function() {
        // Crear el elemento para el mensaje especial
        const mensajeEspecial = document.createElement('div');
        mensajeEspecial.className = 'mensaje-especial';
        mensajeEspecial.innerHTML = 'Leo es <span class="judeomason">JUDEOMASON</span>';
        document.body.appendChild(mensajeEspecial);
        
        // Aplicar estilos
        mensajeEspecial.style.position = 'fixed';
        mensajeEspecial.style.top = '50%';
        mensajeEspecial.style.left = '50%';
        mensajeEspecial.style.transform = 'translate(-50%, -50%) scale(0.5)';
        mensajeEspecial.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        mensajeEspecial.style.color = 'white';
        mensajeEspecial.style.padding = '20px 40px';
        mensajeEspecial.style.borderRadius = '10px';
        mensajeEspecial.style.fontSize = '2em';
        mensajeEspecial.style.fontWeight = 'bold';
        mensajeEspecial.style.zIndex = '9999';
        mensajeEspecial.style.opacity = '0';
        mensajeEspecial.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Estilo para el texto JUDEOMASON
        const judeomasonText = mensajeEspecial.querySelector('.judeomason');
        judeomasonText.style.color = '#ff0000';
        judeomasonText.style.fontWeight = 'bolder';
        judeomasonText.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.7)';
        
        // Animar la aparición
        setTimeout(() => {
            mensajeEspecial.style.opacity = '1';
            mensajeEspecial.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
        
        // Eliminar después de un tiempo
        setTimeout(() => {
            mensajeEspecial.style.opacity = '0';
            mensajeEspecial.style.transform = 'translate(-50%, -50%) scale(0.5)';
            setTimeout(() => {
                mensajeEspecial.remove();
            }, 1000);
        }, 5000);
    };
});
// Script para mostrar texto flotante con adjetivos
document.addEventListener('DOMContentLoaded', function() {
    // Cargar los adjetivos desde el archivo JSON
    fetch('adjetivos.json?' + new Date().getTime())
        .then(response => response.json())
        .then(adjetivos => {
            // Crear el contenedor para los textos flotantes
            const floatingContainer = document.createElement('div');
            floatingContainer.id = 'floating-text-container';
            floatingContainer.className = 'floating-text-container';
            document.body.appendChild(floatingContainer);
            
            // Función para crear un nuevo elemento de texto flotante
            function createFloatingText() {
                // Seleccionar un adjetivo aleatorio
                const adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
                
                // Crear el elemento de texto
                const textElement = document.createElement('div');
                textElement.className = 'floating-text';
                textElement.innerHTML = `Leo es <span class="adjetivo">${adjetivo}</span>`;
                
                // Posición aleatoria
                const posX = Math.random() * 90; // % de ancho
                const posY = Math.random() * 90; // % de alto
                
                // Tamaño aleatorio
                const size = Math.random() * 1.5 + 0.8; // entre 0.8 y 2.3em
                
                // Aplicar estilos
                textElement.style.left = `${posX}%`;
                textElement.style.top = `${posY}%`;
                textElement.style.fontSize = `${size}em`;
                textElement.style.opacity = '0';
                
                // Añadir al contenedor
                floatingContainer.appendChild(textElement);
                
                // Animación de aparición
                setTimeout(() => {
                    textElement.style.opacity = '1';
                }, 100);
                
                // Eliminar después de un tiempo
                setTimeout(() => {
                    textElement.style.opacity = '0';
                    setTimeout(() => {
                        textElement.remove();
                    }, 1000);
                }, 5000 + Math.random() * 2000);
            }
            
            // Crear textos flotantes periódicamente
            setInterval(createFloatingText, 1000);
            
            // Crear algunos textos iniciales
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createFloatingText();
                }, i * 500);
            }
        })
        .catch(error => console.error('Error cargando adjetivos:', error));
});
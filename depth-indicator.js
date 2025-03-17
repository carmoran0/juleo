// Script para el indicador de profundidad
document.addEventListener('DOMContentLoaded', function() {
    // Crear el elemento indicador de profundidad
    const depthIndicator = document.createElement('div');
    depthIndicator.id = 'depth-indicator';
    depthIndicator.className = 'depth-indicator';
    depthIndicator.innerHTML = 'profundidad 0 leos';
    document.body.appendChild(depthIndicator);
    
    // Función para actualizar la profundidad basada en el scroll
    function updateDepth() {
        // Calcular la profundidad basada en el scroll
        // Convertimos el scroll a una medida de "profundidad" en metros
        // Ajusta el factor de conversión según prefieras
        const scrollPosition = window.scrollY;
        const depthFactor = 0.02; // Cada 10px = 1 metro
        const depth = Math.floor(scrollPosition * depthFactor);
        
        // Actualizar el texto del indicador
        depthIndicator.innerHTML = `profundidad ${depth} leos`;
        
        // Cambiar el color según la profundidad
        if (depth > 100) {
            depthIndicator.style.color = '#00008B'; // Azul oscuro para aguas profundas
        } else if (depth > 50) {
            depthIndicator.style.color = '#0000CD'; // Azul medio
        } else if (depth > 20) {
            depthIndicator.style.color = '#1E90FF'; // Azul claro
        } else {
            depthIndicator.style.color = '#87CEEB'; // Azul muy claro para aguas superficiales
        }
    }
    
    // Escuchar el evento de scroll
    window.addEventListener('scroll', updateDepth);
    
    // Inicializar
    updateDepth();
});
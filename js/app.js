// =========================================================================
// 1. SELECTORES DEL DOM (Captura de elementos de la interfaz)
// =========================================================================
const inputTexto = document.querySelector('#textoInput');
const txtResultado = document.querySelector('#textoResultado');
const btnProcesar = document.querySelector('#btnProcesar');

// =========================================================================
// 2. FUNCIÓN FLECHA PURA (Lógica de eliminación de patrones)
// =========================================================================
const eliminarPatronDeCaracteres = (texto) => {
    if (!texto) return "";

    try {
        // Expresión regular: elimina secuencias de letras (como "xyz", "abc", etc.)
        let resultado = texto.replace(/[a-wx-z]+/gi, '');

        // Limpieza de formato: corrige los espacios dobles generados al borrar
        resultado = resultado.replace(/ {2,}/g, ' ');

        // Quita espacios innecesarios al inicio o al final
        return resultado.trim();
    } catch (error) {
        console.error("Error al procesar el texto:", error);
        return texto;
    }
};

// =========================================================================
// 3. CONTROLADOR DE EVENTO (Handler)
// =========================================================================
const procesarEntradasUsuario = () => {
    const textoOriginal = inputTexto.value;
    
    // Si la caja de entrada está vacía, avisa al usuario y frena el programa
    if (!textoOriginal) {
        alert("Por favor, introduce un texto primero.");
        return;
    }
    
    // Aplica la función de limpieza y muestra el resultado en el formulario de salida
    txtResultado.value = eliminarPatronDeCaracteres(textoOriginal);
};

// =========================================================================
// 4. ESCUCHADORES DE EVENTOS (Listeners independientes)
// =========================================================================
// Se ejecuta únicamente cuando el usuario hace clic en el botón
btnProcesar.addEventListener('click', procesarEntradasUsuario);

document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = 'ecc7f442c95fe9501ef8ccf9'; 
    const API_BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;
    const API_CODES_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;

    const cantidadInput = document.getElementById('cantidad');
    const monedaOrigenSelect = document.getElementById('monedaOrigen');
    const monedaDestinoSelect = document.getElementById('monedaDestino');
    const convertirBtn = document.getElementById('convertirBtn');
    const resultadoDiv = document.getElementById('resultado');
    const mensajeErrorDiv = document.getElementById('mensajeError');
    const apiKeyWarningDiv = document.getElementById('api-key-warning');

   
    const girarBtn = document.getElementById('girarBtn'); 

    let tasasDeConversion = {}; 

    if (API_KEY === 'cc7f442c95fe9501ef8ccf9') { 
        apiKeyWarningDiv.style.display = 'block';
    } else {
        apiKeyWarningDiv.style.display = 'none';
    }

    async function cargarMonedasEnSelects() {
        if (API_KEY === 'cc7f442c95fe9501ef8ccf9') {
            mensajeErrorDiv.textContent = 'Error: Por favor, asegúrate de que tu clave API esté correcta en script.js.';
            apiKeyWarningDiv.style.display = 'block';
            return;
        }

        try {
            const response = await fetch(API_CODES_URL);
            const data = await response.json();

            if (data.result === 'success') {
                const supportedCodes = data.supported_codes;
                
                monedaOrigenSelect.innerHTML = '';
                monedaDestinoSelect.innerHTML = '';

                supportedCodes.forEach(codePair => {
                    const currencyCode = codePair[0];
                    const currencyName = codePair[1];

                    const optionOrigen = document.createElement('option');
                    optionOrigen.value = currencyCode;
                    optionOrigen.textContent = `${currencyCode} - ${currencyName}`;
                    monedaOrigenSelect.appendChild(optionOrigen);

                    const optionDestino = document.createElement('option');
                    optionDestino.value = currencyCode;
                    optionDestino.textContent = `${currencyCode} - ${currencyName}`;
                    monedaDestinoSelect.appendChild(optionDestino);
                });

                monedaOrigenSelect.value = 'USD'; 
                monedaDestinoSelect.value = 'CLP'; 
                
            } else {
                mensajeErrorDiv.textContent = `Error al cargar lista de monedas: ${data['error-type'] || 'Desconocido'}. Verifica tu clave API.`;
                console.error('Error de la API al cargar códigos:', data);
            }
        } catch (error) {
            mensajeErrorDiv.textContent = 'Error de conexión al cargar la lista de monedas. Asegúrate de estar usando un servidor local (http://localhost...) y tener internet.';
            console.error('Error de fetch al cargar códigos:', error);
        }
    }

    async function obtenerTasas(monedaBase) {
        mensajeErrorDiv.textContent = ''; 
        resultadoDiv.textContent = '';   

        if (API_KEY === 'TU_CLAVE_API_AQUI') { 
            mensajeErrorDiv.textContent = 'Error: Por favor, asegúrate de que tu clave API esté correcta en script.js.';
            apiKeyWarningDiv.style.display = 'block';
            return null;
        }

        try {
            const response = await fetch(`${API_BASE_URL}${monedaBase}`);
            const data = await response.json();

            if (data.result === 'success') {
                tasasDeConversion = data.conversion_rates;
                console.log(`Tasas cargadas para ${monedaBase}:`, tasasDeConversion); 
                return tasasDeConversion;
            } else {
                mensajeErrorDiv.textContent = `Error de la API: ${data['error-type'] || 'Desconocido'}. Verifica la moneda base o tu clave API.`;
                console.error('Error de la API:', data);
                return null;
            }
        } catch (error) {
            mensajeErrorDiv.textContent = 'Error de conexión. Asegúrate de estar usando un servidor local (http://localhost...) y tener internet.';
            console.error('Error de fetch o de red:', error);
            return null;
        }
    }

    function convertirMoneda() {
        const cantidad = parseFloat(cantidadInput.value);
        const monedaOrigen = monedaOrigenSelect.value;
        const monedaDestino = monedaDestinoSelect.value;

        if (isNaN(cantidad) || cantidad <= 0) {
            mensajeErrorDiv.textContent = 'Por favor, introduce una cantidad numérica válida mayor que cero.';
            return;
        }

        if (Object.keys(tasasDeConversion).length === 0 || !tasasDeConversion[monedaOrigen] || !tasasDeConversion[monedaDestino]) {
            mensajeErrorDiv.textContent = 'Las tasas de conversión no están disponibles para las monedas seleccionadas. Intenta recargar o seleccionar otras monedas.';
            return;
        }

        const tasaOrigenADestino = tasasDeConversion[monedaDestino];
        
        if (tasaOrigenADestino !== undefined) {
            const resultado = cantidad * tasaOrigenADestino;
            resultadoDiv.textContent = `${cantidad} ${monedaOrigen} = ${resultado.toFixed(2)} ${monedaDestino}`;
            mensajeErrorDiv.textContent = ''; 
        } else {
            mensajeErrorDiv.textContent = `No se pudo encontrar la tasa de conversión de ${monedaOrigen} a ${monedaDestino}.`;
        }
    }


    function girarConversion() {
        const temp = monedaOrigenSelect.value;
        monedaOrigenSelect.value = monedaDestinoSelect.value;
        monedaDestinoSelect.value = temp;

        
        convertirBtn.click();
    }


    convertirBtn.addEventListener('click', async () => {
        const monedaBaseParaTasas = monedaOrigenSelect.value;
        const tasasCargadas = await obtenerTasas(monedaBaseParaTasas);
        if (tasasCargadas) {
            convertirMoneda();
        }
    });

    

    girarBtn.addEventListener('click', girarConversion);

    cargarMonedasEnSelects().then(() => {
        obtenerTasas(monedaOrigenSelect.value);
    });

    monedaOrigenSelect.addEventListener('change', async () => {
        await obtenerTasas(monedaOrigenSelect.value);
    });
});
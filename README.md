Conversor de Monedas
Este es un simple conversor de monedas basado en la API de ExchangeRate-API.com, que te permite convertir entre una amplia variedad de divisas en tiempo real.

Características
Conversión de Monedas: Convierte cualquier cantidad de una moneda a otra.

Carga Dinámica de Monedas: Obtiene y muestra automáticamente todos los códigos de moneda soportados por la API, sin necesidad de actualizar el código HTML manualmente.

Intercambio Rápido: Un botón dedicado para intercambiar instantáneamente las monedas de origen y destino (De y A).

Requisitos
Una clave API (API Key) de ExchangeRate-API.com. La versión gratuita es suficiente para empezar.

Un navegador web moderno.

Un servidor web local para ejecutar la aplicación (esencial para evitar problemas de CORS).

Configuración y Ejecución
Sigue estos pasos para poner en marcha la aplicación en tu máquina local:

Obtén tu Clave API:

Regístrate en ExchangeRate-API.com para obtener tu clave API gratuita.

Guarda los Archivos:

Crea una carpeta en tu ordenador (ej. conversor-monedas).

Dentro de esa carpeta, guarda el archivo HTML proporcionado como index.html.

Dentro de la misma carpeta, guarda el archivo JavaScript proporcionado como script.js.

Inserta tu Clave API en script.js:

Abre el archivo script.js.

Busca la línea:

const API_KEY = 'ecc7f442c95fe9501ef8ccf9'; // <--- ESTA LÍNEA

Reemplaza 'ecc7f442c95fe9501ef8ccf9' con tu propia clave API real que obtuviste de ExchangeRate-API.com.

Ejecuta un Servidor Web Local:

Para evitar problemas de CORS (Cross-Origin Resource Sharing) en los navegadores, debes servir los archivos a través de un servidor local.

Opción 1: Usando Python (recomendado si lo tienes):

Abre tu terminal o línea de comandos.

Navega hasta la carpeta donde guardaste index.html y script.js.

Ejecuta el siguiente comando:

python -m http.server 8000

Opción 2: Usando http-server (si tienes Node.js/npm):

Si no lo tienes, instálalo globalmente: npm install -g http-server

Navega hasta tu carpeta de proyecto en la terminal.

Ejecuta: http-server

Verás un mensaje indicando en qué dirección y puerto se está ejecutando el servidor (normalmente http://localhost:8000 o similar).

Abre la Aplicación en tu Navegador:

Abre tu navegador web (Chrome, Firefox, Edge, etc.).

Ve a la dirección que te proporcionó el servidor local (ej. http://localhost:8000/index.html).

Uso
Carga de Monedas: Al cargar la página, los selectores "De" y "A" se llenarán automáticamente con una lista completa de monedas soportadas por la API.

Cantidad: Introduce la cantidad de dinero que deseas convertir en el campo "Cantidad".

Moneda de Origen: Selecciona la moneda desde la que deseas convertir en el selector "De".

Moneda de Destino: Selecciona la moneda a la que deseas convertir en el selector "A".

Girar Conversión: Haz clic en el botón "⇅ Girar Conversión" para intercambiar rápidamente las monedas seleccionadas en los selectores "De" y "A".

Convertir: Haz clic en el botón "Convertir" para ver el resultado de la conversión. El resultado aparecerá debajo del botón.

Solución de Problemas
"¡ADVERTENCIA! Parece que la clave API no está bien configurada...": Revisa que la API_KEY en script.js esté exactamente igual a la que obtuviste de ExchangeRate-API.com.

Selectores que se quedan en "Cargando monedas...":

Asegúrate de que estás ejecutando la aplicación desde un servidor local (http://localhost...).

Verifica tu conexión a internet.

Comprueba en la Consola del navegador (F12) si hay errores de red o de la API (Network tab).

# =========================================================
# === 💰 Conversor de Monedas Sencillo 💰 ===
# =========================================================

# ¡Bienvenido a tu Conversor de Monedas!
# Esta es una herramienta web simple y eficaz, construida para ayudarte a convertir
# entre una gran cantidad de divisas mundiales en tiempo real,
# utilizando la potencia de la API de ExchangeRate-API.com.

# =========================================================
# === ✨ ¿Qué Puedes Hacer con Esta App? ===
# =========================================================

# * Conversiones Instantáneas: Introduce una cantidad y elige tus monedas para ver el valor equivalente al instante.
# * Más de 160 Monedas: Gracias a la API, no estás limitado a unas pocas monedas; ¡tienes acceso a una lista exhaustiva de divisas globales!
# * Actualizaciones Automáticas: Las listas de monedas se cargan directamente desde la API, asegurando que siempre tengas las opciones más recientes.
# * Intercambio Rápido de Monedas: Un práctico botón te permite alternar rápidamente las monedas de origen y destino con un solo clic.

# =========================================================
# === 🚀 ¡Pruébala Tú Mismo! (Configuración Rápida) ===
# =========================================================

# Para que este conversor funcione en tu ordenador, solo necesitas un par de cosas:

# 1. Tu Clave Secreta (API Key):
#    * Dirígete a https://www.exchangerate-api.com/.
#    * Regístrate para obtener tu clave API gratuita. ¡Es súper fácil y el plan gratuito es perfecto para empezar!

# 2. Organiza tus Archivos:
#    * Crea una carpeta en tu computadora, por ejemplo, `mi-conversor`.
#    * Dentro de esa carpeta, guarda el archivo HTML (el que te proporcioné antes) como `index.html`.
#    * También dentro de la misma carpeta, guarda el archivo JavaScript (el `script.js` más reciente y corregido).

# 3. Inserta tu Clave en el Código:
#    * Abre `script.js` con tu editor de código favorito.
#    * Busca esta línea, cerca del principio:
#      ```javascript
#      const API_KEY = 'ecc7f442c95fe9501ef8ccf9'; // <--- ¡Aquí va tu clave!
#      ```
#    * Reemplaza `'ecc7f442c95fe9501ef8ccf9'` por la **clave API exacta** que obtuviste de ExchangeRate-API.com. ¡Asegúrate de que esté entre comillas simples!

# 4. Inicia tu Servidor Local:
#    * Para evitar errores de seguridad del navegador (CORS), **debes** ejecutar la aplicación desde un servidor local.
#    * Opción A (si tienes Python):
#      * Abre tu terminal o línea de comandos.
#      * Navega hasta tu carpeta `mi-conversor`.
#      * Ejecuta: `python -m http.server 8000`
#    * Opción B (si tienes Node.js y npm):
#      * Instala `http-server` (si no lo tienes): `npm install -g http-server`
#      * Navega hasta tu carpeta `mi-conversor` en la terminal.
#      * Ejecuta: `http-server`
#    * El terminal te mostrará una dirección, algo como `http://localhost:8000` o `http://127.0.0.1:8080`.

# 5. ¡Abre en tu Navegador!
#    * Copia la dirección de tu servidor local (ej. `http://localhost:8000/index.html`).
#    * Pégala en la barra de direcciones de tu navegador y presiona Enter.

# =========================================================
# === 💡 ¿Cómo Usar el Conversor? ===
# =========================================================

# 1. Monedas al Instante: Al cargar la página, los menús desplegables "De" y "A" se llenarán automáticamente con todas las monedas disponibles.
# 2. Tu Cantidad: Escribe el número que quieres convertir en el campo "Cantidad".
# 3. Elige Origen: Selecciona la moneda inicial en el menú "De".
# 4. Elige Destino: Selecciona la moneda a la que quieres convertir en el menú "A".
# 5. ¿Cambiar de Dirección? Si quieres intercambiar rápidamente las monedas "De" y "A", haz clic en el botón "⇅ Girar Conversión".
# 6. ¡A Convertir! Haz clic en el botón "Convertir" y el resultado aparecerá mágicamente debajo.

# =========================================================
# === troubleshooting 🐛 (Solución de Problemas Comunes) ===
# =========================================================

# * "¡ADVERTENCIA! Parece que la clave API no está bien configurada...":
#   * Solución: Revisa muy bien la línea `const API_KEY = '...'` en tu `script.js`. ¡Un error mínimo es suficiente! Asegúrate de que coincida exactamente con la clave que te dio ExchangeRate-API.com.

# * Los selectores de moneda se quedan en "Cargando monedas...":
#   * Solución: Casi siempre esto es un problema de CORS. Confirma que estás ejecutando la aplicación a través de un servidor local (la URL en tu navegador debe empezar con `http://localhost:` o similar, no `file:///`).
#   * También, verifica tu conexión a internet y, por si acaso, echa un vistazo a la pestaña "Network" (Red) en las herramientas de desarrollador (`F12`) para ver si hay algún error en la solicitud a la API.

# ¡Espero que disfrutes usando tu nuevo Conversor de Monedas! Si tienes más preguntas, no dudes en preguntar.

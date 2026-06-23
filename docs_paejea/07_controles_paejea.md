# Controles: prevención y mitigación

> **Resumen rápido:** la matriz (sección 06) ya nos dijo **en qué orden** atacar
> los problemas. Esta sección dice **qué hacer con cada uno**. Para cada falla
> proponemos dos tipos de medida: **prevención** (evitar que la puerta exista) y
> **mitigación** (poner candados extra por si igual alguien la encuentra). Vamos
> en el mismo orden de prioridad: primero las dos críticas, después la media.

---

## 1. Dos formas de defenderse: prevenir y mitigar

Antes de entrar en cada falla, conviene tener clara la diferencia, porque las dos
se necesitan:

- **Prevención:** **evitar que la falla exista**. Es lo primero y lo más
  importante: cerrar bien la puerta.
- **Mitigación:** **reducir el daño si la falla igual ocurre**. Son las capas
  extra de protección, por si la prevención falla.

> **La analogía:** prevenir es poner una buena cerradura en la puerta. Mitigar es
> tener además una alarma, un perro y un seguro contra robos. Lo ideal no es
> elegir una, sino tener las dos.

Todas las medidas que siguen se apoyan en marcos reconocidos a nivel mundial:
**OWASP** (referencia en seguridad web), **CIS** y **NIST** (buenas prácticas de
seguridad). No son inventos nuestros: son el estándar de la industria.

---

## 2. Prioridad 1 — Inyección de comandos (04) 🟥

**El riesgo:** un atacante toma control del servidor completo de VetAmigos. Es la
falla más grave (CVSS 10.0), por eso se atiende primero.

### Prevención (evitar que exista)

- **No pasar nunca al servidor lo que escribe el usuario.** En lugar de entregarle
  el texto del usuario al sistema para que lo ejecute, usar las **funciones
  internas seguras** del lenguaje de programación que hacen la tarea sin abrir esa
  puerta.
- **Validar con lista blanca.** Si el campo es para una dirección IP, aceptar
  **solo** un formato de IP válido (números y puntos) y rechazar todo lo demás.
  Así, símbolos que sirven para encadenar órdenes (`;`, `|`, `&`) nunca pasan.

### Mitigación (reducir el daño si igual ocurre)

- **Mínimos privilegios:** que el portal funcione con una cuenta del servidor que
  pueda hacer **solo lo justo**. Aunque alguien cuele una orden, no podrá borrar
  archivos clave ni tomar el control total.
- **Aislar el servidor:** mantenerlo separado del resto de los sistemas, para que
  un ataque no se propague a la base de clientes o de pagos.
- **Filtro delante del sitio (WAF):** un sistema que detecta y bloquea intentos
  típicos de inyección de comandos antes de que lleguen al portal.
- **Registrar y vigilar:** dejar registro de las órdenes ejecutadas para detectar
  a tiempo un intento y reaccionar rápido.

---

## 3. Prioridad 2 — Inyección SQL (02) 🟥

**El riesgo:** un atacante extrae de un solo golpe toda la base de datos de
clientes, mascotas y pagos (CVSS 9.8). Es la segunda en urgencia.

### Prevención (evitar que exista)

- **Consultas parametrizadas (la medida clave).** En lugar de mezclar lo que
  escribe el usuario dentro de la pregunta a la base de datos, se usa una
  pregunta con "casillas" fijas donde el dato entra **siempre como dato, nunca
  como instrucción**. Así, escribir `' OR '1'='1` deja de funcionar: la base lo
  toma como un texto cualquiera, no como una orden.
- **Validar la entrada:** revisar que cada campo tenga el formato esperado (un
  correo con forma de correo, un número donde va un número) y rechazar lo que no
  calce.

### Mitigación (reducir el daño si igual ocurre)

- **Mínimos privilegios en la base de datos:** que la cuenta que usa el portal
  pueda leer solo lo necesario y no, por ejemplo, borrar tablas completas.
- **Cifrar los datos sensibles:** guardar los datos de pago y personales
  **cifrados** (codificados), para que aunque alguien los robe, no pueda leerlos.
- **Filtro delante del sitio (WAF):** bloquear intentos típicos de inyección SQL
  antes de que lleguen a la base.
- **Registrar y vigilar:** detectar consultas extrañas o masivas que delaten un
  intento de robo de la base.

---

## 4. Prioridad 3 — XSS reflejado (03) 🟨

**El riesgo:** un atacante roba la sesión o engaña a un cliente por vez (CVSS
6.1). Importa, pero se atiende después de cerrar las dos críticas.

### Prevención (evitar que exista)

- **Escapar la salida (la medida clave).** Antes de mostrar en pantalla lo que
  escribió el usuario, convertir los símbolos especiales en texto inofensivo
  (por ejemplo, el `<` se transforma en un código que el navegador **muestra**
  en vez de **ejecutar**). Así, un `<script>` aparece como texto escrito, no como
  una instrucción que el navegador obedece.
- **Validar la entrada:** si el campo es para un nombre, rechazar símbolos que un
  nombre normal no lleva, como `<`, `>` o `/`.

### Mitigación (reducir el daño si igual ocurre)

- **Política de seguridad de contenido (CSP):** una regla que le dice al
  navegador **qué código tiene permiso de ejecutarse**. Si se cuela un script
  intruso, el navegador lo bloquea.
- **Cookies de sesión protegidas (HttpOnly):** marcar la "llave" de la sesión
  para que el código de la página **no pueda leerla**; así, aunque ocurra un XSS,
  el atacante no logra robar la sesión.
- **Filtro delante del sitio (WAF):** bloquear intentos típicos de inyección de
  código como `<script>`.

---

## 5. Resumen de los controles

De un vistazo, qué hacer con cada falla y en qué orden:

| Prioridad | Falla | Prevención clave | Mitigación clave |
|:---:|-------|------------------|------------------|
| 1 🟥 | Inyección de comandos (04) | No pasar la entrada al servidor + lista blanca | Mínimos privilegios + aislar + WAF |
| 2 🟥 | Inyección SQL (02) | Consultas parametrizadas | Cifrar datos + mínimos privilegios + WAF |
| 3 🟨 | XSS reflejado (03) | Escapar la salida | CSP + cookies HttpOnly + WAF |

> **Fíjate en algo:** hay medidas que se repiten en las tres fallas —**validar la
> entrada**, el **filtro WAF**, los **mínimos privilegios** y **registrar y
> vigilar**—. Son controles "paraguas" que protegen al portal completo de una
> vez. Aplicarlos bien es de lo más rentable para VetAmigos.

---

## 6. Lo que viene

Con estos controles, VetAmigos **previene** las fallas y **reduce el daño** si
ocurren. Falta el último paso: ¿qué hacer si, a pesar de todo, un ataque tiene
éxito? Cómo **volver a la normalidad** —respaldos, restaurar el servicio y
avisar a los afectados— se desarrolla en la sección **08 (recuperación)**.

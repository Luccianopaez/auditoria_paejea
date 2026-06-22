# Ataque 1 — Inyección SQL

> **Resumen rápido:** escribiendo apenas unos caracteres en un cuadro de
> búsqueda del portal, logramos que la base de datos nos entregara **la lista
> completa de usuarios** sin tener permiso para verla. Es el ataque más grave de
> los tres: gravedad **9.8 / 10 (Crítica)**.

---

## 1. La evidencia (lo que hicimos en la prueba)

En el ambiente de prueba (DVWA, nivel de seguridad *Low*), fuimos a la sección
**SQL Injection**, que tiene un campo llamado **"User ID"**. Ese campo debería
servir para buscar **un solo cliente** por su número.

En lugar de escribir un número normal, escribimos esto:

```
' OR '1'='1
```

Al pulsar **Submit**, el portal no nos mostró un cliente: nos mostró **todos los
usuarios de golpe** (admin, Gordon Brown, Hack Me, Pablo Picasso, Bob Smith).

![Inyección SQL](img_paejea/sqli_paejea.png)

> Traducido al negocio de VetAmigos: es como pedir en el mesón la ficha de **un**
> cliente y que el sistema, en cambio, nos entregue **el listado completo de las
> 18.000 personas registradas**. Esa información nunca debería salir así.

---

## 2. Por qué funciona

Para entenderlo, primero algo simple: el portal guarda toda la información en una
**base de datos** (una gran libreta ordenada de clientes, mascotas y pagos). Cada
vez que alguien busca un cliente, el portal le hace una **pregunta** a esa libreta.

Una pregunta normal sería: *"Tráeme al cliente cuyo número es 1."*

El problema es que el portal **arma esa pregunta pegando directamente lo que
escribe el usuario**, sin revisarlo. Entonces, cuando escribimos `' OR '1'='1`,
la pregunta deja de decir "tráeme al cliente 1" y pasa a decir, en la práctica:

> *"Tráeme al cliente 1 **o** todos los casos en que 1 sea igual a 1."*

Y como **1 siempre es igual a 1**, la condición se cumple para **todos** los
registros. Resultado: la base entrega la libreta entera.

> **La analogía:** es como una puerta con un guardia que pregunta "¿eres el
> cliente 1?". Nosotros respondemos "soy el cliente 1 **o** da igual quién sea".
> Como la segunda parte siempre es verdad, el guardia nos deja pasar siempre.

La causa de fondo es que el portal **mezcla los datos que escribe el usuario con
sus propias instrucciones internas**, y no distingue uno de otro. Esa confusión
es la "puerta mal cerrada" que aprovecha el ataque.

---

## 3. Qué tan grave es (puntaje CVSS)

Para medir la gravedad usamos **CVSS**, el estándar internacional que da una nota
de 0 a 10 a cada falla de seguridad (calculadora oficial:
https://www.first.org/cvss/calculator/3.1).

| Concepto | Valor |
|----------|-------|
| **Puntaje CVSS v3.1** | **9.8 / 10** |
| **Severidad** | **Crítica** 🟥 |
| **Vector** | `AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H` |

¿Por qué tan alto? En palabras simples:

- **Se ataca por internet**, sin necesidad de estar físicamente en el lugar.
- **Es fácil de hacer:** basta con escribir una frase corta, no se requieren
  herramientas especiales.
- **No hace falta tener cuenta ni contraseña** para lograrlo.
- **Compromete los tres pilares de la información a la vez:** el atacante puede
  **ver** datos privados (confidencialidad), **modificarlos o borrarlos**
  (integridad) y **dejar el sistema inutilizable** (disponibilidad).

Por eso recibe casi la nota máxima. Para VetAmigos significa que esta falla es la
**número uno a corregir**: pone en riesgo directo la base completa de clientes,
fichas de mascotas y medios de pago.

---

## 4. Cómo se defiende VetAmigos

### Prevención (evitar que la falla exista)

La defensa principal se llama **consultas parametrizadas** (en inglés, *prepared
statements*). Suena técnico, pero la idea es sencilla:

- En vez de **pegar** lo que escribe el usuario dentro de la pregunta a la base
  de datos, el portal envía primero la pregunta con un **hueco** reservado, y
  recién después mete el dato en ese hueco.
- Así, la base de datos trata lo que escribe el usuario **siempre como un dato**
  (un texto a buscar), **nunca como una instrucción**. Aunque alguien escriba
  `' OR '1'='1`, eso se busca tal cual, como si fuera un nombre raro, y no altera
  la pregunta.

> Es separar el "qué pregunto" del "con qué dato pregunto". El usuario solo puede
> rellenar el dato; jamás puede cambiar la pregunta.

Como apoyo, se suma **validar la entrada**: si el campo "User ID" solo debe
contener un número, el portal debe **rechazar** cualquier cosa que no sea un
número antes de continuar. Esta es la recomendación #1 de **OWASP** (la
organización de referencia mundial en seguridad web).

### Mitigación (reducir el daño si igual ocurre)

Aunque la prevención es lo primero, conviene poner capas extra por si algo falla:

- **Mínimos privilegios:** que la cuenta con la que el portal consulta la base de
  datos pueda hacer solo lo justo. Así, aunque un atacante entre, no podrá borrar
  ni modificar tablas completas.
- **Un "filtro" delante del sitio (WAF):** un sistema que detecta y bloquea frases
  típicas de ataque, como `' OR '1'='1`, antes de que lleguen al portal.
- **Cifrar los datos sensibles:** guardar las tarjetas y datos personales de
  forma cifrada, para que, aunque se filtren, no se puedan leer fácilmente.
- **Registrar y vigilar:** dejar registro de las consultas para detectar a tiempo
  un intento de robo masivo de datos y reaccionar rápido.

> **En una frase:** si VetAmigos usa consultas parametrizadas y valida lo que
> escribe el usuario, esta puerta queda **bien cerrada** y el ataque deja de
> funcionar.

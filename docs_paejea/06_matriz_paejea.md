# Matriz de riesgo y mapa de calor

> **Resumen rápido:** ya sabemos **qué proteger** (los activos, sección 05) y **de
> qué** (los tres ataques, secciones 02–04). Ahora toca lo más importante para
> decidir: **ordenar las fallas de la más urgente a la menos urgente**. Para eso
> se usa la **matriz de riesgo**, que cruza dos preguntas —¿qué tan probable es?
> y ¿qué tan grave sería?— y pinta cada falla con un color: 🟥 rojo = atender
> primero, 🟩 verde = puede esperar.

---

## 1. ¿Qué es una matriz de riesgo?

Es una herramienta para **priorizar**. No todas las fallas se arreglan al mismo
tiempo: hay que empezar por las que más daño pueden causar. La matriz ayuda a
decidir con una regla simple:

> **Riesgo = Probabilidad × Impacto**

- **Probabilidad:** qué tan fácil y qué tan seguido podría ocurrir el ataque.
- **Impacto:** qué tan grande sería el daño para VetAmigos si ocurre.

> **La analogía:** es como decidir qué arreglar primero en una casa. Una gotera
> en el techo (muy probable en invierno y con daño alto) se atiende antes que una
> bombilla floja del patio (poco daño). La matriz hace exactamente esa
> comparación, pero con las fallas de seguridad del portal.

---

## 2. Cómo medimos cada falla

Para poder compararlas, le damos a cada ataque una nota del **1 al 5** en cada
pregunta:

**Probabilidad (¿qué tan fácil es que ocurra?)**

| Nota | Significa |
|------|-----------|
| 1 | Muy difícil de explotar |
| 2 | Difícil |
| 3 | Posible (necesita alguna condición, como engañar a alguien) |
| 4 | Fácil |
| 5 | Muy fácil: por internet, sin cuenta y con una frase corta |

**Impacto (¿qué tan grave sería el daño?)**

| Nota | Significa |
|------|-----------|
| 1 | Daño mínimo |
| 2 | Daño menor |
| 3 | Daño moderado (afecta a un cliente por vez) |
| 4 | Daño grave |
| 5 | Daño máximo (toda la base de datos o el servidor completo) |

> Estas notas **no son inventadas**: salen de lo que demostramos en los ataques y
> de su puntaje CVSS oficial (secciones 02–04). A mayor CVSS, mayor probabilidad
> e impacto.

---

## 3. Puntuación de cada riesgo

Cruzando lo que vimos en la prueba y los activos que protege VetAmigos (sección
05), se identificaron **cinco riesgos** ordenados de mayor a menor:

| Riesgo | Activos en juego | Prob. | Impacto | P × I | Nivel |
|--------|-----------------|:---:|:---:|:---:|-------|
| **Inyección de comandos** | Servidor · Pagos · Clientes (A5, A3, A1) | 5 | 5 | **25** | 🟥 Crítico |
| **Inyección SQL** | Clientes · Mascotas · Pagos (A1, A2, A3) | 5 | 5 | **25** | 🟥 Crítico |
| **Robo de tarjetas de clientes** | Datos de pago (A3) | 4 | 5 | **20** | 🟥 Crítico |
| **Caída total del portal** | Servidor · Reputación (A5, A6) | 4 | 4 | **16** | 🟥 Crítico |
| **XSS reflejado** | Cuentas de clientes (A4) | 3 | 3 | **9** | 🟨 Medio |

**Por qué estas puntuaciones, en términos de VetAmigos:**

---

**Inyección de comandos → Probabilidad 5 × Impacto 5 = Riesgo 25 (Crítico)**

Se ejecuta por internet con una sola frase, sin cuenta y sin herramientas
especiales: la probabilidad es la máxima posible (5). Las consecuencias son
igualmente máximas (5): el atacante **toma control total del servidor** donde
vive todo VetAmigos. Puede robar los datos de los ~18.000 clientes y sus
mascotas, vaciar los datos de pago, borrar años de historial veterinario, instalar
programas maliciosos o simplemente apagar el sitio. Es como si alguien tomara
las llaves del local, de la caja fuerte y de todos los archivadores a la vez.

---

**Inyección SQL → Probabilidad 5 × Impacto 5 = Riesgo 25 (Crítico)**

Igual de fácil de ejecutar: por internet, sin cuenta, con una frase corta
(probabilidad 5). El daño es exponer de un solo golpe **toda la base de datos**:
los ~18.000 clientes con sus nombres, RUT y correos; las fichas de salud de
~25.000 mascotas; y todos los medios de pago guardados (impacto 5). Para
VetAmigos, cuyo negocio es completamente online y que custodia datos financieros
de sus clientes, una filtración de esta magnitud puede generar denuncias legales
y la pérdida permanente de la confianza de miles de familias.

---

**Robo de tarjetas de clientes → Probabilidad 4 × Impacto 5 = Riesgo 20 (Crítico)**

Este no es un ataque nuevo: es la **consecuencia más grave** de que la inyección
SQL o la de comandos prosperen. La probabilidad es alta pero no máxima (4), porque
el robo de tarjetas requiere que primero ocurra uno de los dos ataques críticos;
si se cierran esas dos puertas, este riesgo desaparece también. Pero si ocurre,
el impacto es el máximo (5): el dato de tarjeta robado se usa para hacer compras
fraudulentas en nombre del cliente. Para VetAmigos significa responsabilidad legal
directa y clientes con pérdidas económicas reales.

---

**Caída total del portal → Probabilidad 4 × Impacto 4 = Riesgo 16 (Crítico)**

Quien tome control del servidor con la inyección de comandos puede simplemente
apagarlo o destruir su contenido. La probabilidad (4) no es máxima porque el
atacante podría preferir robar datos en silencio antes que causar una caída
visible que levante alarmas. Pero si ocurre, el impacto es muy alto (4):
VetAmigos **vive 100 % en internet**, por lo que una caída del portal detiene
todo el negocio de golpe. Sin portal, no hay ventas, no hay consultas, no hay
atención a clientes ni a sus mascotas.

---

**XSS reflejado → Probabilidad 3 × Impacto 3 = Riesgo 9 (Medio)**

Es fácil de preparar, pero **necesita que el cliente haga clic** en un enlace
trampa enviado por correo, WhatsApp o redes (probabilidad media: 3); si nadie
cae en la trampa, el ataque no ocurre. El daño se limita a la cuenta de **un
cliente por vez** (impacto moderado: 3): el atacante puede ver sus datos
personales y la ficha de sus mascotas, o usar su cuenta para hacer pedidos.
Grave para esa familia, pero muy distinto de exponer los datos de 18.000
personas de un solo golpe.

> Los riesgos 3 y 4 son consecuencias directas de los riesgos 1 y 2. Corregir
> la inyección de comandos y la inyección SQL hace desaparecer también el riesgo
> de robo de tarjetas y de caída del portal.

---

## 4. El mapa de calor

El mapa de calor muestra los **cinco riesgos** sobre la cuadrícula. Cada uno se
ubica cruzando su **probabilidad** (columnas) con su **impacto** (filas).
Mientras más arriba y más a la derecha, **más rojo y más urgente**.

|  | **Prob. 1** | **Prob. 2** | **Prob. 3** | **Prob. 4** | **Prob. 5** |
|---|:---:|:---:|:---:|:---:|:---:|
| **Impacto 5** | 🟨 5 | 🟧 10 | 🟧 15 | 🟥 **Tarjetas** | 🟥 **SQL · CMD** |
| **Impacto 4** | 🟨 4 | 🟨 8 | 🟧 12 | 🟥 **Caída** | 🟥 20 |
| **Impacto 3** | 🟩 3 | 🟨 6 | 🟨 **XSS** | 🟧 12 | 🟧 15 |
| **Impacto 2** | 🟩 2 | 🟨 4 | 🟨 6 | 🟨 8 | 🟧 10 |
| **Impacto 1** | 🟩 1 | 🟩 2 | 🟩 3 | 🟨 4 | 🟨 5 |

**Cómo leer los colores:**

| Color | Riesgo (P × I) | Qué significa |
|-------|:---:|---------------|
| 🟥 Rojo | 16 – 25 | **Crítico:** atender de inmediato |
| 🟧 Naranjo | 10 – 15 | **Alto:** atender pronto |
| 🟨 Amarillo | 4 – 9 | **Medio:** planificar su arreglo |
| 🟩 Verde | 1 – 3 | **Bajo:** puede esperar |

> Lo que salta a la vista: **cuatro de los cinco riesgos caen en zona roja**.
> SQL y CMD comparten la peor posición (esquina superior derecha, riesgo 25).
> Tarjetas (20) y Caída (16) también están en rojo. Solo el XSS queda en
> amarillo, porque necesita la colaboración involuntaria de la víctima.

---

## 5. Priorización: por dónde empezar

Ordenando de mayor a menor urgencia:

1. **🟥 Inyección de comandos — Riesgo 25.** La más urgente. Aunque empata con la
   inyección SQL en puntaje, es la primera porque da **control total del servidor**
   (CVSS 10.0): no solo expone datos, permite destruir o apagar todo VetAmigos.
   Mientras esta falla esté abierta, el portal vive con la puerta de atrás sin
   llave.

2. **🟥 Inyección SQL — Riesgo 25.** La segunda, casi a la par. Expone en un solo
   ataque los datos de **~18.000 clientes, ~25.000 mascotas y todos los medios de
   pago** (CVSS 9.8). Para una veterinaria online que custodia datos personales y
   financieros de miles de familias, una filtración así puede ser el fin del
   negocio.

3. **🟥 Robo de tarjetas — Riesgo 20.** Consecuencia directa de las dos
   anteriores. Cerrar las fallas 1 y 2 hace desaparecer este riesgo también. Si
   no se cierran, la posibilidad de que un atacante use datos de tarjeta robados
   para hacer fraude financiero a los clientes es muy alta.

4. **🟥 Caída del portal — Riesgo 16.** También consecuencia de la falla 1. Si se
   corrige la inyección de comandos, este riesgo cae con ella. Si no se corrige,
   un atacante podría apagar el portal en cualquier momento, deteniendo todo el
   negocio.

5. **🟨 XSS reflejado — Riesgo 9.** La menos urgente de las cinco. No se ignora,
   pero depende de engañar a un cliente y el daño es individual, no masivo. Se
   atiende después de cerrar los cuatro riesgos críticos.

> **La regla práctica para VetAmigos:** corregir la **inyección de comandos** y
> la **inyección SQL** elimina de paso también los riesgos 3 y 4, porque son
> consecuencias de esas mismas fallas. Esas dos correcciones juntas cubren la
> mayor parte del riesgo total identificado en este informe.

---

## 6. Lo que viene

Ya tenemos las fallas **ordenadas por urgencia**. El siguiente paso es decir
**qué hacer con cada una**: cómo evitar que ocurran (**prevención**) y cómo
reducir el daño si igual ocurren (**mitigación**). Eso se desarrolla en la
sección **07 (controles)**, siguiendo este mismo orden de prioridad.

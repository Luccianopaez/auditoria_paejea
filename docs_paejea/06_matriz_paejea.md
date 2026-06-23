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

## 3. Puntuación de cada falla

Cruzando lo que vimos en la prueba, esta es la nota de cada ataque:

| Falla | Probabilidad | Impacto | Riesgo (P × I) | Nivel | Apoyo CVSS |
|-------|:---:|:---:|:---:|-------|:---:|
| **Inyección de comandos (04)** | 5 | 5 | **25** | 🟥 Crítico | 10.0 |
| **Inyección SQL (02)** | 5 | 5 | **25** | 🟥 Crítico | 9.8 |
| **XSS reflejado (03)** | 3 | 3 | **9** | 🟨 Medio | 6.1 |

**Por qué estas notas (en palabras simples):**

- **Inyección de comandos → 5 × 5 = 25 (Crítico).** Se hace por internet, sin
  cuenta y con una frase corta (probabilidad máxima), y el daño es total: el
  atacante **toma control del servidor** y puede ver, cambiar, borrar o apagar
  todo (impacto máximo). Su CVSS es **10.0**, la nota más alta posible.
- **Inyección SQL → 5 × 5 = 25 (Crítico).** Igual de fácil de ejecutar
  (probabilidad máxima), y expone de un solo golpe **toda la base de datos**:
  clientes, mascotas y datos de pago (impacto máximo). Su CVSS es **9.8**.
- **XSS reflejado → 3 × 3 = 9 (Medio).** Es fácil de preparar, **pero necesita
  que la víctima haga clic** en un enlace trampa, así que no se dispara solo
  (probabilidad media). Y afecta sobre todo a **un cliente por vez**, no a toda
  la base (impacto moderado). Su CVSS es **6.1**.

---

## 4. El mapa de calor

El mapa de calor es la matriz dibujada con colores. Cada falla se ubica cruzando
su **probabilidad** (columnas) con su **impacto** (filas). Mientras más arriba y
más a la derecha, **más rojo y más urgente**.

|  | **Prob. 1** | **Prob. 2** | **Prob. 3** | **Prob. 4** | **Prob. 5** |
|---|:---:|:---:|:---:|:---:|:---:|
| **Impacto 5** | 🟨 5 | 🟧 10 | 🟧 15 | 🟥 20 | 🟥 **SQL · CMD** |
| **Impacto 4** | 🟨 4 | 🟨 8 | 🟧 12 | 🟥 16 | 🟥 20 |
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

> Lo que salta a la vista: **la inyección de comandos y la inyección SQL caen
> juntas en la esquina roja** (arriba a la derecha), el peor lugar posible. El
> **XSS** queda en el centro, en amarillo: importa, pero no es la prioridad
> número uno.

---

## 5. Priorización: por dónde empezar

Ordenando de la más urgente a la menos urgente:

1. **🟥 Inyección de comandos (04) — Riesgo 25.** Es la primera. Aunque empata en
   nota con la inyección SQL, gana en gravedad porque **da control total del
   servidor** (CVSS 10.0, el máximo): no solo se roban datos, se puede apagar o
   destruir todo el negocio.
2. **🟥 Inyección SQL (02) — Riesgo 25.** La segunda, casi a la par. Expone de un
   golpe **toda la información de clientes, mascotas y pagos** (CVSS 9.8). Para
   una veterinaria online que vive de la confianza, una filtración así es
   devastadora.
3. **🟨 XSS reflejado (03) — Riesgo 9.** La tercera. No se ignora —puede usarse
   para robar la cuenta de un cliente—, pero su daño es más acotado y depende de
   engañar a la víctima. Se atiende **después** de cerrar las dos críticas.

> **La regla para VetAmigos:** primero se tapan las dos puertas que dejan entrar
> al servidor y a toda la base de datos (comandos y SQL); después, la que afecta
> a un cliente por vez (XSS). Así se reduce el mayor riesgo en el menor tiempo.

---

## 6. Lo que viene

Ya tenemos las fallas **ordenadas por urgencia**. El siguiente paso es decir
**qué hacer con cada una**: cómo evitar que ocurran (**prevención**) y cómo
reducir el daño si igual ocurren (**mitigación**). Eso se desarrolla en la
sección **07 (controles)**, siguiendo este mismo orden de prioridad.

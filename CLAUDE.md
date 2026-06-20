# CLAUDE.md — Guía del proyecto `auditoria_paejea`

Este archivo le dice a Claude Code cómo trabajar en este proyecto. Léelo
completo antes de hacer cualquier cambio.

---

## 1. Qué es este proyecto

Es una **evaluación universitaria** (INACAP — TI3034 Fundamentos de Seguridad
de la Información, Unidad 3). El alumno actúa como **auditor de seguridad** de
una empresa ficticia y entrega su informe **como una página web navegable**.

El producto final tiene dos partes que viven en el mismo proyecto:

1. **El contenido del informe** → carpeta `docs_paejea/` (archivos Markdown).
   Aquí está todo el trabajo intelectual: análisis, evidencia, matriz de riesgo,
   medidas de seguridad.
2. **La página web (React)** → toma ese contenido y lo muestra de forma bonita y
   navegable, con las capturas de pantalla incrustadas y la matriz de riesgo
   como un mapa de calor visual.

> La nota se basa en la **calidad del análisis de seguridad**, no en lo bonito
> del diseño. Aun así, la web debe cargar y mostrar todas las secciones.

---

## 2. La empresa asignada: **VetAmigos** (E18)

- **Rubro:** Veterinaria y petshop **online**.
- **Qué maneja:** datos de **clientes**, datos de sus **mascotas** y **datos de
  pago** (tarjetas / medios de pago).
- Todo el análisis (activos, impacto, riesgos y medidas) debe pensarse **para
  este tipo de negocio**. La misma falla técnica no significa lo mismo en una
  veterinaria online que en un banco; el contexto del negocio es lo que
  convierte un hallazgo técnico en un riesgo real.

---

## 3. REGLAS DE ORO (lo más importante)

Estas reglas son obligatorias en todo momento:

1. **Toda la información que aparezca en la página web debe salir de la carpeta
   `docs_paejea/`.** La web nunca inventa datos: solo presenta lo que ya está
   escrito en los Markdown.

2. **No inventar información.** Si para escribir o mejorar una sección falta un
   dato, hay una duda, o haría falta investigar algo → **PREGUNTAR al usuario
   antes de escribir.** Nunca rellenar con suposiciones.

3. **Lenguaje sencillo, no técnico.** El informe lo revisa un **cliente ficticio
   que NO entiende de seguridad informática**. Todo debe entenderse fácil:
   - Explicar los términos con palabras simples y ejemplos cotidianos.
   - Usar analogías (ej: "una vulnerabilidad es como una puerta mal cerrada").
   - Evitar jerga; si hay que usar un término técnico, explicarlo de inmediato.
   - Frases cortas y claras.

4. **El archivo `09_prompts_paejea.md` lo completa el usuario, no Claude.** Ahí
   el alumno escribirá personalmente los prompts que usó. **No escribir ni
   modificar ese archivo** salvo que el usuario lo pida explícitamente.

---

## 4. Nomenclatura del proyecto

El sufijo de este proyecto es **`paejea`** (aaa = apellido, nnn = nombre). Se
usa igual en: carpeta local, repositorio GitHub y proyecto Vercel.

- Carpeta de contenido: `docs_paejea/`
- Subcarpeta de imágenes: `docs_paejea/img_paejea/`
- Cada archivo Markdown lleva el sufijo `_paejea`.

---

## 5. Estructura de la carpeta `docs_paejea/`

Son 9 archivos Markdown, uno por sección. Estado actual: **todos vacíos**
(salvo `09`, que llena el usuario). Cada archivo se mostrará luego como una
pantalla de la web mediante un componente React.

| # | Archivo | Qué contiene | Componente React |
|---|---------|--------------|------------------|
| 1 | `01_resumen_paejea.md` | La empresa VetAmigos y su portal de clientes | `Resumen.jsx` |
| 2 | `02_sqli_paejea.md` | Inyección SQL: evidencia, por qué, CVSS, defensa | `InyeccionSQL.jsx` |
| 3 | `03_xss_paejea.md` | XSS: evidencia, por qué, CVSS, defensa | `XSS.jsx` |
| 4 | `04_comandos_paejea.md` | Inyección de comandos: ídem | `Comandos.jsx` |
| 5 | `05_activos_paejea.md` | Activos de información y riesgos del rubro | `Activos.jsx` |
| 6 | `06_matriz_paejea.md` | Matriz de riesgo (probabilidad × impacto) + mapa de calor | `Matriz.jsx` |
| 7 | `07_controles_paejea.md` | Políticas de prevención y controles de mitigación | `Controles.jsx` |
| 8 | `08_recuperacion_paejea.md` | Mejora tecnológica y plan de recuperación ante desastres | `Recuperacion.jsx` |
| 9 | `09_prompts_paejea.md` | Bitácora de uso de IA — **lo llena el usuario** | `Prompts.jsx` |

### Qué lleva cada archivo de ataque (02, 03, 04)
1. **La captura** del ataque (con el texto escrito y el resultado visibles).
2. **Por qué funciona** la vulnerabilidad (explicación clara y propia).
3. **Puntaje y severidad CVSS** (calculadora oficial: https://www.first.org/cvss/calculator/3.1).
4. **Prevención** y **control de mitigación**, en relación con VetAmigos.

### Capturas de pantalla
Van en `docs_paejea/img_paejea/` con estos nombres:
- `sqli_paejea.png`
- `xss_paejea.png`
- `comandos_paejea.png`

En el Markdown se referencian así:
`![Inyección SQL](img_paejea/sqli_paejea.png)`

> Estado actual: la carpeta `img_paejea/` está **vacía**. Las capturas las toma
> el usuario desde el laboratorio DVWA. Si una sección las necesita y no están,
> **preguntar al usuario**, no inventar imágenes ni rutas.

---

## 6. Los tres ataques (contexto del laboratorio)

Se realizan sobre **DVWA** (aplicación deliberadamente vulnerable), en nivel de
seguridad **Low**, en un entorno controlado y autorizado. Solo se usa para
aprender a **defender**. Los tres ataques comparten una misma causa raíz: la
aplicación **mezcla los datos que escribe el usuario con sus propias
instrucciones**.

| Ataque | Qué se escribe | Qué demuestra |
|--------|----------------|---------------|
| **Inyección SQL** | `' OR '1'='1` | Expone toda la base de datos de clientes |
| **XSS (Reflejado)** | `<script>alert('XSS')</script>` | Ejecuta código en el navegador de la víctima |
| **Inyección de comandos** | `127.0.0.1; cat /etc/passwd` | Toma control del servidor |

Detalle técnico completo de cada ataque (cómo funciona y cómo se previene) está
en `inf/guia_ataques_dvwa.md`. Úsalo como fuente, pero **redacta con lenguaje
sencillo** para el cliente.

---

## 7. Conceptos clave para escribir el informe

Tomados de la clase teórica (`inf/TI3034-U3-Auditoria-Seguridad-Web-S0-ES.md`):

- **Vulnerabilidad:** una debilidad del sistema (la "puerta mal cerrada").
- **Amenaza:** quién o qué puede causar daño.
- **Riesgo = Probabilidad × Impacto.** Sirve para decidir qué arreglar primero.
- **CVSS:** puntaje de gravedad de 0 a 10 (Baja 0.1–3.9 / Media 4.0–6.9 /
  Alta 7.0–8.9 / Crítica 9.0–10).
- **Activo de información:** todo lo que tiene valor y se quiere proteger (la
  base de datos de clientes, los datos de las mascotas, los datos de pago, el
  servidor, etc.).
- **Matriz de riesgo / mapa de calor:** cada falla se ubica cruzando su
  probabilidad y su impacto; rojo = atender primero, verde = puede esperar.
- **Tratamiento del riesgo:** mitigar, transferir, aceptar o evitar.
- **Prevención** (evitar que la falla exista) vs. **mitigación** (reducir el
  daño si igual ocurre). Apoyarse en marcos reconocidos: OWASP, CIS, NIST.
- **Recuperación (DR):** respaldos probados, restaurar desde copia limpia,
  notificar a afectados y autoridad, y cerrar la falla.

---

## 8. Stack técnico de la página web

Mismo stack validado en la evaluación anterior:

- **React + Vite** (la base del proyecto).
- **Tailwind CSS** para estilos (`tailwindcss`, `@tailwindcss/vite`).
- **Lucide React** para íconos (`lucide-react`).
- **GitHub** (repositorio público) + **Vercel** (despliegue automático en cada
  `push` a `main`).

### Cómo se arma la web
- Un componente `.jsx` por sección, dentro de `src/components/`.
- Cada componente toma el contenido de su Markdown correspondiente y lo muestra.
- Las capturas se incrustan dentro de la sección del ataque.
- La matriz de riesgo se representa como un **mapa de calor visual**.
- Los componentes se importan en `src/App.jsx`.

### Flujo de trabajo por sección
1. Redactar el archivo `.md` en `docs_paejea/` (con la info real, sin inventar).
2. Construir el componente en `src/components/`.
3. Verificar en local con `npm run dev`.
4. Importarlo en `src/App.jsx`.
5. `git add` → `commit` → `push` (Vercel actualiza el sitio solo).

> El historial de commits debe reflejar un proceso continuo (no un único commit
> final).

---

## 9. Cómo debe comportarse Claude en este proyecto

- **Antes de escribir contenido de una sección**, confirmar que la información
  necesaria existe o preguntársela al usuario. No completar con datos inventados.
- **Redactar siempre pensando en el cliente que no sabe de tecnología**: claro,
  simple, con ejemplos. Si un texto suena demasiado técnico, simplificarlo.
- **No tocar `09_prompts_paejea.md`** salvo pedido explícito del usuario.
- **No tomar capturas ni inventar rutas de imágenes**; esas las aporta el usuario.
- Cuando haya varias formas de hacer algo o falte un dato del negocio VetAmigos,
  **preguntar** en vez de asumir.
- Mantener la nomenclatura `paejea` en todos los archivos y rutas.

---

## 10. Material de referencia (carpeta `inf/`)

- `instrucciones_evaluacion03.md` — las reglas oficiales de la evaluación.
- `TI3034-U3-Auditoria-Seguridad-Web-S0-ES.md` — la teoría (conceptos clave).
- `guia_ataques_dvwa.md` — detalle de los 3 ataques (fuente técnica).
- `guia_01_instalacion.md` — entorno: Node, Git, VS Code, GitHub, Vercel.

> Estos archivos son **fuente de consulta**. El contenido del informe se escribe
> en `docs_paejea/`, y la web solo muestra lo que está en `docs_paejea/`.

# Activos de información y riesgos del negocio

> **Resumen rápido:** un "activo de información" es **todo lo que tiene valor para
> VetAmigos y que conviene proteger**. Antes de decidir qué falla arreglar
> primero, hay que tener claro **qué estamos cuidando**. En esta sección listamos
> esos activos, explicamos por qué importan en una veterinaria online y mostramos
> a qué ataque queda expuesto cada uno.

---

## 1. ¿Qué es un activo de información?

Es cualquier cosa valiosa que el negocio guarda o usa y que, si se pierde, se
roba o se daña, le causa un problema. No son solo "datos": también cuenta el
servidor donde vive el portal e incluso la **confianza** de los clientes.

> **La analogía:** son las cosas de valor que tendrías en tu casa (documentos,
> dinero, llaves). Antes de poner alarmas, primero piensas **qué es lo que más te
> importa proteger**. Aquí hacemos lo mismo con VetAmigos.

---

## 2. Los activos de VetAmigos

A partir de lo que el portal maneja, estos son los activos que debemos proteger:

| # | Activo | Qué es | Por qué es valioso para VetAmigos |
|---|--------|--------|-----------------------------------|
| A1 | **Base de datos de clientes** | Datos personales de las ~18.000 personas registradas (nombre, RUT, correo, teléfono, dirección) | Identifican a la persona; en malas manos sirven para estafas o suplantación |
| A2 | **Datos de las mascotas** | Ficha de salud e historial veterinario de ~25.000 mascotas | Información privada de la familia del cliente |
| A3 | **Datos de pago** | Tarjetas de crédito/débito guardadas para comprar más rápido | Su robo es **pérdida de dinero directa** para el cliente |
| A4 | **Cuentas y contraseñas de acceso** | El usuario y la clave con que cada cliente entra al portal | Son la "llave" de la cuenta: con ellas un atacante entra como si fuera el cliente |
| A5 | **El servidor y el portal** | La máquina y el programa donde funciona todo el sitio | Si cae o lo controlan, **se detiene el negocio completo** |
| A6 | **La reputación y la confianza** | El prestigio de VetAmigos ante sus clientes | Una filtración ahuyenta clientes y es muy difícil de recuperar |

> Los primeros cuatro (A1–A4) son **información**; el quinto (A5) es la
> **infraestructura** que la sostiene; el sexto (A6) es **intangible** pero
> igual de real: es lo que hace que la gente siga comprando.

---

## 3. Qué le puede pasar a cada activo

En seguridad, lo que se busca proteger de un activo son **tres cosas** (los
"tres pilares"):

- **Confidencialidad:** que solo lo vea quien debe (que no se filtre).
- **Integridad:** que no lo cambien ni lo borren sin permiso.
- **Disponibilidad:** que esté disponible cuando se necesita (que no se caiga).

Las tres debilidades que encontramos en el portal (las secciones 02, 03 y 04)
atacan justamente a estos activos. Así se cruzan:

| Activo | ¿Qué ataque lo amenaza? | Qué pasaría |
|--------|-------------------------|-------------|
| **A1 Clientes** | Inyección SQL (02) | Un atacante extrae la **lista completa** de clientes de un solo golpe |
| **A2 Mascotas** | Inyección SQL (02) | Queda expuesto el historial veterinario junto con los datos del dueño |
| **A3 Pago** | Inyección SQL (02) · Inyección de comandos (04) | Robo de tarjetas: pérdida de dinero directa y fraude |
| **A4 Cuentas/claves** | XSS (03) | El atacante **roba la sesión** de un cliente y entra como él |
| **A5 Servidor/portal** | Inyección de comandos (04) | El atacante **toma control del servidor**: puede borrar, robar todo o apagar el sitio |
| **A6 Reputación** | Los tres ataques | Cualquier filtración o caída daña la confianza y la imagen de la empresa |

> Fíjate en algo importante: la **inyección SQL** y la **inyección de comandos**
> ponen en riesgo a **muchos** activos a la vez (toda la base, el servidor
> entero), mientras que el **XSS** golpea sobre todo a **un** cliente por vez. Eso
> ya nos adelanta cuáles fallas serán las más urgentes en la matriz de riesgo.

---

## 4. Por qué esto importa en una veterinaria online

Una misma falla técnica **no pesa igual en todos los negocios**. En VetAmigos, el
peso es alto por tres motivos del rubro:

- **Maneja datos sensibles de miles de familias:** datos personales, de sus
  mascotas y, sobre todo, **medios de pago**. No es una simple tienda de folletos.
- **Todo el negocio vive en internet:** si el portal se cae o lo controlan, no hay
  "local físico" que siga funcionando. El sitio **es** la empresa.
- **La confianza es el activo más frágil:** la gente entrega los datos de su
  tarjeta y la salud de su mascota porque confía. Una filtración rompe esa
  confianza y cuesta años reconstruirla.

> **En una frase:** VetAmigos no solo vende productos para mascotas; es el
> **guardián de información personal y financiera** de miles de familias. Por eso,
> proteger estos activos no es un lujo técnico: es proteger el negocio mismo.

---

## 5. Lo que viene

Ahora que sabemos **qué proteger** (los activos) y **de qué** (los tres ataques),
el siguiente paso es ordenar las fallas de la más urgente a la menos urgente. Eso
se hace en la **matriz de riesgo** (sección 06), cruzando qué tan probable es cada
ataque con qué tan grave sería su impacto sobre estos activos.

# Recuperación: mejora tecnológica y plan ante desastres

> **Resumen rápido:** ya vimos cómo **evitar** las fallas (07). Pero en seguridad
> hay una regla de oro: hay que prepararse para **el día en que algo igual salga
> mal**. Esta sección responde a esa pregunta: si un ataque tiene éxito, ¿cómo
> vuelve VetAmigos a funcionar, protege a sus clientes y aprende de lo ocurrido?
> Eso se llama **plan de recuperación ante desastres (DR)**. Además proponemos una
> **mejora tecnológica** de fondo para que el portal nazca más seguro.

---

## 1. ¿Por qué hace falta un plan de recuperación?

Por más candados que se pongan, ningún sistema es 100% seguro. Una buena empresa
no solo intenta **que no la ataquen**, también tiene listo **qué hacer si la
atacan**, para reaccionar rápido y perder lo menos posible.

> **La analogía:** es como un plan de evacuación frente a un incendio. Lo ideal es
> que no haya incendio (prevención), pero igual tienes extintores, salidas
> marcadas y un punto de encuentro. Cuando la emergencia llega, **no se improvisa:
> se sigue el plan**.

Para VetAmigos, que vive 100% en internet, esto es vital: si el portal cae o lo
controlan, **no hay local físico** que siga funcionando. El sitio **es** la
empresa.

---

## 2. La mejora tecnológica de fondo

Antes del plan de emergencia, conviene una mejora que ataca la **raíz** de los
tres problemas. Recordemos que los tres ataques tienen la **misma causa**: el
portal **mezcla los datos del usuario con sus propias instrucciones** y se
construyó "sobre la marcha", sin pensar en seguridad.

La mejora propuesta es **rehacer el portal sobre una base segura por diseño**:

- **Usar un framework moderno y mantenido.** Las herramientas actuales de
  desarrollo ya traen, de fábrica, protección contra inyección SQL (consultas
  parametrizadas) y XSS (escapado automático). Es mucho más seguro que el código
  hecho a mano y sin revisar.
- **Separar de verdad los datos de las instrucciones.** Que el sistema nunca
  trate lo que escribe el usuario como una orden, en ninguna de sus partes.
- **Cifrar la información sensible** (datos de pago y personales), tanto guardada
  como en tránsito (HTTPS), para que un robo no sirva de nada.
- **Revisiones de seguridad periódicas:** auditar el portal cada cierto tiempo
  —como esta misma auditoría— para detectar nuevas fallas antes que un atacante.

> En una frase: en vez de tapar fugas una por una, **cambiar la cañería** por una
> que no gotee. Es la inversión más rentable a largo plazo para VetAmigos.

---

## 3. El plan de recuperación ante desastres (DR), paso a paso

Si a pesar de todo un ataque tiene éxito, este es el orden de acciones. Sirve para
cualquiera de las tres fallas (un robo de la base por inyección SQL, un servidor
tomado por inyección de comandos, o cuentas robadas por XSS):

### Paso 1 — Detectar y contener

Lo primero es **darse cuenta rápido** (gracias a los registros y la vigilancia de
la sección 07) y **frenar el daño**: aislar o desconectar el servidor afectado
para que el atacante no siga avanzando ni se propague a otros sistemas.

> Como cerrar la llave de paso del agua apenas se ve la inundación: primero se
> corta, después se limpia.

### Paso 2 — Restaurar desde una copia limpia

VetAmigos debe tener **respaldos (backups) probados** de su información y su
sistema. La clave está en dos ideas:

- **Respaldos frecuentes y guardados aparte**, para que el ataque no los alcance.
- **Restaurar desde una copia anterior y limpia**, asegurándose de que esa copia
  **no traiga ya la falla o el código del atacante** dentro.

> De nada sirve un respaldo si nunca se probó que funciona. Hay que **ensayar la
> restauración** de vez en cuando, como un simulacro.

### Paso 3 — Cerrar la falla que permitió el ataque

Antes de volver a abrir el sitio, hay que **tapar la puerta** por la que entraron,
aplicando los controles de la sección 07. Si no, el atacante volvería a entrar por
el mismo lugar.

### Paso 4 — Notificar a los afectados y a la autoridad

Si se filtraron datos de clientes, VetAmigos tiene la **responsabilidad de
avisar**:

- **A los clientes afectados**, con claridad y a tiempo, explicando qué pasó y qué
  deben hacer (por ejemplo, cambiar su contraseña o vigilar su tarjeta).
- **A las autoridades correspondientes**, según lo que exige la ley de protección
  de datos.

> Avisar a tiempo es parte de cuidar la confianza. Ocultar una filtración casi
> siempre termina peor.

### Paso 5 — Aprender y mejorar

Después de la emergencia, revisar **qué pasó y por qué**, y ajustar las medidas
para que no se repita. Cada incidente deja una lección que hace al portal más
fuerte.

---

## 4. Resumen del plan

| Paso | Acción | Para qué |
|:---:|--------|----------|
| 1 | Detectar y contener | Frenar el daño y aislar lo afectado |
| 2 | Restaurar desde copia limpia | Volver a funcionar sin traer el ataque |
| 3 | Cerrar la falla | Que no vuelvan a entrar por el mismo lugar |
| 4 | Notificar | Proteger a los clientes y cumplir la ley |
| 5 | Aprender y mejorar | Que no se repita |

---

## 5. Cierre del informe

Con esto, la auditoría de VetAmigos queda completa: se **demostraron** tres fallas
reales (02–04), se **midió** su gravedad y se **ordenaron** por urgencia (05–06),
se propusieron **medidas para prevenirlas y reducir su daño** (07) y, finalmente,
un **plan para recuperarse** si algo ocurre (08).

> **El mensaje final para VetAmigos:** la seguridad no es un producto que se
> compra una vez, sino un **hábito**. Prevenir, vigilar y estar preparado para
> reaccionar es lo que protege, a fin de cuentas, lo más valioso del negocio: la
> **confianza** de miles de familias que dejan en sus manos los datos de su
> mascota y de su tarjeta.

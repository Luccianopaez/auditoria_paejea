# VetAmigos 

## ¿Quiénes son VetAmigos?

**VetAmigos** es una **veterinaria y tienda de mascotas (petshop) que funciona
por internet**. Nació en Valparaíso, Chile, en 2019, como una pequeña clínica de
barrio, y hoy atiende a clientes de todo el país a través de su página web.

Su lema lo resume bien: *"El cuidado de tu mascota, a un clic de distancia."*

En la práctica, VetAmigos combina dos negocios en un mismo sitio:

- **La parte de veterinaria:** los clientes pueden reservar horas con un
  veterinario, agendar consultas por videollamada y llevar un registro de la
  salud de cada mascota (vacunas, controles, tratamientos).
- **La parte de tienda (petshop):** venta de alimentos, medicamentos, juguetes
  y accesorios, con despacho a domicilio en todo Chile.

---

## El portal de clientes

El corazón del negocio es su **portal de clientes**: la página web donde cada
persona inicia sesión con su usuario y contraseña para gestionar todo lo
relacionado con sus mascotas. Desde ahí, un cliente puede:

- Ver y editar sus **datos personales** (nombre, correo, teléfono, dirección de
  despacho).
- Registrar a sus **mascotas** y su ficha de salud (especie, raza, edad,
  vacunas, alergias, historial de atenciones).
- Reservar **horas con el veterinario** y comprar productos en la tienda.
- Guardar sus **medios de pago** (tarjetas) para comprar más rápido la próxima
  vez.

---

## Los datos que VetAmigos guarda

Para funcionar, el portal almacena tres grandes grupos de información, y los tres
son **delicados**:

| Tipo de información | Ejemplos | Por qué es sensible |
|---------------------|----------|---------------------|
| **Datos de clientes** | Nombre, RUT, correo, teléfono, dirección | Identifican a la persona; en malas manos sirven para estafas o suplantación |
| **Datos de mascotas** | Ficha de salud, historial veterinario | Información privada del cliente y su familia |
| **Datos de pago** | Tarjetas de crédito/débito guardadas | Su robo significa pérdida de dinero directa para el cliente |

> En pocas palabras: VetAmigos no solo vende productos para mascotas, también es
> **guardián de información personal y financiera** de miles de familias. Si esa
> información se filtra, el daño es para los clientes y para la reputación de la
> empresa.

---

## VetAmigos en números

| Dato | Valor aproximado |
|------|------------------|
| Año de fundación | 2019 |
| Sede principal | Valparaíso, Chile |
| Clientes registrados | ~18.000 |
| Mascotas en el sistema | ~25.000 |
| Pedidos al mes | ~3.500 |
| Personas en el equipo | 24 (veterinarios, soporte y logística) |

*(Cifras de una empresa ficticia, usadas como contexto para esta auditoría.)*

---

## ¿Por qué esta auditoría?

VetAmigos creció rápido y su portal se construyó "sobre la marcha". La empresa
nunca ha revisado a fondo si su sitio es **seguro** frente a personas
malintencionadas que quieran robar la información de sus clientes.

Por eso nos contrató como **auditores de seguridad**: nuestra misión es revisar
el portal en un ambiente controlado y de prueba, **buscar sus debilidades antes
de que lo haga un atacante**, medir qué tan graves son y recomendar cómo
solucionarlas.

> Una auditoría de seguridad es como llevar el auto a una revisión técnica: un
> especialista busca las fallas para arreglarlas **antes** de que provoquen un
> accidente. Eso es exactamente lo que haremos con el portal de VetAmigos en las
> siguientes secciones.

---

## Qué encontrarás en este informe

1. **Los tres ataques de prueba** que realizamos para descubrir las debilidades
   del portal (inyección SQL, XSS e inyección de comandos), con su evidencia.
2. **Los activos** (la información valiosa) que VetAmigos debe proteger.
3. **La matriz de riesgo**: un mapa de colores que ordena las fallas de la más
   urgente a la menos urgente.
4. **Las medidas recomendadas** para prevenir, reducir y recuperarse de cada
   problema.

Todo está explicado en lenguaje simple, pensando en que cualquier persona —
aunque no sea experta en tecnología — pueda entender qué está en riesgo y qué
hacer al respecto.

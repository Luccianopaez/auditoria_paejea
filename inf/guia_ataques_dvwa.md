DepartamentodeInformática—INACAPValparaíso
TI3034—FundamentosdeSeguridaddelaInformación
Docente:RubénSchnettler—Otoño2026
|     | Guía de | Ataques      | — Los            | 3 ataques | en DVWA     |
| --- | ------- | ------------ | ---------------- | --------- | ----------- |
|     | Qué     | es cada uno, | por qué funciona | y cómo    | se previene |
Objetivo: Reproducir en el entorno controlado (DVWA) los tres ataques de la evaluación
—inyecciónSQL,XSSeinyeccióndecomandos—,registrarlaevidenciaycomprender
por qué funcionan y cómo se previenen. Constituye el insumo directo del Informe A.
Causacomúndelastresvulnerabilidades
Las tres comparten un mismo origen: la aplicación no separa los datos que ingresa el
usuariodesuspropiasinstrucciones.Cuandoesaseparaciónnoexiste,unaentradadel
usuariopuedeinterpretarsecomoinstrucciónyejecutarse.EnDVWAelniveldeseguridad
sefijaenLow(sindefensas)deformadeliberada,paraevidenciarelconcepto.Laejecución
del ataque es trivial; el valor académico —y el foco de la rúbrica— reside en explicar por
| qué  | ocurre y cómo | mitigarlo. |     |     |     |
| ---- | ------------- | ---------- | --- | --- | --- |
| Paso | 0 — Acceso    | al portal  |     |     |     |
AccedaalentornoDVWAmediantelaURLproporcionadaporeldocente.Iniciesesióncon
el usuario admin y la contraseña password. En el menú DVWA Security, fije el nivel de
seguridad en Low y confirme con Submit (la configuración es por sesión del navegador).
PantalladeiniciodesesióndelDVWAdelcurso.

| Ataque 1 | — Inyección | SQL |     |
| -------- | ----------- | --- | --- |
Dónde:menúSQLInjection.Quéescribirenelcampo“UserID”: ySubmit.
’ OR ’1’=’1
|     | Trasescribir’ |     | OR ’1’=’1,DVWAdevuelvetodoslosusuarios. |
| --- | ------------- | --- | --------------------------------------- |
Quées.Labasededatosalmacenalosusuarios.Alsolicitar“elusuarioN°1”,laaplicación
formula una consulta SQL a la base. La inyección SQL consiste en insertar texto que
| altera dicha | consulta. |     |     |
| ------------ | --------- | --- | --- |
Porquéfunciona.Laaplicaciónconstruyelaconsultaconcatenandolaentradadelusua-
| rio entre | comillas: |     |     |
| --------- | --------- | --- | --- |
| # Entrada | normal:   | 1   |     |
SELECT nombre FROM users WHERE id = ’1’ → devuelve solo el usuario 1
| # Entrada | maliciosa: | ’ OR | ’1’=’1 |
| --------- | ---------- | ---- | ------ |
SELECT nombre FROM users WHERE id = ” OR ’1’=’1’ → ’1’=’1’ es siempre
| verdadero | → devuelve | todo |     |
| --------- | ---------- | ---- | --- |
La comilla cierra el dato y la expresión añade una condición siempre ver-
’ OR ’1’=’1
dadera. El motor de base de datos evalúa la condición como verdadera y devuelve todas
las filas. Analogía didáctica: equivale a solicitar el acceso bajo la condición “soy el cliente
1 o 1 es igual a 1”; como la segunda siempre se cumple, el acceso se concede en todos
los casos.
Escenarioequivalenteenunaaplicaciónreal
En cualquier formulario de inicio de sesión, buscador, filtro o URL del tipo ?id=5
que consulte la base de datos sin protección. Si el campo no se valida, un atacante
| puede | extraer la tabla | completa | de clientes. |
| ----- | ---------------- | -------- | ------------ |

Cómosepreviene
Consultas parametrizadas (prepared statements): la base recibe primero la instruc-
ción con un hueco ? y después el dato, que trata siempre como dato, nunca como
código.Secomplementavalidandoeltipodeentrada(p.ej.forzarque id seaentero).
| Es la | defensa #1. |     |     |
| ----- | ----------- | --- | --- |
Vulnerable(concatenalaentradadentrodelSQL) vs. Seguro(eldatoviajaporseparado):
// VULNERABLE
$sql = "SELECT nombre FROM users WHERE id = ’$id’"; // $id = ’ OR ’1’=’1 →
| devuelve  | TODO      |            |     |
| --------- | --------- | ---------- | --- |
| // SEGURO | (consulta | preparada) |     |
$stmt = $conn->prepare("SELECT nombre FROM users WHERE id = ?");
$stmt->bind_param("i", $id); // "i" = el dato se trata como ENTERO; el ? jamás
es SQL
| Ataque | 2 — XSS (Cross-Site | Scripting) |     |
| ------ | ------------------- | ---------- | --- |
Dónde: menú XSS (Reflected). Qué escribir en el campo del nombre:
| <script>alert(’XSS’)</script> |     |     | y Submit. |
| ----------------------------- | --- | --- | --------- |
Elcódigoinyectadoseejecutaenlapágina.Con<script>alert(’XSS’)</script>saltaunpopup.
Quées.Lapágina“XSS(Reflected)”reflejalaentradadelusuario:antelaentradaPedro,
responde “Hello Pedro”. El ataque consiste en introducir, en lugar de un nombre, una
etiqueta <script>: como la página devuelve el texto sin procesar, el navegador no lo
| representa | como texto, | sino que | lo ejecuta. |
| ---------- | ----------- | -------- | ----------- |
Por qué funciona. La aplicación inserta la entrada dentro del HTML sin sanitizarla:

| # Entrada | normal: | Pedro |     |
| --------- | ------- | ----- | --- |
→
| <p>Hola   | Pedro</p>  | muestra: Hola | Pedro    |
| --------- | ---------- | ------------- | -------- |
| # Entrada | maliciosa: | una etiqueta  | <script> |
<p>Hola <script>alert(’XSS’)</script></p> → el navegador la ejecuta
El navegador no distingue la entrada del usuario del código propio de la página. Median-
te esta vulnerabilidad, un atacante puede robar la sesión de otro usuario, redirigirlo o
presentarle un formulario fraudulento. Tipos: reflejado (viaja en la URL o respuesta), al-
macenado (queda persistido, p.ej. en un comentario) y basado en DOM. El de DVWA es
el reflejado.
Escenarioequivalenteenunaaplicaciónreal
En secciones de comentarios, chats, nombres de perfil o buscadores que muestran
“resultados para: término”. Si la aplicación no sanitiza la entrada, el código se ejecuta
| en el navegador | de  | otros usuarios. |     |
| --------------- | --- | --------------- | --- |
Cómosepreviene
Escaparlasalida(convertir < en &lt; paraqueseveacomotexto,nocomocódigo)
y aplicar una política CSP (Content Security Policy) que limite qué scripts pueden
ejecutarse.
| Ataque 3 | — Inyección | de comandos |     |
| -------- | ----------- | ----------- | --- |
Dónde: menú Command Injection. Qué escribir en el campo de IP:
| 127.0.0.1; | cat /etc/passwd | y Submit. |     |
| ---------- | --------------- | --------- | --- |
Ademásdelping,elservidormuestraelcontenidode/etc/passwd(cuentasdelsistema).
Qué es. La página “Command Injection” ejecuta un ping a una dirección IP. Con

127.0.0.1 (el propio servidor, inofensivo) se obtiene únicamente el resultado del ping.
El ataque añade ; cat /etc/passwd: el carácter ; encadena dos comandos, de modo
que el servidor ejecuta el ping y, además, lee un archivo del sistema.
Sobreelarchivo/etc/passwd
cat nomodificaarchivos:muestrasucontenido. /etc/passwd esunarchivodeLinux
que lista las cuentas de usuario del servidor. Se está accediendo a un archivo interno
| del servidor | que         | no  | debería    | ser  | visible | para el     | usuario. |
| ------------ | ----------- | --- | ---------- | ---- | ------- | ----------- | -------- |
| Por qué      | funciona.   |     |            |      |         |             |          |
| # Entrada    | normal:     |     | 127.0.0.1  |      |         |             |          |
| ping -c      | 4 127.0.0.1 |     | →          | solo | ejecuta | el ping     |          |
| # Entrada    | maliciosa:  |     | 127.0.0.1; |      | cat     | /etc/passwd |          |
ping -c 4 127.0.0.1; cat /etc/passwd → el ; encadena 2 comandos (ping y
| lectura | del | archivo) |     |     |     |     |     |
| ------- | --- | -------- | --- | --- | --- | --- | --- |
Enunaterminal,elcarácter indica“ejecutaruncomandoy,acontinuación,elsiguiente”.
;
El servidor ejecuta ambos. De este modo un atacante puede leer o eliminar archivos, o
instalar software: equivale al control del servidor. Es una de las vulnerabilidades más
críticas.
Escenarioequivalenteenunaaplicaciónreal
En cualquier función que ejecute herramientas del sistema con entrada del usuario:
ping/traceroute en un panel de administración, conversores de imágenes o PDF, ge-
| neradores | de  | respaldos, |     | entre | otros. |     |     |
| --------- | --- | ---------- | --- | ----- | ------ | --- | --- |
Cómosepreviene
No transferir la entrada del usuario directamente al sistema operativo. Emplear lis-
tas blancas (aceptar únicamente valores con formato de IP) y APIs seguras que no
| invoquen       | la terminal.  |         |                   |         |              |              |                  |
| -------------- | ------------- | ------- | ----------------- | ------- | ------------ | ------------ | ---------------- |
| Qué documentar |               | de      | cada              | ataque  | (para        | el informe)  |                  |
| Para los       | tres ataques, |         | cada              | archivo |              | .md debe     | incluir:         |
| 1. La captura  |               | (con el | payload           | y       | el resultado | visibles).   |                  |
| 2. Por qué     | funciona      |         | la vulnerabilidad |         |              | (explicación | técnica propia). |
3. El puntaje y severidad CVSS (calculadora: https://www.first.org/cvss/
calculator/3.1).
4. La prevención (3.1.4) y el control de mitigación (3.1.5), en relación con la empresa
asignada.
Ubicacióndelascapturas
Las imágenes se guardan en docs_<aaa><nnn>/img_<aaa><nnn>/ con nombres claros:
sqli_<aaa><nnn>.png, xss_<aaa><nnn>.png, comandos_<aaa><nnn>.png. En la guía de
| React | (sección | 7b) | se explica |     | cómo | incrustarlas | en el sitio. |
| ----- | -------- | --- | ---------- | --- | ---- | ------------ | ------------ |

| Implicancia | para el desarrollo | asistido | por IA |     |
| ----------- | ------------------ | -------- | ------ | --- |
Al solicitar a una herramienta de IA que conecte la aplicación con un backend con base
dedatos,laIAnosiempreincorporalaprotecciónpordefecto:confrecuenciagenera
códigovulnerable(medianteconcatenación).Porellodebesolicitarsedeformaexplícita.
| Ejemplo de | instrucción: |     |     |     |
| ---------- | ------------ | --- | --- | --- |
"Usa consultas parametrizadas (prepared statements) para todas las consultas
SQL y valida los tipos de entrada, para prevenir inyección SQL."
La herramienta de IA acelera el desarrollo, pero la responsabilidad de la seguridad re-
caeeneldesarrollador:esnecesariosaberquésolicitar yverificarloquelaherramienta
entrega. Su desconocimiento conduce a publicar aplicaciones vulnerables. Esta compe-
| tencia forma | parte del foco | de la evaluación | y de la bitácora | de IA. |
| ------------ | -------------- | ---------------- | ---------------- | ------ |
Marcoético-legal
La práctica debe realizarse únicamente sobre el DVWA del curso o sistemas propios y
autorizados. Atacar sistemas ajenos sin autorización constituye delito (Ley 21.459). Estas
técnicas se estudian con fines defensivos: el objetivo es saber prevenir y mitigar.
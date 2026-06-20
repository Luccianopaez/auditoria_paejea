DepartamentodeInformática—INACAPValparaíso
TI3034—FundamentosdeSeguridaddelaInformación
Docente:RubénSchnettler—Otoño2026
|     | Instrucciones |              | — Evaluación |            | Sumativa        | N°3 |     |
| --- | ------------- | ------------ | ------------ | ---------- | --------------- | --- | --- |
|     | Auditoría     | de seguridad | web,         | presentada | como aplicación | web |     |
En qué consiste: Actúas como auditor de seguridad de una empresa ficticia asignada.
Auditas su portal de clientes en un ambiente controlado (la aplicación deliberadamente
vulnerable DVWA): demuestras tres ataques, mides su gravedad, construyes la matriz de
riesgodelnegocioyproponesmedidasdeprevención,mitigaciónyrecuperación.Eltrabajo
se entrega como una aplicación web en React desplegada en Vercel, igual que en la
| Evaluación | 2.  |     |     |     |     |     |     |
| ---------- | --- | --- | --- | --- | --- | --- | --- |
Loimportantedeestaevaluación
El foco está en la calidad del análisis de seguridad. La presentación visual del sitio no
| es un criterio | evaluado. |     |     |     |     |     |     |
| -------------- | --------- | --- | --- | --- | --- | --- | --- |
1. Datos generales
| Asignatura: |     | TI3034—FundamentosdeSeguridaddelaInformación  |     |     |     |     |     |
| ----------- | --- | --------------------------------------------- | --- | --- | --- | --- | --- |
| Unidad:     |     | 3—EvaluacióndeVulnerabilidadesyMatrizdeRiesgo |     |     |     |     |     |
Aprendizajeesperado: 3.1—Evalúavulnerabilidadesdeseguridadenunambientecontrolado
|     |     | y propone | medidas | de prevención, | mitigación | y recuperación | prioriza- |
| --- | --- | --------- | ------- | -------------- | ---------- | -------------- | --------- |
dasmedianteunamatrizderiesgo.
| Modalidad:   |     | Individual                                  |     |     |     |     |     |
| ------------ | --- | ------------------------------------------- | --- | --- | --- | --- | --- |
| Ponderación: |     | 60%delanotafinal,endosentregasde30%cadauna. |     |     |     |     |     |
Instrumento: Dos rúbricas analíticas: rubrica_informe_a_vulnerabilidades.pdf
y rubrica_informe_b_matriz.pdf.
| 2. ¿Qué | se debe | construir? |     |     |     |     |     |
| ------- | ------- | ---------- | --- | --- | --- | --- | --- |
El producto final está formado por dos piezas integradas dentro de un mismo proyecto:
(A)Elcontenidodelinforme—unacarpeta docs_<aaa><nnn>/ conarchivosMarkdown,
uno por sección de la auditoría (resumen, los tres ataques, activos, matriz, controles,
recuperación y bitácora de IA). Aquí va el trabajo intelectual: evidencia, análisis técnico,
| CVSS, | matriz y medidas. |     |     |     |     |     |     |
| ----- | ----------------- | --- | --- | --- | --- | --- | --- |
(B) La aplicación web React — un sitio que toma ese contenido y lo presenta de forma
navegable, incrustando las capturas de cada ataque dentro de su sección y represen-
tando la matriz de riesgo como un componente visual (mapa de calor).
ContinuidadconlaEvaluación2
LamodalidadtécnicaeslamismaqueyausasteyvalidasteenlaEvaluación2(React
+Vite,GitHub,Vercel).Cambiaelcontenido:envezdeunanálisislegal,ahoraesun
| informe | de auditoría | de seguridad. |     |     |     |     |     |
| ------- | ------------ | ------------- | --- | --- | --- | --- | --- |

3. Nomenclatura del proyecto
Paraquelacorrecciónseatrazable,estostreselementosdebentenerelmismonombre:
lacarpetalocaldelproyecto,elrepositorioenGitHubyelproyectoenVercel.Elpatrónes:
auditoria_<aaa><nnn>
aaa = tres primeras letras del apellido paterno. nnn = tres primeras letras del primer
nombre.
Todo en minúsculas, sin tildes ni espacios. Ejemplo: Camila Rodríguez Pérez →
auditoria_rodcam.
4. Tu empresa asignada
El docente te asigna una empresa ficticia (banco, clínica, e-commerce, municipalidad,
etc.) en el documento asignacion_empresas_eval03.pdf. Todo tu análisis se hace “para”
esa empresa: los activos, el impacto y las medidas dependen de su rubro. Por eso cada
auditoría es distinta: la explotación técnica sobre DVWA es común, pero una misma
vulnerabilidad no implica lo mismo en un banco que en una panadería. Ese contexto de
negocio es lo que convierte un hallazgo técnico en un riesgo de negocio.
5. El laboratorio: los tres ataques
Con la URL de DVWA que entrega el docente, inicias sesión (admin / password), fijas el
nivel de seguridad en Low y realizas estos tres ataques, capturando pantalla de cada
uno:
Ataque Dónde Quéescribes Quédemuestra
InyecciónSQL SQLInjection ’ OR ’1’=’1 Expone toda la base de
datosdeclientes
XSS(Reflected) XSS(Reflected) <script>alert(’XSS’)</scrEijpectu>ta código en el na-
vegadordelavíctima
Inyecciónde CommandInjection 127.0.0.1; cat /etc/passwTdomacontroldelservidor
comandos
Marcoético-legal
Solo se ataca este entorno controlado y autorizado para la actividad. Atacar siste-
mas ajenos sin permiso es delito (Ley 21.459). Estas técnicas se aprenden con fines
defensivos.
Para el puntaje de gravedad usa la calculadora CVSS: https://www.first.org/cvss/
calculator/3.1
6. Carpeta docs_<aaa><nnn>/ — el contenido
Dentro del proyecto crea la carpeta docs_<aaa><nnn>/ con los siguientes archivos Mark-
down. Cada nombre lleva el sufijo _<aaa><nnn>. Los archivos se reparten entre las dos
entregas:

| # Archivo |     |     | Criterio | Contenido |
| --------- | --- | --- | -------- | --------- |
InformeA—AnálisisdeVulnerabilidades(30%)
1 01_resumen_<aaa><nnn>.md Transv. Tuempresaysuportaldeclientes
2 02_sqli_<aaa><nnn>.md 3.1.1/4/5 InyecciónSQL:evidencia,porqué,CVSS,defen-
sa
3 03_xss_<aaa><nnn>.md 3.1.1/4/5 XSS:evidencia,porqué,CVSS,defensa
4 04_comandos_<aaa><nnn>.md 3.1.1/4/5 Inyeccióndecomandos:ídem
InformeB—MatrizdeRiesgo(30%)
5 05_activos_<aaa><nnn>.md 3.1.2 Activos de información y riesgos según la indus-
tria
6 06_matriz_<aaa><nnn>.md 3.1.3 Matrizderiesgo(prob×impacto)+mapadecalor
7 07_controles_<aaa><nnn>.md 3.1.4/5 Políticasdeprevenciónycontrolesdemitigación
08_recuperacion_<aaa><nnn>.md
| 8   |     |     | 3.1.6 | Mejoratecnológicayplanderecuperación(DR) |
| --- | --- | --- | ----- | ---------------------------------------- |
Transversal
| 9 09_prompts_<aaa><nnn>.md |     |     | Transv. | BitácoradeusodeIA |
| -------------------------- | --- | --- | ------- | ----------------- |
Quéllevacadaarchivodeataque(02,03,04)
(1) Captura del ataque con el payload y el resultado visibles. (2) Por qué funciona
la vulnerabilidad (explicación técnica). (3) Puntaje y severidad CVSS. (4) Política de
| prevención | (3.1.4) y | control de | mitigación | (3.1.5). |
| ---------- | --------- | ---------- | ---------- | -------- |
Dónde van las capturas. Las imágenes de los ataques se guardan en una subcarpeta
img_<aaa><nnn>/ dentro de docs_<aaa><nnn>/, y se incrustan tanto en el .md como en
| el componente | React. | La estructura | completa | queda así: |
| ------------- | ------ | ------------- | -------- | ---------- |
auditoria_<aaa><nnn>/
docs_<aaa><nnn>/
| 01_resumen_<aaa><nnn>.md |     | ... | 09_prompts_<aaa><nnn>.md |     |
| ------------------------ | --- | --- | ------------------------ | --- |
img_<aaa><nnn>/
sqli_<aaa><nnn>.png
xss_<aaa><nnn>.png
comandos_<aaa><nnn>.png
| src/components/ | (un | .jsx por sección) |     |     |
| --------------- | --- | ----------------- | --- | --- |
...
Ejemplo (sufijo rodcam): docs_rodcam/img_rodcam/sqli_rodcam.png. En el archivo
02_sqli_rodcam.md laimagensereferenciacomo ![SQLi](img_rodcam/sqli_rodcam.png).
| 7. Aplicación | React — | la presentación |     |     |
| ------------- | ------- | --------------- | --- | --- |
Cada archivo se renderiza mediante un componente React en src/components/.
.md
| Sugerencia | de correspondencia: |     |     |     |
| ---------- | ------------------- | --- | --- | --- |

| ArchivoMarkdown |     |     | ComponenteReact |     | Pantalladelsitio |     |
| --------------- | --- | --- | --------------- | --- | ---------------- | --- |
01_resumen_<aaa><nnn>.md Resumen.jsx Inicio:empresaauditadaysupor-
tal
02_sqli_<aaa><nnn>.md InyeccionSQL.jsx InyecciónSQL(concaptura)
| 03_xss_<aaa><nnn>.md |     |     | XSS.jsx |     | XSS(concaptura) |     |
| -------------------- | --- | --- | ------- | --- | --------------- | --- |
04_comandos_<aaa><nnn>.md Comandos.jsx Inyeccióndecomandos(concap-
tura)
| 05_activos_<aaa><nnn>.md |     |     | Activos.jsx |     | Activosdeinformación |     |
| ------------------------ | --- | --- | ----------- | --- | -------------------- | --- |
06_matriz_<aaa><nnn>.md Matriz.jsx Matriz de riesgo (mapa de calor
visual)
07_controles_<aaa><nnn>.md Controles.jsx Prevenciónymitigación
08_recuperacion_<aaa><nnn>.md Recuperacion.jsx Recuperaciónantedesastres
| 09_prompts_<aaa><nnn>.md |     |     | Prompts.jsx |     | BitácoradeusodeIA |     |
| ------------------------ | --- | --- | ----------- | --- | ----------------- | --- |
→
Flujo por sección: redactar el .md construir el componente en src/components/ e
|              |                    | →verificarenlocal(npm |          | dev)→            |                  |      |
| ------------ | ------------------ | --------------------- | -------- | ---------------- | ---------------- | ---- |
| importarloen | src/App.jsx        |                       |          | run              | git add, commit, | push |
| (Vercel      | actualiza el sitio | automáticamente).     |          |                  |                  |      |
| 8. Uso       | de Inteligencia    | Artificial            | (foco de | esta evaluación) |                  |      |
Puedes —y se recomienda— usar IA para investigar y entender las vulnerabilida-
des y para construir los componentes React. Si la usas, debes registrarlo en
09_prompts_<aaa><nnn>.md: el prompt utilizado y la herramienta, para qué sección, qué
| aceptaste | y qué corregiste, | y una | reflexión | final. |     |     |
| --------- | ----------------- | ----- | --------- | ------ | --- | --- |
Lacalidaddelospromptsespartedelanota
Esta evaluación intenciona el uso crítico y dirigido de la IA. Un prompt genérico
(“hazme un análisis de seguridad”) no demuestra comprensión; uno que nombra tu
empresa, la vulnerabilidad concreta, el payload y la defensa esperada (p.ej. exigir
consultas parametrizadas), sí. Una IA mal dirigida puede generar código vulnera-
| ble: la     | responsabilidad | técnica | sigue siendo | tuya. |     |     |
| ----------- | --------------- | ------- | ------------ | ----- | --- | --- |
| 9. Material | de apoyo        |         |              |       |     |     |
| Guía        |                 |         | Quécubre     |       |     |     |
guia_estudiante_laboratorio.pdf LostresataquespasoapasoenDVWAyquédocumentar
decadauno.
guia_ataques_dvwa.pdf Guía a fondo de SQL Injection, XSS e inyección de co-
mandos,concapturasreales.
guia_01_instalacion.pdf (Eval 02, vigente) Node.js, Git, VS Code, cuenta GitHub,
proyectoReactydespliegueenVercel.
guia_02_git_github.pdf (Eval 02, vigente) Ciclo pull/add/commit/push para
trabajarentreclaseycasa.
guia_03_react_ia.pdf (Eval 02, vigente) Estructura React, Tailwind, agente Co-
pilotycreacióndecomponentes.
LasguíasdeentornodelaEvaluación2siguenvigentes:elstacktécnicoeselmismo.Siyatienes
tuentornomontado,puedesreutilizarlo.

| 10. Forma | de entrega |     |     |     |
| --------- | ---------- | --- | --- | --- |
La evaluación tiene dos hitos. En cada uno envías dos URL públicas por el medio que
| indique el docente: |     |     |     |     |
| ------------------- | --- | --- | --- | --- |
1. Repositorio GitHub: https://github.com/<usuario>/auditoria_<aaa><nnn>
| 2. Sitio en | Vercel: https://auditoria-<aaa><nnn>.vercel.app |     |     |     |
| ----------- | ----------------------------------------------- | --- | --- | --- |
Las fechas de cada entrega las indica el docente según tu sección.
Verificaciónpreviaacadaentrega
| El repositorio | es público | (se abre | sin sesión iniciada). |     |
| -------------- | ---------- | -------- | --------------------- | --- |
Los archivos .md de la entrega tienen contenido (no vacíos) y el sufijo correcto.
El sitio en Vercel carga y muestra las secciones implementadas, con las capturas
visibles.
El historial de commits refleja un proceso continuo (no un único commit final).
| 11. Resumen | de aspectos | evaluados |     |     |
| ----------- | ----------- | --------- | --- | --- |
Cada entrega tiene su propia rúbrica (documentos adjuntos). Pesos orientativos:
| InformeA—Vulnerabilidades(30%) |     |     | InformeB—MatrizdeRiesgo(30%)       |     |
| ------------------------------ | --- | --- | ---------------------------------- | --- |
| Evidenciadelos3ataques         |     |     | 30% Activosyriesgosporindustria    | 20% |
| ExplicacióntécnicayCVSS        |     |     | 25% Matrizymapadecalor             | 25% |
| Políticasdeprevención          |     |     | 15% Priorización                   | 10% |
| Controlesdemitigación          |     |     | 15% Prevención+mitigación          | 25% |
| BitácoradeIA                   |     |     | 10% Mejoratecnológicayrecuperación | 15% |
| RepositorioysitioVercel        |     |     | 5% Entregaweb(repoyVercel)         | 5%  |
Los descriptores por nivel de logro están en rubrica_informe_a_vulnerabilidades.pdf y
rubrica_informe_b_matriz.pdf.
# Prompt para contextualizar y crear CLAUDE.md

Necesito realizar la documentacion para una
  evaluacion de mi universidad, analiza @inf\ donde te
  deje las 4 instrucciones en formato markdown,
  analizalas y genera el CLAUDE.md, detalles a tener
  en cuenta que debes incluir en claude.md: Toda
  informacion que luego se utilice para crear la
  pagina web, tiene que venir desde la carpeta
  @docs_paejea\ , no inventar la informacion, si
  requiere mejorar o buscar informacion, tiene que
  preguntar, utilizar lenguaje no tecnico, teniendo en
  cuenta que sera revisado por un cliente ficticio
  que no entiende sobre el tema, tiene que ser facil
  de entender. En el md 09, yo mismo incluire los
  prompts que se utilizaran. Mi tema a analizar es:
  E18 VetAmigos Veterinaria / petshop
    online
    Clientes, mascotas, datos de pago

# Definir a la IA que tiene que seguir siempre las instrucciones de CLAUDE.md

 Recuerda que en todo momento antes de ejecutar cada instruccion, lee @CLAUDE.md, siguiendo las instrucciones que se especifican ahi.

# Creacion de 01_resumen_paejea.md

 Realiza el @docs_paejea/01_resumen_paejea.md , El resumen de la empresa VetAmigos, una veterinaria / petshop online que contiene un portal clientes, mascotas y metodos de pago, para entender, inventala tu ya que es una simulacion pero con datos coherentes y reales.

# Resultado calculadora  CVSS

 Hice el calculo de cada ataque en CVSS 3.1 Calculator, estos son los resultados e incluyelos en CLAUDE.md para luego tenerlos a mano al crear la documentacion, SQL : 9.8, XSS(Reflejado) : 6.1, Comandos : 10.0

# Creacion de 02_sqli_paejea.md
 realiza la el @docs_paejea/02_sqli_paejea.md , en @docs_paejea/img_paejea/sqli_paejea.png esta la captura del ataque, en @inf/instrucciones_evaluacion03.md tienes las instrucciones de la evaluacion , siguelas paso a paso sin inventar informacion sin preguntarme, se claro, en @CLAUDE.md estan las reglas mas claras

# Creacion de componentes y archivos vacios

 crea los componentes solicitados en @inf/instrucciones_evaluacion03.md , los mismos nombres que se soliitan en la evaluacion, no los rellenes, solo crea los archivos sin nada dentro.

# Cambiar la base del proyecto TS a JS

 La evaluacion solicita explicitamente que sea en Js, actualmente se esta usando TS, migrala a Js.

 # Redactar @03_xss_paejea.md

 redacta el @docs_paejea/03_xss_paejea.md, lo mismo que @docs_paejea/02_sqli_paejea.md en temas de instrucciones, @docs_paejea/img_paejea/xss_paejea.png , la evidencia

# Redactar @04_comandos_paejea.md

  realiza el @docs_paejea/04_comandos_paejea.md , en @docs_paejea/img_paejea/comandos_paejea.png esta la captura del ataque, en @inf/instrucciones_evaluacion03.md tienes las instrucciones de la evaluacion , siguelas paso a paso sin inventar informacion sin preguntarme, se claro, en @CLAUDE.md estan las reglas mas claras. Mantene la misma estructura que @docs_paejea/03_xss_paejea.md y @docs_paejea/02_sqli_paejea.md

# Redactar @05_activos_paejea.md

  realiza el @docs_paejea/05_activos_paejea.md , los activos de informacion de VetAmigos y sus riesgos segun el rubro, usa de base @docs_paejea/01_resumen_paejea.md y los ataques 02, 03 y 04 , en @inf/instrucciones_evaluacion03.md tienes las instrucciones de la evaluacion , siguelas paso a paso sin inventar informacion sin preguntarme, se claro, en @CLAUDE.md estan las reglas mas claras

# Redactar @06_matriz_paejea.md
 realiza el @docs_paejea/06_matriz_paejea.md , la matriz de riesgo (probabilidad × impacto) con su mapa de calor, usa de base los activos del @docs_paejea/05_activos_paejea.md y los tres ataques 02, 03 y 04 con sus puntajes CVSS, ordena las fallas de la mas urgente a la menos urgente, en @inf/instrucciones_evaluacion03.md tienes las instrucciones de la evaluacion , siguelas paso a paso sin inventar informacion sin preguntarme, se claro, en @CLAUDE.md estan las reglas mas claras

# Redactar @07_controles_paejea.md
 realiza el @docs_paejea/07_controles_paejea.md, las politicas de prevencion y los controles de mitigacion para cada falla, usa de base el orden de prioridad del @docs_paejea/06_matriz_paejea.md y las defensas ya escritas en los ataques 02, 03 y 04, en @inf/instrucciones_evaluacion03.md tienes las instrucciones de la evaluacion, siguelas paso a paso sin inventar informacion sin preguntarme, se claro, en @CLAUDE.md estan las reglas mas claras
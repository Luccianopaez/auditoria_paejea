DepartamentodeInformática—INACAPValparaíso
TI3034—FundamentosdeSeguridaddelaInformación
Docente:RubénSchnettler—Otoño2026
| Guía |     | 1 — | Preparación  |     |              |     | del Equipo | y         | del Entorno |
| ---- | --- | --- | ------------ | --- | ------------ | --- | ---------- | --------- | ----------- |
|      |     |     | Instalación, |     | repositorio, |     | despliegue | y agentes | IA          |
Objetivo: Al finalizar esta guía, cada estudiante dispondrá de un entorno de desarrollo
funcional con Node.js, Git y VS Code; un proyecto React inicial; un repositorio en GitHub
bajo nomenclatura estándar; un despliegue continuo en Vercel; y acceso a GitHub Copilot
| mediante | el GitHub |     | Student | Developer |     | Pack. |     |     |     |
| -------- | --------- | --- | ------- | --------- | --- | ----- | --- | --- | --- |
Nomenclaturaobligatoriadelproyecto
Para que la corrección sea trazable, todos los nombres (carpeta del proyecto, repositorio
| en GitHub | y proyecto |     | en  | Vercel) | deben | seguir | el mismo | patrón: |     |
| --------- | ---------- | --- | --- | ------- | ----- | ------ | -------- | ------- | --- |
auditoria_<aaa><nnn>
| aaa = tres | primeras      |     | letras | del apellido |              | paterno |                    |     |     |
| ---------- | ------------- | --- | ------ | ------------ | ------------ | ------- | ------------------ | --- | --- |
| nnn =      | tres primeras |     | letras | del          | primer       | nombre  |                    |     |     |
| Todo en    | minúsculas,   |     | sin    | tildes       | ni espacios. |         |                    |     |     |
| Ejemplo:   | estudiante    |     | Camila | Rodríguez    |              | Pérez   | → auditoria_rodcam |     |     |
Este mismo nombre se usará para: (1) la carpeta local del proyecto, (2) el repositorio en
| GitHub,      | y (3) | el proyecto |     | en Vercel. |     |     |     |     |     |
| ------------ | ----- | ----------- | --- | ---------- | --- | --- | --- | --- | --- |
| Herramientas |       | requeridas  |     |            |     |     |     |     |     |
| Herramienta  |       | Descripción |     |            |     |     |     |     |     |
Node.js MotordeejecucióndeJavaScript.Incluyenpm(gestordepaquetes).
| Git    |     | Sistemadecontroldeversionesdistribuido.            |     |     |     |     |     |     |     |
| ------ | --- | -------------------------------------------------- | --- | --- | --- | --- | --- | --- | --- |
| VSCode |     | Editordecódigofuente.                              |     |     |     |     |     |     |     |
| GitHub |     | PlataformadealojamientoderepositoriosGit.          |     |     |     |     |     |     |     |
| Vercel |     | Plataformadedesplieguecontinuoparaaplicacionesweb. |     |     |     |     |     |     |     |
GitHubCopilot AsistenteIAintegradoaVSCode(gratuitovíaGitHubStudent).
| Paso 1       | — Instalar |                    | Node.js |           |          |                |              |     |     |
| ------------ | ---------- | ------------------ | ------- | --------- | -------- | -------------- | ------------ | --- | --- |
| 1. Acceder   | a          | https://nodejs.org |         |           |          |                |              |     |     |
| 2. Descargar |            | la versión         |         | LTS (Long |          | Term Support). |              |     |     |
| 3. Ejecutar  | el         | instalador         |         | con las   | opciones |                | por defecto. |     |     |
| 4. Verificar | la         | instalación        |         | abriendo  | una      | terminal:      |              |     |     |
node –version
npm –version

Terminalsegúnsistemaoperativo
Windows: Buscar “Símbolo del sistema” o “PowerShell” en el menú inicio.
| Mac:   | Abrir la aplicación |     | “Terminal” | desde | Aplicaciones | > Utilidades. |
| ------ | ------------------- | --- | ---------- | ----- | ------------ | ------------- |
| Paso 2 | — Instalar          | Git |            |       |              |               |
Windows: Descargar desde https://git-scm.com/download/win e instalar con opciones
por defecto.
Mac: Generalmente preinstalado. De no estarlo, ejecutar xcode-select –install.
Verificar:
git –version
IdentidaddeGit
La configuración de user.name y user.email se realizará en el Paso 6, al efectuar el
primer commit, ya que requiere disponer previamente del nombre de usuario y correo
| registrados  | en GitHub.                      |        |           |          |              |     |
| ------------ | ------------------------------- | ------ | --------- | -------- | ------------ | --- |
| Paso 3       | — Instalar                      | Visual | Studio    | Code     |              |     |
| 1. Acceder   | a https://code.visualstudio.com |        |           |          |              |     |
| 2. Descargar | e instalar                      | con    | las       | opciones | por defecto. |     |
| Paso 4       | — Crear cuenta                  |        | en GitHub | (uso     | profesional) |     |
| 1. Acceder   | a https://github.com            |        |           |          |              |     |
2. Registrarse utilizando un correo personal de uso permanente (Gmail, Outlook u
otro).
| 3. Verificar | la dirección | de     | correo     | electrónico. |           |     |
| ------------ | ------------ | ------ | ---------- | ------------ | --------- | --- |
| 4. Tomar     | nota del     | nombre | de usuario |              | asignado. |     |
Importante
No utilizar el correo @inacapmail.cl para registrar la cuenta GitHub. Dicho correo se
emplearámásadelante(Paso9)únicamentecomoevidenciadecalidaddeestudiante
| al activar | el GitHub | Student | Developer |     | Pack. |     |
| ---------- | --------- | ------- | --------- | --- | ----- | --- |
Elnombredeusuariocomoportafolioprofesional
GitHub es la principal carta de presentación en el área TI. El username elegido en
estemomentoprobablementeseutilizarádurantetodalavidaprofesionalyaparecerá
| en cada | repositorio, | commit | y pull | request | realizado. |     |
| ------- | ------------ | ------ | ------ | ------- | ---------- | --- |
Recomendaciones:
Usar una variante del nombre real (ej: crodriguezp, camila-rodriguez).
Evitar apodos, números aleatorios o referencias personales (ej: xXgamerXx2007).
Mantener el mismo username de forma consistente en plataformas profesionales.

Paso 5 — Crear el proyecto React con Vite
Trabajaremos siempre en una carpeta ubicada en el directorio raíz del disco para evitar
rutas largas y problemas de permisos.
Windows: ubicarse en C:\
Mac/Linux: ubicarse en el directorio personal (~/).
cd C:\
Crear el proyecto React con Vite (reemplazar el nombre por el correspondiente según la
nomenclatura indicada al inicio):
npm create vite@latest auditoria_rodcam – –template react
Ingresar al directorio del proyecto e instalar las dependencias base:
cd auditoria_rodcam
npm install
Iniciar el servidor de desarrollo para verificar que todo funciona:
npm run dev
El sistema indicará una URL local (por defecto http://localhost:5173/). Abrirla en el
navegador para confirmar que la aplicación carga correctamente. Detener el servidor con
Ctrl+C.
AbrirlacarpetadelproyectoenVSCode(desdelamismaterminal,dentrodelacarpeta
del proyecto):
code .
Sielcomandocodenoesreconocido
Abrir VS Code manualmente y, dentro del editor, ejecutar (Ctrl+Shift+P) la opción
“Shell Command: Install ’code’ command in PATH”. Cerrar y reabrir la terminal.
Paso 6 — Crear el repositorio en GitHub y subir el proyecto
Primero, en GitHub (desde el navegador):
1. Acceder a https://github.com/new
2. En Repository name, escribir el mismo nombre del proyecto local (ej:
auditoria_rodcam).
3. Seleccionar visibilidad Public.
4. No marcar las opciones “Add a README”, “Add .gitignore” ni “Choose a license”.
5. Presionar Create repository.
Luego, configurar la identidad de Git (una sola vez por equipo). Se utiliza el username
de GitHub y el correo personal con el que se registró la cuenta:
git config –global user.name "USUARIO_GITHUB"
git config –global user.email "correo@personal.com"

InicializarelrepositoriolocalypublicarenGitHub(enlaterminal,dentrodelacarpeta
| del proyecto | en  | VS Code): |     |     |     |     |     |     |
| ------------ | --- | --------- | --- | --- | --- | --- | --- | --- |
git init
| git add    | .   |           |         |      |          |     |     |     |
| ---------- | --- | --------- | ------- | ---- | -------- | --- | --- | --- |
| git commit | -m  | "Proyecto | inicial | Vite | + React" |     |     |     |
| git branch | -M  | main      |         |      |          |     |     |     |
git remote add origin https://github.com/USUARIO_GITHUB/auditoria_<aaa><nnn>.git
| git push   | -u origin       |     | main     |               |        |            |                      |        |
| ---------- | --------------- | --- | -------- | ------------- | ------ | ---------- | -------------------- | ------ |
|            | USUARIO_GITHUB  |     |          |               |        |            | auditoria_<aaa><nnn> |        |
| Reemplazar |                 |     |          | por el        | nombre | de usuario | y                    | por el |
| nombre     | del repositorio |     | según la | nomenclatura. |        |            |                      |        |
Refrescar la página del repositorio en GitHub: el código debe aparecer publicado.
Autenticaciónalhacerelprimerpush
La primera vez que se ejecute git push, GitHub solicitará autenticarse. En Windows
se abrirá el “Git Credential Manager” que permite iniciar sesión vía navegador. Una
vez autorizado, las credenciales quedarán guardadas y no se solicitarán nuevamente
| en ese         | equipo.              |              |           |            |                |     |            |     |
| -------------- | -------------------- | ------------ | --------- | ---------- | -------------- | --- | ---------- | --- |
| Paso 7         | — Desplegar          |              | en Vercel |            |                |     |            |     |
| 1. Acceder     | a https://vercel.com |              |           |            |                |     |            |     |
| 2. Registrarse |                      | con Continue | with      | GitHub     | y autorizar    |     | el acceso. |     |
| 3. Seleccionar |                      | “Add New...” | →         | “Project”. |                |     |            |     |
| 4. Importar    | el repositorio       |              | creado    | en el      | paso anterior. |     |            |     |
5. EnProjectName,mantenerelmismonombredelrepositorio(auditoria_<aaa><nnn>).
| 6. En        | Framework | Preset, | seleccionar |     | Vite. |     |     |     |
| ------------ | --------- | ------- | ----------- | --- | ----- | --- | --- | --- |
| 7. Presionar | Deploy.   |         |             |     |       |     |     |     |
Al finalizar, Vercel asignará una URL pública. Cada git push a la rama main re-
| desplegará | el sitio | automáticamente. |        |     |       |     |     |     |
| ---------- | -------- | ---------------- | ------ | --- | ----- | --- | --- | --- |
| Paso 8     | — Ciclo  | de trabajo       | (clase | ↔   | casa) |     |     |     |
Este ciclo se repetirá durante toda la evaluación. Permite trabajar en el laboratorio, conti-
| nuar en | casa, y | volver | a clase sin | perder | cambios. |     |     |     |
| ------- | ------- | ------ | ----------- | ------ | -------- | --- | --- | --- |
(A) Llegar a un PC nuevo (laboratorio o casa) — clonar el repositorio:
cd C:\
git clone https://github.com/USUARIO_GITHUB/auditoria_<aaa><nnn>.git
cd auditoria_<aaa><nnn>
npm install
code .
| (B) Antes   | de empezar |         | a trabajar | —   | bajar lo | último       | de GitHub: |     |
| ----------- | ---------- | ------- | ---------- | --- | -------- | ------------ | ---------- | --- |
| git pull    | origin     | main    |            |     |          |              |            |     |
| (C) Después | de         | avanzar | — guardar  |     | y subir  | los cambios: |            |     |

| git add    | .      |             |      |             |     |     |         |     |     |     |     |
| ---------- | ------ | ----------- | ---- | ----------- | --- | --- | ------- | --- | --- | --- | --- |
| git commit |        | -m "Mensaje |      | descriptivo |     | del | avance" |     |     |     |     |
| git push   | origin |             | main |             |     |     |         |     |     |     |     |
Notasimportantes
Elcomando git branch -M main soloseejecutaunavez,alcrearelrepo(Paso6).
| No  | se repite | en  | cada | commit. |     |     |     |     |          |     |     |
| --- | --------- | --- | ---- | ------- | --- | --- | --- | --- | -------- | --- | --- |
|     |           |     |      |         |     |     |     |     | git push |     |     |
Si se trabaja en distintos PC el mismo día, hacer antes de cerrar y
| git    | pull       |           |      |              |             |            |                  |     |     |     |     |
| ------ | ---------- | --------- | ---- | ------------ | ----------- | ---------- | ---------------- | --- | --- | --- | --- |
|        |            | al abrir, | para | evitar       | conflictos. |            |                  |     |     |     |     |
|        | git        | push      | main |              |             |            |                  |     |     |     |     |
| Cada   |            |           | a    | re-despliega |             | Vercel     | automáticamente. |     |     |     |     |
| Paso 9 | — Trabajar |           | con  | agentes      | IA          | (opcional, | recomendado)     |     |     |     |     |
El uso de IA en esta evaluación es opcional; este paso prepara las herramientas para
quienes opten por utilizarla. La activación del GitHub Student Developer Pack se reco-
miendaencualquiercaso,yaqueofrecemúltiplesbeneficiosparaestudiantesmásalláde
Copilot.
| (A) Activar  | GitHub |                                   | Student   | Developer |           | Pack   | (gratuito): |      |     |     |     |
| ------------ | ------ | --------------------------------- | --------- | --------- | --------- | ------ | ----------- | ---- | --- | --- | --- |
| 1. Acceder   | a      | https://education.github.com/pack |           |           |           |        |             |      |     |     |     |
| 2. Presionar |        | Sign                              | up for    | Student   | Developer |        | Pack.       |      |     |     |     |
| 3. Iniciar   | sesión | con                               | la cuenta |           | GitHub    | creada | en el       | Paso | 4.  |     |     |
4. Completar el formulario seleccionando INACAP como institución.
5. En el campo School-issued email address, ingresar el correo institucional
(@inacapmail.cl).
|             |     |              | Este | correo | se     | utiliza  | únicamente |           | como evidencia | de calidad | de  |
| ----------- | --- | ------------ | ---- | ------ | ------ | -------- | ---------- | --------- | -------------- | ---------- | --- |
| estudiante; |     | no reemplaza |      | el     | correo | personal | de         | la cuenta | GitHub.        |            |     |
6. Adjuntarevidenciaadicionalsisesolicita:fotodelTIE(carnetINACAP)ocertificadode
| alumno     | regular. |              |     |        |         |     |            |        |     |     |     |
| ---------- | -------- | ------------ | --- | ------ | ------- | --- | ---------- | ------ | --- | --- | --- |
| 7. Esperar | la       | verificación |     | (entre | minutos | y   | unos pocos | días). |     |     |     |
Unavezaprobado,lacuentadispondrádeaccesogratuitoaGitHubCopilotyamúltiples
| beneficios  | para     | estudiantes. |            |     |       |       |     |     |     |     |     |
| ----------- | -------- | ------------ | ---------- | --- | ----- | ----- | --- | --- | --- | --- | --- |
| (B) Iniciar | sesión   |              | con GitHub |     | en VS | Code: |     |     |     |     |     |
| 1. Abrir    | VS Code. |              |            |     |       |       |     |     |     |     |     |
2. En la barra lateral inferior izquierda, hacer clic en el ícono de usuario (Accounts).
| 3. Seleccionar |        | Sign | in with | GitHub |          | y autorizar | en  | el navegador. |     |     |     |
| -------------- | ------ | ---- | ------- | ------ | -------- | ----------- | --- | ------------- | --- | --- | --- |
| (C) Activar    | GitHub |      | Copilot | en     | VS Code: |             |     |               |     |     |     |
1. VerificarlapresenciadelasextensionesGitHubCopilotyGitHubCopilotChat(sue-
len venir preinstaladas en versiones recientes de VS Code; de no estarlo, instalarlas
| desde | el panel | de  | Extensiones). |     |     |     |     |     |     |     |     |
| ----- | -------- | --- | ------------- | --- | --- | --- | --- | --- | --- | --- | --- |
2. Una vez aprobado el Student Pack, Copilot quedará activo automáticamente al iniciar
sesión.
3. Verificar el ícono de Copilot en la esquina inferior derecha del editor.

4. Abrir el panel de chat (Ctrl+Alt+I) para interactuar con el agente IA.
SobreelusodeIAeneldesarrollo
El uso de asistentes IA forma parte del flujo de trabajo profesional actual. Cuando
se utiliza, el agente cumple un rol de apoyo: la habilidad clave es dirigirlo, validar
lo que produce y comprender el código resultante. En la Guía 3 se detalla cómo
aprovechar Copilot durante el desarrollo y cómo registrar los prompts utilizados.
| Paso 10 | — Instalar | dependencias |     | de diseño | (Tailwind | y Lucide) |     |
| ------- | ---------- | ------------ | --- | --------- | --------- | --------- | --- |
Estas dos librerías se utilizarán en la Guía 3 para construir la interfaz de la aplicación.
Se instalan al final porque suelen presentar problemas de versiones y compatibili-
dad,especialmenteTailwind,cuyasversionesrecientesrequierenNode.js20+yunplugin
específico para Vite. Si la instalación falla, es momento ideal para apoyarse en GitHub
| Copilot | (activado | en el | Paso | 9) para diagnosticar | el  | error. |     |
| ------- | --------- | ----- | ---- | -------------------- | --- | ------ | --- |
(A)TailwindCSS—frameworkdeutilidadesCSSquepermiteaplicarestilosdirectamente
desdeelJSXmedianteclasespredefinidas(ej: text-center, bg-red-500),sinnecesidad
| de escribir | hojas | de estilo   | personalizadas.   |     |     |     |     |
| ----------- | ----- | ----------- | ----------------- | --- | --- | --- | --- |
| npm install |       | tailwindcss | @tailwindcss/vite |     |     |     |     |
(B)LucideReact—bibliotecadeíconosSVGmodernosyconsistentesparaReact.Cada
ícono se importa como un componente (ej: <Shield />, <FileText />).
| npm install |     | lucide-react |     |     |     |     |     |
| ----------- | --- | ------------ | --- | --- | --- | --- | --- |
LainstalacióndeTailwindnosiempreesfluida
Pueden aparecer errores como Could not resolve "@tailwindcss/vite" o conflictos
| peer | dependencies. |     |     |     |     |     |     |
| ---- | ------------- | --- | --- | --- | --- | --- | --- |
de Estos casos se abordan en detalle en la Guía 3 (sección de
troubleshooting). Si surge un error en este punto, registrarlo y continuar; no es blo-
| queante | para | finalizar | la Guía | 1.  |     |     |     |
| ------- | ---- | --------- | ------- | --- | --- | --- | --- |
La configuración detallada de ambas librerías (plugin de Vite, importación de estilos en
index.css,
|           | primer   | componente |            | con íconos)    | se aborda | en la Guía | 3.  |
| --------- | -------- | ---------- | ---------- | -------------- | --------- | ---------- | --- |
| Resultado | esperado | al         | finalizar  | esta guía:     |           |            |     |
| Node.js,  | Git      | y VS Code  | instalados | y verificados. |           |            |     |
Proyecto React funcional bajo la nomenclatura auditoria_<aaa><nnn>.
Repositorio público en GitHub con el primer commit y push realizados.
| Despliegue |     | continuo | activo | en Vercel. |     |     |     |
| ---------- | --- | -------- | ------ | ---------- | --- | --- | --- |
Ciclo pull → trabajar → add → commit → push comprendido y ensayado.
GitHub Copilot habilitado vía GitHub Student Developer Pack (en proceso o activo).
# Modelos Computacionales de Gestión Administrativa

Este es el segundo parcial de la materia MCGA de la Facultad de Sistemas de la UAI

Alumno: **Lucas Boasso**

## Consignas

# Desarrollar una aplicación web que cumpla con los siguientes requisitos:
- Debe estar desarrollada con React utilizando el CLI de create-react-app.
- Contar con una lista de recursos siguiendo la lógica de un ABM.
- Debe contar con una librería para el manejo de formularios. (sugerencia final-form)
- Debe contar con un layout, el cual debe contener:
- Header
- NavBar (barra de navegación)
- Body o contenido
- Footer
- Debe contar con más de 1 ruta navegable.
- La app debe tener AL MENOS 2 pantallas:
- Home: Esta debe contar con los nombres de los integrantes y el nombre de la
aplicación. Es básicamente para poder probar el ruteo de la aplicación.
○ Recurso: en esta pantalla deberán mostrar la lista de recursos con la lógica del
AMB (si trabajan solos, solo deberán tener home y la del recurso trabajado) para
poder evidenciar la navegación dentro de la app.
- Debe contar con componentes tanto para el Header, Body y Footer, como también un
componente para la tabla. A su vez, estos componentes deben utilizar componentes
compartidos, como ser: botones, inputs, modal etc. Estos componentes deben contar
con sus archivos .css, preferentemente utilizando CSS modules.
- Debe contar con formularios a la hora de realizar un POST, un DELETE o un UPDATE
de un nuevo recurso a la lista.
- Debe contar con modals cuando se solicite agregar, eliminar o modificar un recurso a la
lista. Dentro de los modals se deberá mostrar el formulario y/o el mensaje de
confirmación de eliminación o actualización de un recurso.
- Cada formulario debe contar con las validaciones correspondientes para evitar agregar
nuevos recursos con datos erróneos o sin datos.
- Debe ser posible realizar las diferentes request (GET, POST, PUT, DELETE) desde el
ABM de cada recurso
- Debe contar con un archivo donde se haga la configuración inicial del store de Redux.
- Debe contar con un archivo de actions por cada recurso.
- Debe contar con un archivo de types (constantes) para las actions.
- Debe contar con el uso de action creators utilizando la librería Redux Thunk, los cuales
- Debe contar con un reducer por cada recurso y un rootReducer.
son necesarios para realizar la conexión del FE con el BE. Para esto, deberán utilizar la
API ya realizada para el primer parcial.
- El proyecto del servidor debe estar subido a un repositorio de Github a nombre del
alumno (o uno de los alumnos del grupo)
- Debe contar con un readme con los pasos a seguir para poder ejecutar correctamente la
aplicación, URL del repositorio y nombre del alumno.
- El repositorio debe contener código prolijo, segmentado en commits.
- En caso de trabajar en grupo, todos los integrantes deberán contar con commits a su
nombre, caso contrario no se podrá considerar que ese alumno haya trabajado en el
proyecto.

## Esquema de la coleccion

Se trabaja con una API creada en el primer parcial con una coleccion de productos el cual tiene el siguiente esquema de ejemplo en formato JSON:

>{
>    "codigo": 891238,
>    "nombre": "Lata de atun",
>    "marca": "La Campagnola",
>    "precio": 167,
>    "descripcion": "Lata de lomo de atun",
>    "stock": 50
>}

## Comandos para ejecutar la aplicacion

> - npm install
> - npm start
> - Direccion local: http://localhost:3000

## App desplegada en Vercel

- Direccion: https://segundoparcialmcga-axi3wjpim-lucasboassos-projects.vercel.app/

## API utilizada

- https://primerparcialmcga-k488iyp05-lucasboassos-projects.vercel.app/api/productos
# ListadotareasApp

# clonar repositorio
Correr el comando "git clone https://github.com/seba161189/listadotareas.git"

# Requerimientos para poder levantar el proyecto

Es necesario tener instalado Node.js con una version compatible con angular 18

# Instalar dependencias

Correr `npm install` para instalar dependencias del proyecto.

# Angular Cli

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Servidor de desarrollo local

Correr `ng serve` para correr el proyecto localmente. Navegar a `http://localhost:4200/`.


## Build

Correr `ng build` para buildear el proyecto y que los archivos queden en la carpeta /dist.

## Correr Tests Unitarios

Correr `ng test` para ejecutar los test con [Karma](https://karma-runner.github.io).


# Documentacion del proyecto
El proyecto utiliza la libreria de angular Material, e incorpora Material theme pre cargado de color azure-blue.
Cuenta con un componente principal listado-tareas, el cual contiene un input para ingresar la tarea, un boton para agregar la tarea y un listado debajo donde irán apareciendo las tareas nuevas agregadas.
Las tareas nuevas contienen un checkbox para marcar si la tarea fue completada, tambien un botón para eliminar la tarea y un botón para editar la misma.

Al seleccionar el boton editar sobre una tarea se abrirá un popup con la tarea seleccionada para su edición.

Dentro del popup se puede cancelar la accion como guardar la modificación.

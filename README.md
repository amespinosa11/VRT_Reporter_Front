# VRT_Reporter_Front

Esta aplicación generar un reporte de los cambios visuales de la aplacion [VTR Color Pallete](https://amespinosa11.github.io/VRT_colorPallete/).
Esta funciona gracias a un script que automatiza pruebas con Cypress y Resemble.js para poder obtener los resultados. Esta implementación se encuentra en el siguiente [repositorio](https://github.com/amespinosa11/VRT_Reporter_Back).

## Dashboard
![alt-text](https://github.com/amespinosa11/VRT_Reporter_Front/blob/master/images/Dashboard.PNG)

Para generar un reporte se debe dar click en el botón "Generar Reporte". Es importante recordar que es necesario tener corriendo el script de automatización para poder probar.
A continuación se muestra un ejemplo de generación de reportes.


![alt-text](https://github.com/amespinosa11/VRT_Reporter_Front/blob/master/images/Dashboard.gif)

## Preguntas
* ¿Ve usted algún problema con los screenshots tomados por Cypress al intentar hacer Visual Regression Testing ?

Al tomar ciertos screenshots con Cypress no se puede ocupar toda la pantalla por lo que solo se pueden realizar comparaciones con los componentes. Además sería bueno comparar la cantidad de los pixeles proporcionados por estas imagenes para obtener mejores resultados a la hora de realizar las comparaciones.

* ¿Qué información puedo obtener de una imagen al usar resembleJS y que significado tiene cada uno de los componentes de la respuesta?
    
 Se pueden obtener los valores RGBA de la imagen, además de los blancos, negros y brillo de esta.

* ¿Qué información puedo obtener al comparar dos imagenes?

Se obtiene el procentaje en las diferencias en las imagenes, si tienen las mismas dimensiones y sus diferencias, y la url de las imagenes.

* ¿Qué opciones se pueden seleccionar al realizar la comparación ?

  * Error Color: Color en el que se van a mostrar las diferencias en las imagenes.
  * Tipo de error: movement|flat|flat-width-div-intensity,movement-with-div-intensity,div-portion-from-the-input
  * Transparecia de las imagenes
  * Tamaño de las imagenes
  * Tipos de diferencia a ignorar
  
 ## Autores
 
* Ana Maria Espinosa
* Johan Prieto

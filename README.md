# tallersemana6
Semana 6: Pruebas de regresión visual


En el presente repositorio se encuenra una rama (master) la cual contiene dos carpetas:
 - Pruebas E2E
 - Pruebas de regresión

A continuación, se describen las seis nuevas funcionalidades implementaciones:

1. Eliminar invitación a colaborador
Existe en ghost un módulo denominado colaboradores, allí se pueden enviar invitaciones a través de correo electrónico para aquellos que deseen participar como editores, administradores, etc.  La funcionalidad evaluada consiste en ubicar el formulario para el envío de la notificación, seleccionar un registro de la lista de invitaciones pendientes por aceptar y sobre este, activar el botón "Revocar".

2. Cambiar zona horaria
Ghost permite actualizar la zona horaria a tu preferencia, a partir del listado de zonas horairas disponibles en la aplicación.  La prueba consiste en ubicar el formulario settings, seleccioanr en dicho formulario la sección "Zona Horaria", ubicar la lista de selección "Zonas" y seleccionar de allí un registro en particular, posteriormente se activa el botón "Guardar".

3. Crear navegación
Ghos cuenta con una estructura de menús de navegación predefinida para el sitio público de post´s.  Dicha zona puede ser modificada para adicionar o suprimir las secciones estableceidas.  La prueba asociada consiste en ubicar el formulario "Design", seleccionar la sección "Navitation" y desde allí ubicar el botón "Adicionar".  Posteriormente se diligencian los campos de texto y se activa finalmente el botón guardar.   

4. Editar post
Ghost cuenta con un módulo para la gestión de post, esto incluye la creación, actualización, listado y eliminación de registros.  La prueba empleada consiste en ubicar de dicho listado un registro aleatorio, activar sobre él el botón "Editar", modificar el título y la descripción del post y, finalmente, activar el botón guardar.

5. Agregar colaborador
Existe en ghost un módulo denominado colaboradores, allí se pueden enviar invitaciones a través de correo electrónico para aquellos que deseen participar como editores, administradores, etc.  La funcionalidad evaluada consiste en ubicar el formulario para el envío de la notificación, activar el botón "Invitar colaborador", diligeniar el formulario despelgado y activar el botón "Guardar".

6. Editar tag
Ghos cuenta con un módulo para la gestión de tags, estos corresponden a una serie de registros que son utilizados para la clasificación e indexación del contenido (post) generado.  La prueba empleada consistió en ubicar el formulario de tags, seleccioanr un registro y editar su contenido para posteriormente activar el botón guardar.



EJECUCIÓN PRUEBAS CYPRES

A continuación se describen las pruebas empleadas:

1.  Funcionalidad login Caso éxitoso: Se genera script para la autenticación del usaurio administrador válido.
2. Funcionalidad login Caso faillido: Se genera script para la autenticación del usaurio administrador inválido.
3. Reset password caso éxitoso: Se genera script para la reconfiguración de password de un usaurio administrador válido utilizando parámetros válidos.
4. Reset password caso faillido: Se genera script para la reconfiguración de password de un usaurio administrador válido utilizando parámetros inválidos.
5. Configuración enlace a redes sociales caso éxitoso: Se genera script para acceder a la configuraciones del sistema, ubicandonos en la sección "Redes sociales" y configurar allí el enlace a la cuenta de facebook de ghost utilizando un enlace válido.
6. Configuración enlace a redes sociales caso fallido: Se genera script para acceder a la configuraciones del sistema, ubicandonos en la sección "Redes sociales" y configurar allí el enlace a la cuenta de facebook de ghost utilizando un enlace inválido.
7. Crear tag caso exitoso: Se genera script para crear un nuevo tag desde la consola de administración. Una vez creado, se valida sobre la lista de tags que este exista.
8. Crear tag caso fallido: Se genera script para crear dos tag's con el mismo nombre. Una vez creados, se valida sobre la lista de tags que ambos existen con el mismo nombre.

Instrucciones de Ejecución: Para llevar a buen termino la siguiente lista de tareas, previemante debe configura el ambiente de desarrollo de cypress de acuerdo al tutorial:
 * A través de la consola git, clone el repositorio.
 * Ejecute el comando "git checkout pruebascypress"
 * Abra con VS Code el proyecto.
 * Abra una nueva consola desde VS Code.
 * Ubique la consola en la carpeta raíz del proyecto Cyrpess
 * Ejecute el comando "./node_modules/.bin/cypress open"
 * El comando anterior, desplegará la consola de Cypress, desde donde podrá seleccioanr los casos de prueba implmementados.
 * Seleccione del listado el primer caso de prueba disponible. Nota: Asegurese siempre de ejecutar los casos de prueba en orden.


EJECUCIÓN PRUEBAS DE REGRESIÓN 

A continuación, se enumeran las 10 pruebas de regresión empleadas tomando como referencia Ghost 3.0 y como versión de análisis, Ghost 3.4:

1. Agregar colaborador
2. Cambiar contraseña
3. Cambiar zona horaria
4. Configurar enlaces a red social
5. Crear navegación
6. Crear tag
7. Editar post
8. Editar tag
9. Elimintar invitación a colaborador
10. Login

Instrucciones de Ejecución: Para llevar a buen termino la siguiente lista de tareas, previemante debe configura el ambiente de desarrollo de cypress de acuerdo al tutorial:

 * A través de la consola git, clone el repositorio.
 * Abra con VS Code el proyecto.
 * Abra una nueva consola desde VS Code.
 * Ubique la consola en la carpeta raíz del proyecto "PruegasRegresión"
 * Ejecute el comando "node XXXX"  donde XXX corresponde al archivo fuente .js que contiene alguna de las 10 pruebas enumeradas.

Cada script .js al ser ejecutado, genera automáticamente el respectivo reporte HTML en el cual se incluyen los screenshot para cada paso empleado dentro del caso de prueba, en cada paso se toma un screenshot a la versión de referencia (3.0), análisis (3.4) junto con la imágen de comparación.


DIFERENCIAS ENCONTRADAS EN LAS VERSIÓNES DE GHOST

A continuación se relaciona el enlace hacia el repositorio de Issues donde se consignan las diferencias encontradas: https://github.com/fabiandavid01/tallersemana6/issues




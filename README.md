Alejandro Fernández Restrepo

Arquitectura Caso de Estudio Alquiler y gestión de eventos Bicicletas

Ingeniería de sistemas

Arquitecturas avanzadas de software

EAFIT 2023-1

# Comandos

## Node

npm install

npm start

## Docker

docker network create redbicis

docker build -t front/redbicis .

docker run --network redbicis --name front -d -p 3100:3100 front/redbicis

docker build -t back/redbicis .

docker run --network redbicis --name back -d -p 3000:3000 back/redbicis

docker compose

doker-compose up

docker-compose down

docker-compose build

# About

1\. Introducción

El propósito es definir la arquitectura de este sistema a partir de cloud native y microservicios. En el cual la aplicación va a permitir un crud básico en el cual se pueda crear, editar, eliminar, listar y ver la información en un mapa la información sobre bicicletas. El objetivo de este sistema es ofrecer una plataforma eficiente y escalable para la gestión de bicicletas.

2\. Aspectos de Negocio

2\.1 Entidades

\- Bicicletas: Información de cada bicicleta como su ID, modelo, color, ubicación (latitud y longitud geográfica).

\- Usuarios: Información de cada usuario que interactúa con el sistema, como su ID, correo electrónico, nombre, apellido que se manejan con credenciales de autenticación de Google.

2\.2 Actividades

\- Crear bicicleta: Un usuario puede crear una bicicleta especificando su modelo y ubicación.

\- Editar bicicleta: Un usuario puede editar la información de una bicicleta existente, como su modelo y ubicación.

\- Eliminar bicicleta: Un usuario puede eliminar una bicicleta existente.

\- Listar bicicletas: Un usuario puede ver una lista de bicicletas disponibles en el sistema.

\- Autenticar con Google: Los usuarios pueden autenticarse en el sistema utilizando sus credenciales de Google.

2\.3 Locations

El sistema no tiene una presencia física específica, ya que se trata de un sistema en la nube. Sin embargo, las bicicletas creadas y gestionadas por el sistema tendrán una ubicación física en diferentes áreas urbanas. Por lo tanto, es importante considerar el impacto que estas bicicletas pueden tener en la sociedad en términos de movilidad sostenible, reducción de la huella de carbono, transporte y movilidad.

Las bicicletas son una alternativa más sostenible y económica al uso de vehículos motorizados, y pueden ayudar a reducir la congestión del tráfico y la contaminación del aire en áreas urbanas. Al proporcionar una plataforma para la gestión de bicicletas, este sistema puede fomentar el uso de bicicletas como medio de transporte y contribuir así a la creación de una sociedad más sostenible.

Además, el sistema puede tener un impacto indirecto en la sociedad al proporcionar una plataforma segura y fácil de usar para la creación, edición, eliminación y listado de bicicletas. Esto puede ayudar a fomentar la participación de más personas en el uso de bicicletas y, por lo tanto, contribuir a mejorar la salud y la calidad de vida de la sociedad en general. 

2\.4 Actores

\- Usuarios: Personas que interactúan con el sistema para crear, editar, eliminar y listar bicicletas.

\- Google: Proporciona la autenticación para los usuarios.

2\.5 Reglas de Negocio (opcional)

\- Las bicicletas solo pueden ser eliminadas si se valida que su id si este registrado.

\- Solo los usuarios autenticados pueden crear, editar y eliminar bicicletas.

2\.6 Eventos de Negocio (opcional)

\- Creación de una nueva bicicleta.

\- Modificación de información de una bicicleta existente.

\- Eliminación de una bicicleta existente.

\- Visualización de las bicicletas en el mapa.

3\. Diagrama de Contexto

![Diagrama de contexto](https://user-images.githubusercontent.com/45807912/236540099-ce50fec8-0a65-4b62-b603-634bccac00b1.jpg)

El sistema se compone de los siguientes componentes:

\- Usuarios: interactúan con el sistema para crear, editar, eliminar y listar bicicletas.

\- Servicio de autenticación de Google: proporciona la autenticación de los usuarios.

\- Servicio de bicicletas: proporciona la funcionalidad para crear, editar, eliminar y listar bicicletas.

\- Servicio de mapa interactivo: proporciona la funcionalidad para visualizar las bicicletas en un mapa interactivo.


4\. Objetivos

El objetivo del sistema es proporcionar una plataforma eficiente y escalable para la gestión de bicicletas, permitiendo a los usuarios crear, editar, eliminar y listar bicicletas, autenticarse con Google y visualizar las bicicletas en un mapa interactivo. El sistema debe ser fácil de usar, seguro y escalable para manejar grandes cantidades de datos y usuarios.

5\.Documento de Decisión Arquitectónica

5\.1. Decisión Arquitectónica

Esta decisión arquitectónica establece la adopción de una arquitectura cloud native y de microservicios para la creación de una aplicación de gestión de bicicletas. El sistema permitirá la creación, edición, eliminación y listado de bicicletas a través de una Rest API, y también permitirá la autenticación con Google. Además, el sistema permitirá la visualización de bicicletas en un mapa interactivo de leafet js.

En primer lugar, al utilizar una arquitectura basada en microservicios, se puede dividir la aplicación en componentes independientes que se encargan de realizar tareas específicas. Cada microservicio se puede desarrollar, desplegar y escalar de manera independiente, lo que facilita el mantenimiento y la evolución de la aplicación en el futuro. Además, si se necesita hacer cambios en una funcionalidad específica de la aplicación, solo se tendría que actualizar el microservicio correspondiente, lo que reduce el riesgo de afectar a otras partes de la aplicación.

En segundo lugar, el uso de una arquitectura cloud nativa ofrece la ventaja de tener una infraestructura escalable y flexible, capaz de adaptarse a las necesidades de la aplicación. Esto significa que la aplicación se puede ejecutar en un entorno de nube pública como AWS, Google Cloud o Azure, lo que ofrece la capacidad de escalar verticalmente y horizontalmente para manejar cargas de trabajo en constante cambio.

Por último, los contenedores es una solución muy popular y robusta para orquestar y gestionar contenedores en un entorno de nube. docker proporciona escalabilidad, resiliencia y automatización en la gestión de microservicios. Al utilizar contenedores, se puede desplegar y gestionar fácilmente la aplicación en un entorno de nube, lo que reduce la complejidad y el tiempo dedicado a la gestión de la infraestructura y se centra en el desarrollo de la aplicación.

5\.2. Impactos e Implicaciones

La decisión de adoptar una arquitectura cloud native y de microservicios tiene implicaciones en términos de elección de tecnología, costos y soporte. Se requerirá un conocimiento avanzado de tecnologías de nube y microservicios, así como un equipo de desarrollo altamente capacitado para implementar y mantener el sistema. Sin embargo, esta arquitectura permitirá una mayor escalabilidad, flexibilidad y facilidad de mantenimiento en comparación con arquitecturas monolíticas tradicionales, también se necesitarán conocimientos en alguna plataforma cloud sea aws, Google cloud o ibm cloud para su posterior despliegue.

También tiene ventajas en cuanto a escalabilidad, adaptabilidad y facilidad de mantenimiento. Además, la integración con servicios externos como Google y Leaflet permite una mayor funcionalidad y una mejor experiencia de usuario. Sin embargo, el uso de estas tecnologías también puede tener implicaciones en cuanto a costos, complejidad y seguridad, que deben ser consideradas.

5\.3. Problema y Restricciones

5\.3.1 Problema

El problema que aborda la aplicación es la gestión de bicicletas, que incluye la creación, edición, eliminación y listado de bicicletas. Además, la aplicación tiene como objetivo mostrar las bicicletas en un mapa interactivo y autenticar a los usuarios con su cuenta de Google. Uno de los desafíos principales es garantizar una buena experiencia de usuario, que implica una alta disponibilidad y un rendimiento rápido de la aplicación. Esto con el fin de que los usuarios puedan alquilar bicicletas como parte de integración de movilidad y transporte de una ciudad.

5\.3.2 Contexto

El contexto de la aplicación es el mercado de la movilidad sostenible en áreas urbanas. Se busca proporcionar una alternativa más sostenible y económica al uso de vehículos motorizados, en el cual los usuarios podrán encontrar bicicletas en un mapa interactivo y alquilarlas.

5\.3.3 Alcance

El alcance de la aplicación es la creación, edición, eliminación y listado de bicicletas, así como la autenticación con Google y la visualización de bicicletas en un mapa interactivo.

5\.3.4 Restricciones

Las restricciones incluyen la necesidad de utilizar tecnologías cloud native y de microservicios, la necesidad de integrarse con Google para la autenticación, y la necesidad de proporcionar una visualización de bicicletas en un mapa interactivo de leafet js.

- La aplicación debe estar disponible vía REST API.
- La aplicación debe ser capaz de autenticar con Google.
- La aplicación debe tener una función de visualización de bicicletas en un mapa interactivo.
- Se debe utilizar una arquitectura cloud native y de microservicios.

5\.3.5 Supuestos

Se asume que los usuarios tendrán acceso a dispositivos con acceso a navegadores web y una conexión a Internet para acceder al sistema. También se asume que habrá un equipo de desarrollo capacitado para implementar y mantener la arquitectura cloud native y de microservicios.

5\.4. Análisis de Solución

5\.4.1 Arquitectura de la Solución

La arquitectura de la solución se basará en una arquitectura cloud native y de microservicios, que permitirá la escalabilidad, flexibilidad y facilidad de mantenimiento necesarias para la aplicación de gestión de bicicletas, esta arquitectura estará basada en el modelo de kubernetes para poder hacer su despliegue y escalabilidad, con lo cual se espera que la aplicación sea dividida en diferentes servicios para desplegar, como el servicio de visualización de mapas, de acciones de bicicletas y autentificación.

5\.4.2 Análisis Comparativo de Soluciones

Se consideraron otras arquitecturas como las monolíticas tradicionales, pero se determinó que la arquitectura cloud native y de microservicios era la mejor opción debido a su escalabilidad, flexibilidad y facilidad de mantenimiento, asi como la mejor capacidad de escalar a demanda y replicación de servicios para alta demanda.

5\.4.3. Justificación

La solución propuesta se enfoca en utilizar tecnologías en la nube y arquitectura de microservicios para mejorar el alcance y escalabilidad de la aplicación. La decisión de utilizar una arquitectura cloud native y de microservicios se tomó debido a su capacidad de adaptarse a las necesidades del negocio, su facilidad de mantenimiento y escalabilidad.

Además, se integrará la autenticación de Google para mejorar la seguridad de la aplicación y se utilizará una API externa de mapas para permitir la visualización de bicicletas en un mapa interactivo. Esta integración con API externa de mapas permitirá a los usuarios ubicar fácilmente las bicicletas disponibles.

En resumen, la solución propuesta permitirá mejorar la eficiencia y escalabilidad de la aplicación, así como la seguridad y facilidad de uso para los usuarios finales. Y su versatilidad ante cambios de demanda en el uso de la aplicación.



6\.Diagrama de componentes


![Diagrama de componentes](https://user-images.githubusercontent.com/45807912/236540139-41a51207-7797-478d-9661-a3cd72d0a906.jpg)




6\.1. Modelo de componentes

Componentes de la Aplicación

\- Autenticación (Google OAuth)

\- Servicio de bicicletas (Administrador de Bicicletas)

\- Servicio de mapas (Visualización de mapas con <https://leafletjs.com/> )

\- Base de Datos (Datos guardados en memoria de ejecución)



6\.1.1. Descripción de Componentes

- Aplicación Web: Es el componente que se encarga de ofrecer la interfaz gráfica de usuario para la aplicación. Este componente se comunica con los otros componentes a través de API REST.

- Servicio de Bicicletas: Este componente ofrece las operaciones CRUD (crear, leer, actualizar y eliminar) para la gestión de las bicicletas en el sistema. Este componente se comunica con el componente de Base de Datos.


- Servicio de Mapas: Este componente se encarga de la visualización de las bicicletas en el mapa interactivo utilizando la librería Leaflet. Este componente se comunica con el Servicio de Bicicletas para obtener la información necesaria.

- Base de Datos: Este componente es el encargado de la persistencia de los datos del sistema en memoria de ejecución. Este componente se comunica con el Servicio de Bicicletas para almacenar y recuperar la información necesaria.

- Servicio de Autenticación: Este componente se encarga de la autenticación del usuario mediante Google. Este componente se comunica con la Aplicación Web para validar las credenciales del usuario.

6\.1.2. Relaciones de Componentes

- La aplicación web se comunica con el Servicio de Bicicletas y el Servicio de Autenticación de Google a través de HTTP REST APIs.

- El Servicio de Bicicletas utiliza la Base de Datos para almacenar y recuperar información sobre las bicicletas.

- El Servicio de Bicicletas también se comunica con el Servicio de Mapas para obtener información sobre la ubicación de las bicicletas y visualizarla en el mapa.

- El Servicio de Mapas utiliza Leaflet.js para crear el mapa interactivo y se comunica con el Servicio de Bicicletas para obtener información sobre las bicicletas y sus ubicaciones.

- El Servicio de Autenticación de Google se comunica con la aplicación web para autenticar a los usuarios y permitir el acceso a las funcionalidades de la aplicación.

7\.Diagrama de secuencias

![Diagrama de secuencias1](https://user-images.githubusercontent.com/45807912/236540259-c7d9765d-db32-4234-b096-9a7341241b4e.jpg)


8\.Diagrama Entidad

![Diagrama Entidad](https://user-images.githubusercontent.com/45807912/236540205-c4010e9a-d1bd-4949-be89-d572d11fdb0b.jpg)


9\.Diagrama de despliegue

![Diagrama de Despliegue](https://user-images.githubusercontent.com/45807912/236540233-137ae471-ed32-43c2-8c3b-a54f89722fc0.jpg)


Repositorio de la aplicación: <https://github.com/afernander/Cloud-Arquitecture-Bicicle>


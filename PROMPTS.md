# PROMPTS.md

## Prompt 1 - Arquitectura general
Genere un backend con Node.js, Express y MongoDB local para registrar perfiles de amantes y consultarlos por interés. Use una arquitectura en capas con las carpetas controllers, services, repositories, model y dto.

## Prompt 2 - Modelo y validación
Genere un modelo de MongoDB para amantes con los campos nombre, edad e intereses. Agregue validaciones básicas en DTO para verificar que nombre sea string no vacío, edad sea un entero mayor o igual a 18 e intereses sea un arreglo no vacío de strings.

## Prompt 3 - Endpoints REST
Genere los endpoints POST /amantes para crear un perfil y GET /amantes?interes=x para consultar coincidencias exactas por interés.

## Prompt 4 - Persistencia y seed
Genere un repository para MongoDB y una seed automática que inserte pocos registros iniciales solo si la colección está vacía.

## Prompt 5 - Organización de capas
Explique qué responsabilidad tiene cada capa y mantenga el controller sin lógica de negocio, el service con lógica de normalización y el repository como acceso a base de datos.

## Prompt 6 - Documentación
Redacte un README técnico que describa la arquitectura, endpoints, variables de entorno, scripts y consideraciones de entrega sin afirmar ejecución no realizada.

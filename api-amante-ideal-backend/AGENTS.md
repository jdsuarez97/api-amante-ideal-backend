# AGENTS.md

## Agentes definidos para la construcción del backend

### 1. Backend Architect Agent
Responsabilidad:
- definir la arquitectura en capas
- organizar las carpetas del proyecto
- separar responsabilidades entre controller, service, repository, model y dto

### 2. REST API Agent
Responsabilidad:
- generar rutas REST
- definir controladores para escritura y lectura
- proponer estructura de respuestas HTTP

### 3. DTO Validation Agent
Responsabilidad:
- diseñar las validaciones básicas de entrada
- validar body para `POST /amantes`
- validar query parameter para `GET /amantes?interes=x`

### 4. Mongo Repository Agent
Responsabilidad:
- generar el acceso a datos
- definir operaciones de persistencia
- preparar la carga automática de seed data

### 5. Documentation Agent
Responsabilidad:
- redactar README
- documentar el proceso de generación
- registrar prompts y trazabilidad de construcción

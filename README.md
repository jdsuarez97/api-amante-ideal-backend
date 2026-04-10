# API Amante Ideal - Backend

#Daniela Suarez Quiros
#Victoria Molina Martinez

## Descripción general

Este repositorio contiene el backend de una aplicación simple para registrar perfiles de posibles amantes y consultar candidatos según un interés específico.

La solución fue planteada con **Node.js**, **Express** y **MongoDB local**, siguiendo una **arquitectura en capas** con separación clara de responsabilidades. El propósito principal de esta entrega es evidenciar el diseño técnico, la organización estructural del código y la trazabilidad del proceso de generación asistida por inteligencia artificial.

## Objetivo del ejercicio

Implementar una API REST tradicional que permita:

- crear perfiles de amantes mediante una operación de escritura
- consultar coincidencias por interés mediante una operación de lectura
- mantener una estructura desacoplada respecto al frontend
- respetar una arquitectura en capas obligatoria

## Alcance funcional

La API implementa las siguientes operaciones:

### 1. Crear perfil
**Endpoint:** `POST /amantes`

Permite registrar un nuevo perfil con los campos:

- `nombre`
- `edad`
- `intereses`

### 2. Consultar coincidencias por interés
**Endpoint:** `GET /amantes?interes=x`

Permite listar los perfiles cuyo arreglo de intereses contenga el interés indicado.

## Arquitectura

El backend fue organizado según una arquitectura en capas compuesta por:

- `controllers`
- `services`
- `repositories`
- `model`
- `dto`

### Responsabilidad de cada capa

#### `controllers`
Reciben la solicitud HTTP, delegan la operación al servicio correspondiente y construyen la respuesta HTTP.

#### `services`
Contienen la lógica de negocio básica, incluyendo normalización de datos y coordinación entre capas.

#### `repositories`
Aíslan el acceso a la base de datos y encapsulan las operaciones de persistencia.

#### `model`
Define el esquema de datos para MongoDB.

#### `dto`
Aplica validaciones básicas sobre los datos de entrada antes de que ingresen a la lógica de negocio.

## Estructura del proyecto

```text
src/
├── config/
│   └── db.js
├── controllers/
│   └── amante.controller.js
├── dto/
│   └── amante.dto.js
├── model/
│   └── amante.model.js
├── repositories/
│   └── amante.repository.js
├── routes/
│   └── amante.routes.js
├── seed/
│   └── amante.seed.js
├── services/
│   └── amante.service.js
├── app.js
└── server.js
```

## Modelo de datos

Cada perfil de amante contiene la siguiente estructura:

```json
{
  "nombre": "Valeria",
  "edad": 24,
  "intereses": ["lectura", "senderismo", "cine"]
}
```

## Validaciones aplicadas

La capa `dto` aplica validaciones básicas sobre la entrada:

- `nombre` debe ser un string no vacío
- `edad` debe ser un número entero mayor o igual a 18
- `intereses` debe ser un arreglo no vacío
- cada elemento de `intereses` debe ser un string no vacío

## Endpoints

## `POST /amantes`

Crea un nuevo perfil.

### Ejemplo de solicitud

```json
{
  "nombre": "Mariana",
  "edad": 26,
  "intereses": ["arte", "viajes", "música"]
}
```

### Ejemplo de respuesta esperada

```json
{
  "message": "Amante created successfully",
  "data": {
    "_id": "generated_id",
    "nombre": "Mariana",
    "edad": 26,
    "intereses": ["arte", "viajes", "música"]
  }
}
```

## `GET /amantes?interes=lectura`

Consulta coincidencias exactas por interés.

### Ejemplo de respuesta esperada

```json
{
  "message": "Query executed successfully",
  "total": 2,
  "data": [
    {
      "_id": "generated_id_1",
      "nombre": "Daniela",
      "edad": 25,
      "intereses": ["lectura", "cafés", "senderismo"]
    },
    {
      "_id": "generated_id_2",
      "nombre": "Mariana",
      "edad": 24,
      "intereses": ["lectura", "cine", "fotografía"]
    }
  ]
}
```

## Seed automática

El proyecto incluye una semilla mínima de datos en `src/seed/amante.seed.js`.

Su función es insertar algunos registros iniciales de ejemplo únicamente cuando la colección se encuentra vacía. Esto permite dejar preparado el escenario mínimo de uso esperado para la API.

## Variables de entorno

Este proyecto espera un archivo `.env` basado en el archivo `.env.example`.

### `.env.example`

```env
PORT=3001
MONGODB_URI=mongodb://127.0.0.1:27017/amantesdb
```

## Scripts definidos

```bash
npm run dev
npm run start
```

### Propósito de los scripts

- `npm run dev`: arranque en modo desarrollo
- `npm run start`: arranque estándar del backend

## Flujo general de la solicitud

### Caso 1: creación de perfil

1. El cliente envía una solicitud `POST /amantes`
2. El `dto` valida la entrada
3. El `controller` recibe la solicitud y delega al `service`
4. El `service` normaliza los datos
5. El `repository` persiste el documento en MongoDB
6. El `controller` construye la respuesta HTTP

### Caso 2: búsqueda por interés

1. El cliente envía `GET /amantes?interes=x`
2. El `dto` valida el parámetro `interes`
3. El `controller` delega la búsqueda al `service`
4. El `service` normaliza el valor buscado
5. El `repository` consulta MongoDB
6. El `controller` devuelve la lista de coincidencias

## Relación con el frontend

Este backend fue diseñado para ser consumido por un frontend React ubicado en un repositorio separado. La comunicación entre ambos se realiza mediante HTTP, manteniendo el desacoplamiento solicitado en el ejercicio.

## Evidencia de uso de inteligencia artificial

La construcción de este repositorio fue documentada mediante los siguientes archivos:

- `AGENTS.md`
- `PROMPTS.md`
- `AI_GENERATION_LOG.md`

Estos archivos registran:

- los agentes o roles definidos para generar partes del sistema
- los prompts utilizados para orientar la generación del código
- la trazabilidad de los componentes producidos y revisados

## Consideraciones de entrega

Esta entrega prioriza:

- cumplimiento del enunciado
- separación en capas
- claridad arquitectónica
- coherencia entre código y documentación
- trazabilidad del proceso de generación con IA

No se incluyen afirmaciones de ejecución local, pruebas manuales ni validaciones empíricas no realizadas como parte de esta entrega.

## Repositorio relacionado

Este backend forma parte de una solución dividida en dos repositorios:

- backend REST con Node.js + Express + MongoDB
- frontend React con client side rendering

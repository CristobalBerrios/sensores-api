## Aplicación
``` bash
# instalar dependencias
npm install -g babel
npm install

# Iniciar aplicación en entorno de desarrollo
$ npm run dev

# Construir aplicación para producción
$ npm run build

# Iniciar aplicación en producción
$ npm start

# Correr seeder para usuario y cluster
$ npm run seed
```
## Documentación API
``` javascript
// Login Routes
POST /api/signin
example: {
	"email": "email@email.com",
	"password": "clave"
}
response: {
"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTk2MTlkNTk0ZDFkMjc1YTM5YjVkNmUiLCJpYXQiOjE1MTk3ODg2NzMsImV4cCI6MTUyMDM5MzQ3M30.-_yB2k64zRUg6imKTUdUoKOtcL39s39O5wpUbL2nMD4",
"email": "admin@sismos.com"
}

// INCLUIR EN LAS SIGUIENTES PETICIONES ESTE ENCABEZADO

Authorization: "el token recibido"

// Cluster Routes

GET /api/cluster -> Devuelve todos los cluster que existen en la bd

POST /api/cluster -> Se envia un cluster para guardarlo
example: {
	"name": "Cluster #1"
}

// Sensor Routes

GET /api/sensor -> Devuelve todos los sensores que existen en la bd.

GET /api/sensor/id -> Devuelve un sensor especifico según el id.

POST /api/sensor -> Se envia un sensor para guardarlo.
example: {
	"name": "El Tabo",
	"id": "564361",
	"position": {
	"lat": -33.452673,
	"lng": -71.656091
	},
	"cluster": "5a9619d594d1d275a39b5d6f"
}

PUT /api/sensor/id -> se envía información para editar el sensor segun el id.

DELETE /api/sensor/id -> se elimina el sensor especificado en el id.

// Event Routes

GET /api/event -> Devuelve todos los eventos.

POST /api/event -> Se envia un evento para guardarlo
example: {
	"intensity": 4.4,
	"clusters": ["idCLuster1", "idCluster2"]
}

// Historico Routes

POST /api/historical -> Se envia una lista de sensores con su intensidad registrada.
example: [
	{
		_id: "idSensor1",
		intensity: 1.8
	},
	{
		_id: "idSensor2",
		intesity: 2.1
	}
]```

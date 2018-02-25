'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _config = require('./config');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config.config.DB, function (err, res) {
	if (err) return console.log('Error al conectarse a mongodb ' + err);

	console.log('Conexion con mongodb exitosa');

	_app2.default.listen(_config.config.PORT, function () {
		console.log('Aplicacion corriendo en el puerto ' + _config.config.PORT);
	});
});
//# sourceMappingURL=index.js.map
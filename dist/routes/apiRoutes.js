'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

var _UserController = require('../controllers/UserController');

var _SensorController = require('../controllers/SensorController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = _express2.default.Router();

//Login Routes
route.post('/signup', _UserController.userController.signUp);
route.post('/signin', _UserController.userController.signIn);

// Sensor Routes
route.use('/sensor', _auth2.default.isAuth);
route.get('/sensor', _SensorController.sensorController.getAll);
route.get('/sensor/:id', _SensorController.sensorController.getById);
route.post('/sensor', _SensorController.sensorController.save);
route.put('/sensor/:id', _SensorController.sensorController.update);
route.delete('sensor/:id', _SensorController.sensorController.remove);

exports.default = route;
//# sourceMappingURL=apiRoutes.js.map
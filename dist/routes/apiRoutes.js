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

var _EventController = require('../controllers/EventController');

var _ClusterController = require('../controllers/ClusterController');

var _HistoricalController = require('../controllers/HistoricalController');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = _express2.default.Router();

//Login Routes
// route.post('/signup', userController.signUp)
route.post('/signin', _UserController.userController.signIn);

// Sensor Routes
route.use('/sensor', _auth2.default.isAuth);
route.get('/sensor', _SensorController.sensorController.getAll);
route.get('/sensor/:id', _SensorController.sensorController.getById);
route.post('/sensor', _SensorController.sensorController.save);
route.put('/sensor/:id', _SensorController.sensorController.update);
route.delete('/sensor/:id', _SensorController.sensorController.remove);

// Event Routes
route.use('/event', _auth2.default.isAuth);
route.get('/event', _EventController.eventController.getAll);
route.post('/event', _EventController.eventController.save);

// Cluster Routes
route.use('/cluster', _auth2.default.isAuth);
route.get('/cluster', _ClusterController.clusterController.getAll);
route.post('/cluster', _ClusterController.clusterController.save);
route.put('/cluster/:id', _ClusterController.clusterController.update);
route.delete('/cluster/:id', _ClusterController.clusterController.remove);

// Historico Routes

route.use('/historical', _auth2.default.isAuth);
route.post('/historical', _HistoricalController.historicalController.save);

exports.default = route;
//# sourceMappingURL=apiRoutes.js.map
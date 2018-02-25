'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sensorModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var SensorSchema = Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  position: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  last_connection: { type: Date, required: false, default: Date.now },
  last_alert: { type: Date, required: false, default: Date.now }
});

var sensorModel = exports.sensorModel = _mongoose2.default.model('Sensor', SensorSchema);
//# sourceMappingURL=sensorModel.js.map
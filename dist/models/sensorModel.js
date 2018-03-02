'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sensorModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var SensorSchema = Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  position: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  last_connection: { type: Date, required: false },
  last_event: { type: Date, required: false },
  cluster: { type: Schema.ObjectId, ref: 'Cluster', required: true }
}, {
  toJSON: { virtuals: true }
});

SensorSchema.virtual('isOnline').get(function () {
  if (this.last_connection == null || this.last_connection == '') return false;
  var last_connection = (0, _moment2.default)(this.last_connection);
  var now = (0, _moment2.default)();

  if (now - last_connection > 90000) return false;
  return true;
});

var sensorModel = exports.sensorModel = _mongoose2.default.model('Sensor', SensorSchema);
//# sourceMappingURL=sensorModel.js.map
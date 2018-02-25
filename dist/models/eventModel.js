'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var EventSchema = Schema({
  date: { type: Date, default: Date.now },
  intensity: { type: Number, required: true },
  sensors: [{ type: Schema.ObjectId, ref: 'Sensor', required: true }]
});

var eventModel = exports.eventModel = _mongoose2.default.model('Event', EventSchema);
//# sourceMappingURL=eventModel.js.map
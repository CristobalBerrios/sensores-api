'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clusterModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ClusterSchema = Schema({
  name: { type: String, required: true, unique: true }
});

var clusterModel = exports.clusterModel = _mongoose2.default.model('Cluster', ClusterSchema);
//# sourceMappingURL=clusterModel.js.map
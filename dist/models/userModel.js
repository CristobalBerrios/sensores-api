'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

var userModel = exports.userModel = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=userModel.js.map
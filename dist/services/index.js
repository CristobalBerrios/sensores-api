'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _jwtSimple = require('jwt-simple');

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createToken: function createToken(user) {
    var payload = {
      sub: user._id,
      iat: (0, _moment2.default)().unix(),
      exp: (0, _moment2.default)().add(7, 'days').unix()
    };

    return _jwtSimple2.default.encode(payload, _config.config.SECRET);
  },
  decodeToken: function decodeToken(token) {
    var decoded = new Promise(function (resolve, reject) {
      try {
        var payload = _jwtSimple2.default.decode(token, _config.config.SECRET);

        if (payload <= (0, _moment2.default)().unix()) {
          reject({
            status: 401,
            message: 'El token ha expirado'
          });
        }

        resolve(payload.sub);
      } catch (err) {
        reject({
          status: 401,
          message: 'Token Invalido'
        });
      }
    });

    return decoded;
  }
};
//# sourceMappingURL=index.js.map
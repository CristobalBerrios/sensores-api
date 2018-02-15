'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _services = require('../services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  isAuth: function isAuth(req, res, next) {
    if (!req.headers.authorization) return res.status(403).send({ message: 'No tiene autorizacion' });
    var token = req.headers.authorization;
    _services2.default.decodeToken(token).then(function (response) {
      req.user = response;
      next();
    }).catch(function (response) {
      res.status(response.status).send({ message: response.message });
    });
  }
};
//# sourceMappingURL=auth.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userModel = require('../models/userModel');

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _services = require('../services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: 'signUp',


    //Funcion para registar un Usuario
    value: function signUp(req, res) {
      var password = _bcrypt2.default.hashSync(req.body.password, 10);
      var user = new _userModel.userModel({
        email: req.body.email,
        password: password
      });

      user.save(function (err, newUser) {
        if (err) return res.status(500).send({ message: 'Error al crear el usuario' });

        return res.status(200).send({ token: _services2.default.createToken(newUser) });
      });
    }
  }, {
    key: 'signIn',
    value: function signIn(req, res) {
      _userModel.userModel.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send({ message: err });
        if (!user) return res.status(404).send({ message: 'Usuario no registrado' });

        if (!_bcrypt2.default.compareSync(req.body.password, user.password)) {
          return res.status(401).send({ message: 'la clave es invalida' });
        }

        return res.status(200).send({ token: _services2.default.createToken(user), email: user.email });
      });
    }
  }]);

  return UserController;
}();

var userController = exports.userController = new UserController();
//# sourceMappingURL=UserController.js.map
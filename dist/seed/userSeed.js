'use strict';

var _mongooseSeed = require('mongoose-seed');

var _mongooseSeed2 = _interopRequireDefault(_mongooseSeed);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongooseSeed2.default.connect(_config.config.DB, function () {
  _mongooseSeed2.default.loadModels(['app/models/userModel']);

  _mongooseSeed2.default.clearModels(['User'], function () {
    _mongooseSeed2.default.populateModels(data, function () {
      _mongooseSeed2.default.disconnect();
    });
  });
});

var data = [{
  'model': 'User',
  'documents': [{
    "email": "admin@sismos.com",
    "password": _bcrypt2.default.hashSync("admin123", 10)
  }]
}];
//# sourceMappingURL=userSeed.js.map
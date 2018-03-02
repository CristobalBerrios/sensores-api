'use strict';

var _mongooseSeed = require('mongoose-seed');

var _mongooseSeed2 = _interopRequireDefault(_mongooseSeed);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongooseSeed2.default.connect(_config.config.DB, function () {
  _mongooseSeed2.default.loadModels(['app/models/clusterModel']);

  _mongooseSeed2.default.clearModels(['Cluster'], function () {
    _mongooseSeed2.default.populateModels(data, function () {
      _mongooseSeed2.default.disconnect();
    });
  });
});

var data = [{
  'model': 'Cluster',
  'documents': [{
    "name": "Cluster #1"
  }]
}];
//# sourceMappingURL=clusterSeed.js.map
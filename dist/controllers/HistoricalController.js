'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.historicalController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sensorModel = require('../models/sensorModel');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HistoricalController = function () {
  function HistoricalController() {
    _classCallCheck(this, HistoricalController);
  }

  _createClass(HistoricalController, [{
    key: 'save',
    value: function save(req, res) {
      var sensors = req.body;
      var error = false;
      try {
        sensors.forEach(function (sensor) {
          _sensorModel.sensorModel.findByIdAndUpdate(sensor._id, { $set: { last_connection: Date.now() } }, { new: true }, function (err, mySensor) {
            if (err) error = true;
          });
        });
        if (error) throw 'error al actulizar sensor, error: ' + err;
        return res.status(200).send({ message: 'Sensores actualizados correctamente' });
      } catch (err) {
        return res.status(500).send({ message: err });
      }
    }
  }]);

  return HistoricalController;
}();

var historicalController = exports.historicalController = new HistoricalController();
//# sourceMappingURL=HistoricalController.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sensorController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sensorModel = require('../models/sensorModel');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SensorController = function () {
  function SensorController() {
    _classCallCheck(this, SensorController);
  }

  _createClass(SensorController, [{
    key: 'getAll',


    //Funcion para obtener todos los Sensores
    value: function getAll(req, res) {
      _sensorModel.sensorModel.find({}).exec(function (err, sensores) {
        if (err) return res.status(500).send({ message: 'error al buscar los sensores' });
        res.status(200).send(sensores);
      });
    }

    //Funcion para obtener un registro por ID

  }, {
    key: 'getById',
    value: function getById(req, res) {
      var sensorId = req.params.id;

      _sensorModel.sensorModel.findById(sensorId, function (err, sensor) {
        if (err) return res.status(500).send({ message: 'error al buscar el sensor' });
        if (!sensor) return res.status(404).send({ message: 'el sensor no existe' });
        res.status(200).send({ sensor: sensor });
      });
    }

    //Funcion para guardar un sensor

  }, {
    key: 'save',
    value: function save(req, res) {
      var sensor = new _sensorModel.sensorModel(req.body);

      sensor.save(function (err, newSensor) {
        if (err) return res.status(500).send({ message: 'Error al guardar el sensor' });
        res.status(200).send({ sensor: newSensor });
      });
    }

    //Funcion para editar un sensor

  }, {
    key: 'update',
    value: function update(req, res) {
      var sensorId = req.params.id;
      var sensorUpdate = req.body;

      _sensorModel.sensorModel.findByIdAndUpdate(sensorId, sensorUpdate, function (err, sensor) {
        if (err) return res.status(500).send({ message: 'error al editar el sensor' });
        if (!sensor) return res.status(404).send({ message: 'sensor no encontrado al editar' });
        res.status(200).send({ sensor: sensor });
      });
    }

    //Funcion para eliminar un sensor

  }, {
    key: 'remove',
    value: function remove(req, res) {
      var sensorId = req.params.id;

      _sensorModel.sensorModel.findByIdAndRemove(sensorId, function (err, sensor) {
        if (err) return res.status(500).send({ message: 'error al eliminar el sensor' });
        if (!sensor) return res.status(404).send({ message: 'sensor no encontrado al eliminar' });
        res.status(200).send({ message: 'sensor eliminado', id: sensor._id });
      });
    }
  }]);

  return SensorController;
}();

var sensorController = exports.sensorController = new SensorController();
//# sourceMappingURL=SensorController.js.map
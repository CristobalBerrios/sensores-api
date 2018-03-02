'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clusterController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clusterModel = require('../models/clusterModel');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClusterController = function () {
  function ClusterController() {
    _classCallCheck(this, ClusterController);
  }

  _createClass(ClusterController, [{
    key: 'getAll',
    value: function getAll(req, res) {
      _clusterModel.clusterModel.find({}).exec(function (err, clusters) {
        if (err) return res.status(500).send({ message: 'Error al buscar los cluster' });
        return res.status(200).send(clusters);
      });
    }
  }, {
    key: 'save',
    value: function save(req, res) {
      var cluster = new _clusterModel.clusterModel(req.body);

      cluster.save(function (err, newCluster) {
        if (err) return res.status(500).send({ message: 'Error al guardar el cluster' });
        return res.status(200).send(newCluster);
      });
    }
  }, {
    key: 'update',
    value: function update(req, res) {
      var clusterId = req.params.id;
      var clusterUpdate = req.body;

      _clusterModel.clusterModel.findByIdAndUpdate(clusterId, clusterUpdate, function (err, cluster) {
        if (err) return res.status(500).send({ message: 'error al editar el cluster' });
        if (!cluster) return res.status(404).send({ message: 'cluster no encontrado al editar' });
        res.status(200).send({ cluster: cluster });
      });
    }
  }, {
    key: 'remove',
    value: function remove(req, res) {
      var clusterId = req.params.id;

      _clusterModel.clusterModel.findByIdAndRemove(clusterId, function (err, cluster) {
        if (err) return res.status(500).send({ message: 'error al eliminar el cluster' });
        if (!cluster) return res.status(404).send({ message: 'cluster no encontrado al eliminar' });
        res.status(200).send({ message: 'cluster eliminado', id: cluster._id });
      });
    }
  }]);

  return ClusterController;
}();

var clusterController = exports.clusterController = new ClusterController();
//# sourceMappingURL=ClusterController.js.map
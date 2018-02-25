'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventModel = require('../models/eventModel');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventController = function () {
  function EventController() {
    _classCallCheck(this, EventController);
  }

  _createClass(EventController, [{
    key: 'getAll',
    value: function getAll(req, res) {
      _eventModel.eventModel.find({}).sort('-date').exec(function (err, events) {
        if (err) return res.status(500).send({ message: 'Error al buscar los eventos' });
        return res.status(200).send(events);
      });
    }
  }, {
    key: 'save',
    value: function save(req, res) {
      var event = new _eventModel.eventModel(req.body);

      event.save(function (err, newEvent) {
        if (err) return res.status(500).send({ message: 'Error al guardar el evento' });
        return res.status(200).send({ newEvent: newEvent });
      });
    }
  }]);

  return EventController;
}();

var eventController = exports.eventController = new EventController();
//# sourceMappingURL=EventController.js.map
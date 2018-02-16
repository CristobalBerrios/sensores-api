'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  PORT: process.env.PORT || 3001,
  DB: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/sismos',
  SECRET: 'jwtsecret'
};
//# sourceMappingURL=config.js.map
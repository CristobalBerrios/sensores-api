'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  PORT: process.env.PORT || 3001,
  DB: process.env.MONGOLAB_URL || 'mongodb://localhost:27017/sismos',
  SECRET: process.env.TOKEN_SECRET || 'jwtsecret'
};
//# sourceMappingURL=config.js.map
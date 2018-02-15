export const config = {
  PORT: process.env.PORT || 3001,
  DB: process.env.MONGOLAB_URI || 'mongodb://xiters:123@ds119598.mlab.com:19598/',
  SECRET: 'jwtsecret'
}

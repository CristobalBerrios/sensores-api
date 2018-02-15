export const config = {
  PORT: process.env.PORT || 3001,
  DB: process.env.MONGODB_URL || 'mongodb://xiters:123@ds119598.mlab.com:19598/',
  SECRET: 'jwtsecret'
}

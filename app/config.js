export const config = {
  PORT: process.env.PORT || 3001,
  DB: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/sismos',
  SECRET: 'jwtsecret'
}

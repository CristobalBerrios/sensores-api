export const config = {
  PORT: process.env.PORT || 3001,
  DB: process.env.MONGOLAB_URL || 'mongodb://localhost:27017/sismos',
  SECRET: process.env.TOKEN_SECRET || 'jwtsecret'
}

const { env } = process;

module.exports = {
  env: env.NODE_ENV,
  port: env.PORT,
  jwtSecret: env.JWT_SECRET,
  jwtExpirationInterval: env.JWT_EXPIRATION_MINUTES,
  mongoUri: env.MONGODB_CONNECTION_STRING,
  mongoTestUri: env.MONGODB_CONNECTION_STRING_TEST,

};
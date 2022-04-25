module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  // url: env('URL', 'http://localhost:1337'),
  url: env('URL'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
    secret: env('ADMIN_JWT_SECRET', 'ac91ef4d91cd244615f0856ff11d6b52'),
  },
});
 
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac91ef4d91cd244615f0856ff11d6b52'),
  },
  url: env('URL_ADMIN', '/admin'), 
});
 
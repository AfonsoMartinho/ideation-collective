module.exports = ({ env }) => ({
    url: env("MY_HEROKU_URL"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["c25df80025592b08", "fd5b85eefdfb0dad"]),
    }, 
  }); 
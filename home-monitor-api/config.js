const config = {
    db: {
      host: "127.0.0.1",
      port: 3307,
      user: "root",
      password: "crvh1234",
      database: "home_monitor",
    },
    corsOptions : {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200
    },
    cronValue : "1 8-17 * * 1-6"
  };
  
  module.exports = config;
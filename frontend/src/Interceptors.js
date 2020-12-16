var axios = require("axios");


axios.interceptors.request.use(
  function(config) {
    let jwtToken = localStorage.getItem("authorization");
    if (typeof(jwtToken) != "undefined") {
      config.headers["Authorization"] = "Bearer " + jwtToken;
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);
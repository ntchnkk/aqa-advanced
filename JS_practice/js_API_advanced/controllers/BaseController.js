const axios = require('axios').default;
const { baseURL, timeout } = require('../config.js');

class BaseController {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
      validateStatus: () => true,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }
}

module.exports = BaseController;

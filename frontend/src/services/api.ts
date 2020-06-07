import axios from 'axios'
var ip = require('ip');

const api = axios.create({
  baseURL: `http://${ip.address()}:3333`
});

export default api;
module.exports = {
  method_post: { "method": "POST" },
  method_get: { "method": "GET" },

  // API call with Body Parameter
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },

  axios_config: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    },
  },
  requestOptions: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  },
  api_base_url: 'http://165.227.227.1:3005/api/' // Development
}

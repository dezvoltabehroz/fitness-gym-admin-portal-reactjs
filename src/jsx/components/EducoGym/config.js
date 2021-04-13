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
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjE3OTUyODg0LCJleHAiOjE2MTgwMzkyODR9.fEowp_JJTU9ZuU4xSE9jsrcub0qia0jBL0ZPtXbMNi0'
    },
  },
  requestOptions: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjE3OTUyODg0LCJleHAiOjE2MTgwMzkyODR9.fEowp_JJTU9ZuU4xSE9jsrcub0qia0jBL0ZPtXbMNi0'
    }
  },
  api_base_url: 'http://18.204.20.183:3005/api/' // Development
}

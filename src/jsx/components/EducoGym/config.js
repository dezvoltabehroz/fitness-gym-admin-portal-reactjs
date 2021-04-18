
console.log(`localStorage.getItem("token") : `, localStorage.getItem("token"))

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
      // 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE4NzY0MTM0LCJleHAiOjE2MTg4NTA1MzR9.qPcFj5C5239BtwPyXGG7Qdpo9K363gqjKNdgI4_9Bt0'
    },
  },
  requestOptions: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
      // 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE4NzY0MTM0LCJleHAiOjE2MTg4NTA1MzR9.qPcFj5C5239BtwPyXGG7Qdpo9K363gqjKNdgI4_9Bt0'
    }
  },
  api_base_url: 'http://165.227.227.1:3005/api/' // Development
}

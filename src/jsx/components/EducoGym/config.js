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
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjE3NzM4NDg0LCJleHAiOjE2MTc4MjQ4ODR9.dtxush27S1Zbh4JkoagbROPmW7q2iJU6BF4bUdrkGXk'
      },
    },
  
    api_base_url: 'http://18.204.20.183:3005/api/' // Development
  }
  
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
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE4Mzk2ODg1LCJleHAiOjE2MTg0ODMyODV9.RfrzQ6_b72zfsIrQWVFgcAsva0bXBQxEtpkRCN0MySs'
    },
  },
  requestOptions: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE4Mzk2ODg1LCJleHAiOjE2MTg0ODMyODV9.RfrzQ6_b72zfsIrQWVFgcAsva0bXBQxEtpkRCN0MySs'
    }
  },
  api_base_url: 'http://18.204.20.183:3005/api/' // Development
}

export default {
  register: ({ commit }, payload) => {
    const axios = require('axios')
    console.log('payload', payload)
    axios.post('http://127.0.0.1:8000/profilemanager/register', JSON.stringify(payload))
      .then((res) => {
        console.log(res)
        commit('register', payload)
      })
      .catch((error) => {
        console.error('error: ', error)
      })
  }
}

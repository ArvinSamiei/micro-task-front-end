export default {
  register: ({ commit }, payload) => {
    const axios = require('axios')
    console.log('payload', payload)
    axios.post('http://127.0.0.1:8000/profilemanager/register', JSON.stringify(payload))
      .then((res) => {
        console.log(res)
        if (res.data === 'SUCCESS') {
          commit('register', res)
        } else if (res.data === 'username') {

        } else if (res.data === 'email') {

        } else if (res.data === 'phone number') {

        }
      })
      .catch((error) => {
        console.error('error: ', error)
      })
  },
  login: ({ commit }, payload) => {
    const axios = require('axios')
    console.log('payload', payload)
    axios.post('http://127.0.0.1:8000/profilemanager/login', JSON.stringify(payload))
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error('error: ', error)
      })
  }
}

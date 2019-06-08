export default {
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      fetch('http://localhost:8000/token-auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.status !== 200) {
            throw new Error('Not 200 response')
          } else {
            return res.json()
          }
        })
        .then(json => {
          localStorage.setItem('token', json.token)
          commit('auth_success',
            {
              token: json.token,
              user: json.user
            })
          resolve(json)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  register ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      // // axios({
      // //   url: 'http://localhost:8000/profilemanager/register',
      // //   data: user,
      // //   method: 'POST'
      // // })
      //   .then(resp => {
      //     const token = resp.data.token
      //     const user = resp.data.user
      //     localStorage.setItem('token', token)
      //     axios.defaults.headers.common['Authorization'] = token
      //     commit('auth_success', token, user)
      //     resolve(resp)
      //   })
      //   .catch(err => {
      //     commit('auth_error', err)
      //     localStorage.removeItem('token')
      //     reject(err)
      //   })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      // delete fetch.defaults.headers.common['Authorization']
      resolve()
    })
  },
  nav ({ commit }) {
    commit('nav')
  }
}

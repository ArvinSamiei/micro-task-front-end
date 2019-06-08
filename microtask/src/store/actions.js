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
  register ({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      console.log(JSON.stringify(data))
      fetch('http://localhost:8000/profilemanager/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.status !== 201) {
            throw new Error('Not 201 response')
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

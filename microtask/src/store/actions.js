export default {
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      const axios = require('axios')
      axios({
        method: 'post',
        url: 'http://localhost:8000/token-auth/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          commit('auth_success',
            {
              token: res.data.token,
              user: res.data.user
            })
          resolve(res)
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
      const axios = require('axios')
      axios({
        method: 'post',
        url: 'http://localhost:8000/core/users/',
        headers: {
          'Content-Type': 'application/json'
        },
        datas: JSON.stringify(data)
      })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          commit('auth_success',
            {
              token: res.data.token,
              user: res.data.user
            })
          resolve(res)
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
      resolve()
    })
  },
  nav ({ commit }) {
    commit('nav')
  },
  changePassword ({ commit }, data) {
    return new Promise((resolve, reject) => {
      const axios = require('axios')
      console.log(localStorage.getItem('token'))
      axios.defaults.headers.common['Authorization'] = `JWT ${localStorage.getItem('token')}`
      console.log(data)
      axios({
        method: 'put',
        url: 'http://localhost:8000/core/change_password',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

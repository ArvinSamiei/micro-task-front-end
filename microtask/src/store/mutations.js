export default {
  auth_request (state) {
    state.status = 'loading'
  },
  auth_success (state, { token, user }) {
    state.status = 'success'
    state.token = token
    console.log(user)
    state.user = user
  },
  auth_error (state) {
    state.status = 'error'
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = {}
  },
  nav (state) {
    state.nav = !state.nav
  }
}

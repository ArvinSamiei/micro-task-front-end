export default {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  nav: state => state.nav
}

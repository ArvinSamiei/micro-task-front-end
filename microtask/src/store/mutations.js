export default {
  register: (state, user) => {
    state['firstName'] = user['firstName']
    state['lastName'] = user['lastName']
    state['username'] = user['username']
    state['email'] = user['email']
    state['nationalid'] = user['nationalid']
    state['phoneNum'] = user['phoneNum']
    state['country'] = user['country']
    state['city'] = user['city']
  }
}

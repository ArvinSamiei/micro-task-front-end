export default {
  login: (state, user) => {
    state['firstName'] = user['firstName']
    state['lastName'] = user['lastName']
    state['username'] = user['username']
    state['type'] = user['type']
    state['email'] = user['email']
    state['nationalid'] = user['nationalid']
    state['phoneNum'] = user['phoneNum']
    state['country'] = user['country']
    state['city'] = user['city']
  },
  clear: (state) => {
    state['firstName'] = ''
    state['lastName'] = ''
    state['username'] = ''
    state['type'] = ''
    state['email'] = ''
    state['nationalid'] = ''
    state['phoneNum'] = ''
    state['country'] = ''
    state['city'] = ''
  },
  register: (state, res) => {
    
  }
}

const user = {
  state: {
    token: '',
    avatar: '',
    name: '',
    roles: [],
    permissions: []
  },
  mutations: {
    storeToken: (state, newVal) => {
      state.token = newVal
      console.log(state.token, '----这儿存储的token')
    }
  },
  actions: {

  }
}
export default user

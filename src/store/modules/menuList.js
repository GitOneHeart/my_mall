
const state = {
  menulist: {}
}
const mutations = {
  getmenulist: (state, newVal) => {
    state.menulist = newVal
    console.log(state.menulist)
  }
}
export default {
  state,
  mutations
}

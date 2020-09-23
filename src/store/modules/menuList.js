
const state = {
  menulist: {},
  tabsValue: []
}
const mutations = {
  getmenulist: (state, newVal) => {
    state.menulist = newVal
    console.log(state.menulist)
  },
  /**
     * 删除标签页
     * @param {*} state
     * @param {*} targetPath
     */
  REMOVE_TABS_VALUE (state, targetPath) {
    state.tabsValue = state.tabsValue.filter(item => item.path !== targetPath)
  },
  /**
    * 添加标签页，在MenuItem组件触发
    * @param {*} state
    * @param {*} data
  */
  ADD_TABS_VALUE (state, data) {
    // 判断是否已经存在
    // console.log(state.tabsValue, '-----state.tabsValue')
    const isExist = state.tabsValue.some(item => item.path === data.path)
    // 如果不存在 则添加
    if (!isExist) {
      state.tabsValue.push(data)
    }
  }
}
export default {
  state,
  mutations
}

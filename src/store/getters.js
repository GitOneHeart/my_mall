const getters = {
  sidebar: state => state.app.sidebar,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  token: state => state.user.token,
  cachedViews: state => state.tagsView.cachedViews
}
export default getters

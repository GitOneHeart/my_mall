import variables from '@/assets/styles/element-variables.scss'
import defaultSettings from '@/settings'
const { sidebarLogo, fixedHeader, tagsView } = defaultSettings
const state = {
  theme: variables.theme,
  sidebarLogo: sidebarLogo,
  fixedHeader: fixedHeader,
  tagsView: tagsView
}

export default {
  state
}

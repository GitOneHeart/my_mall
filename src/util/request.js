console.log(process.env.NODE_ENV, '-----当前环境')
let BASE_URL = ''
switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = 'http://112.126.87.221:8280'
    // BASE_URL = 'http://112.126.87.221:8280'
    // BASE_URL = 'http://112.126.87.221:8280'
    break
  case 'production':
    BASE_URL = 'http://112.126.87.221:8280'
    break
  default:
    BASE_URL = 'http://112.126.87.221:8280'
    break
}
export default {
  BASE_URL
}

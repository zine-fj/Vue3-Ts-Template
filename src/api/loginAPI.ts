import { environment, requestUrl } from '@/utils/environment'
import request from '@/plugin/request'

// get 请求 (param) - params: { param }
// post 请求 (data) - data

const isEnviroment = environment === 'development'

export function getLogin () {
  return request({
    method: 'get',
    url: isEnviroment ? '/mock/login.json' : requestUrl + '/api/login'
  })
}

export function getLoginOut () {
  return request({
    method: 'get',
    url: isEnviroment ? '/mock/loginout.json' : requestUrl + '/api/login'
  })
}

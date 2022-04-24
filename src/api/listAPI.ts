import { environment, requestUrl } from '@/utils/environment'
import request from '@/plugin/request'

const isEnviroment = environment === 'development'

export function getList () {
  return request({
    method: 'get',
    url: isEnviroment ? '/mock/list.json' : requestUrl + '/api/list'
  })
}

export function getDetail (id: string[] | string) {
  return request({
    url: isEnviroment ? '/mock/detail.json' : requestUrl + '/api/detail',
    method: 'get',
    params: { id }
  })
}

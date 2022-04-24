
/**
 * @description: 非空校验
 * @param string
 * @return boolean
 */
 const isEmpty = (val: string): boolean => {
  const reg = /^\s*$/
  let result = null
  if (reg.test(val) || val === undefined || val === null) {
    result = true // 空
  } else {
    result = false // 非空
  }
  return result
}

/**
 * @description: 邮箱校验
 * @param string
 * @returns boolean
 */
const isEmail = (email: string): boolean => {
  const reg = /^\w+@[a-z0-9]+\.[a-z]+$/i
  return reg.test(email)
}

export default {
  isEmpty,
  isEmail
}

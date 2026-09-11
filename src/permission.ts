import { useLoginUserStore } from '@/stores/useLoginUserStore'
import { message } from 'ant-design-vue'
import router from '@/router'
import { ACCESS } from '@/constant/access'

// 是否为首次获取登录用户
let firstFetchLoginUser = true

/**
 * 全局权限校验
 */
router.beforeEach(async (to, from, next) => {
  const loginUserStore = useLoginUserStore()
  let loginUser = loginUserStore.loginUser
  if (firstFetchLoginUser) {
    await loginUserStore.fetchLoginUser()
    loginUser = loginUserStore.loginUser
    firstFetchLoginUser = false
  }
  if (to.meta.role === ACCESS.ADMIN && loginUser.userRole !== ACCESS.ADMIN) {
    message.error('没有权限')
    next(`/?redirect=${to.fullPath}`)
    return
  }
  if (to.meta.requiresAuth && !loginUser.id) {
    message.error('请先登录')
    next(`/user/login?redirect=${to.fullPath}`)
    return
  }
  next()
})

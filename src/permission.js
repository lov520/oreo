import router from './router'
import store from './store'
import {
  Message
} from 'element-ui'
import getPageTitle from '@/utils/get-page-title'
import storage from '@/utils/storage'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  document.title = getPageTitle(to.meta.title)

  const hasToken = storage.getItem('token')

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({
        path: '/'
      })
    } else {
      const hasGetUserInfo = store.getters.name || 'oreo'
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo')

          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {})

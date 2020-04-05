import {
  resetRouter
} from '@/router'
import storage from '@/utils/storage'

const getDefaultState = () => {
  return {
    token: storage.getItem('token'),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    // const {
    //   username,
    //   password
    // } = userInfo
    return new Promise((resolve, reject) => {
      const data = {
        token: 'token'
      }
      commit('SET_TOKEN', data.token)
      storage.setItem('token', data.token)
      resolve()
      // login({
      //   username: username.trim(),
      //   password: password
      // }).then(response => {
      //   const {
      //     data
      //   } = response
      //   commit('SET_TOKEN', data.token)
      //   setToken(data.token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // get user info
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      resolve({
        name: 'oreo'
      })
      // getInfo(state.token).then(response => {
      //   const {
      //     data
      //   } = response

      //   if (!data) {
      //     reject('Verification failed, please Login again.')
      //   }
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // user logout
  logout({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      storage.removeItem('token')
      resetRouter()
      commit('RESET_STATE')
      resolve()
      location.reload()
      // logout(state.token).then(() => {
      //   storage.removeItem('token')
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      storage.removeItem('token')
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

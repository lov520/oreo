import Vue from 'vue'
import store from '@/store'
import router from '@/router'

const createPortal = (com, props) => {
  return new Promise((resolve, reject) => {
    const Ctr = Vue.extend(com)
    const instance = new Ctr({
      router,
      propsData: {
        ...props
      },
      beforeCreate() {
        this.$store = store
      },
      created() {
        this.$once('sure', arg => {
          this.$destroy()
          resolve(arg)
        })
        this.$once('close', arg => {
          this.$destroy()
          reject(arg)
        })
      },
      beforeDestroy() {
        this.visible = false
        this.$off('sure')
        this.$off('on')
        document.body.removeChild(this.$el)
      }
    })
    instance.$mount()
    document.body.appendChild(instance.$el)
  })
}

export default createPortal

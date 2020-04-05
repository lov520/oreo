<template>
  <div class="main">
    <div class="header">
      <el-button @click="handleToggle">toggle</el-button>
      <el-button @click="handleUpload">上传</el-button>
      <el-button @click="handleLoginOut">退出登录</el-button>
    </div>
    <div is="div" v-if="!equal" ref="scrollList" class="fav-list scroll-list">
      <div
        v-for="(img, i) in imgs"
        :key="i"
        :style="{
          'flex-grow': img.width * 100 / img.height,
          'flex-basis': img.width * 240 / img.height + 'px',
        }"
      >
        <i :style="{'padding-bottom': img.height / img.width * 100 + '%' }" />
        <img v-lazy="img.url">
      </div>
    </div>
    <el-row
      v-if="equal"
      ref="scrollList"
      class="equal-fav-list scroll-list"
      :gutter="10"
      style="flex-wrap: wrap; padding: 0 5px"
      type="flex"
    >
      <el-col
        v-for="(img, i) in imgs"
        :key="i"
        :xs="24"
        :md="12"
        :lg="8"
        :xl="6"
        style="height: 350px; overflow: hidden; flex-grow: 1; margin-bottom: 10px"
      >
        <el-image
          :src="img.url"
          style="width: 100%; height: 100%;"
          fit="cover"
          lazy
        >
          <div slot="placeholder" style="background: lightblue; width: 100%; height: 100%" />
        </el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Upload from './upload'

export default {
  data() {
    return {
      imgArr: [
        {
          'url': 'https://xieranmaya.github.io/images/cats/photo-103450229.jpg',
          'width': 675,
          'height': 900
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/photo-108273877.jpg',
          'width': 1170,
          'height': 780
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/photo-115203323.jpg',
          'width': 1170,
          'height': 780
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/photo-23583825.jpg',
          'width': 2048,
          'height': 1536
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-123942383.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-124559545.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-132046989.jpg',
          'width': 1170,
          'height': 780
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-132118343.jpg',
          'width': 2000,
          'height': 1339
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-132311221.jpg',
          'width': 1920,
          'height': 1080
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-132586903.jpg',
          'width': 2000,
          'height': 1334
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-135203031.jpg',
          'width': 1000,
          'height': 668
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-135626379.jpg',
          'width': 2000,
          'height': 1500
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-136947953.jpg',
          'width': 2000,
          'height': 1348
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-138378295.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-138436811.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-142950305.jpg',
          'width': 2000,
          'height': 1125
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-143046061.jpg',
          'width': 843,
          'height': 1000
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-143181649.jpg',
          'width': 2000,
          'height': 1298
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-144530143.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-144730939.jpg',
          'width': 1000,
          'height': 1000
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-145414771.jpg',
          'width': 780,
          'height': 1170
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-146038669.jpg',
          'width': 2000,
          'height': 1335
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-146231033.jpg',
          'width': 2000,
          'height': 1335
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-146914861.jpg',
          'width': 843,
          'height': 1000
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-147877407.jpg',
          'width': 2000,
          'height': 1334
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-147969173.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-148015373.jpg',
          'width': 1170,
          'height': 781
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-148704233.jpg',
          'width': 1170,
          'height': 884
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-148928293.jpg',
          'width': 1170,
          'height': 781
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-148950715.jpg',
          'width': 1170,
          'height': 775
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-21951271.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-21964829.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-22618399.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-31201539.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-34598868.jpg',
          'width': 542,
          'height': 768
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-47252094.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-51980510.jpg',
          'width': 666,
          'height': 1000
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-55601508.jpg',
          'width': 666,
          'height': 1000
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-65681789.jpg',
          'width': 1840,
          'height': 1232
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-70461471.jpg',
          'width': 1000,
          'height': 1000
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-71801901.jpg',
          'width': 2000,
          'height': 1335
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-71913567.jpg',
          'width': 2000,
          'height': 1328
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-72223295.jpg',
          'width': 2000,
          'height': 1335
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-72620185.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-74402039.jpg',
          'width': 666,
          'height': 1000
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-75097491.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-75186237.jpg',
          'width': 2000,
          'height': 1333
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-79250373.jpg',
          'width': 2000,
          'height': 1325
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-79692589.jpg',
          'width': 670,
          'height': 1000
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-7979718.jpg',
          'width': 1024,
          'height': 680
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-7980252.jpg',
          'width': 1024,
          'height': 680
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-81390687.jpg',
          'width': 2000,
          'height': 1591
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-81988949.jpg',
          'width': 667,
          'height': 1000
        },
        {
          'url': 'https://xieranmaya.github.io/images/cats/stock-photo-83149705.jpg',
          'width': 775,
          'height': 1170
        }
      ],
      imgs: [],
      equal: true,
      isLoading: false
    }
  },
  beforeDestroy() {
    this.removeListen()
  },
  mounted() {
    this.addListen()
    this.imgs = this.imgArr
  },
  methods: {
    loadImg() {
      setTimeout(() => {
        this.imgs = this.imgs.concat(this.imgArr)
      }, 1000)
    },
    handleLoginOut() {
      this.$store.dispatch('user/logout')
    },
    handleUpload() {
      this.$popup(Upload).then(() => {

      }).catch(() => {})
    },
    handleScroll() {
      const { scrollHeight, clientHeight } = document.body
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (scrollTop + clientHeight + 300 >= scrollHeight && !this.isLoading) {
        this.isLoading = true
        setTimeout(() => {
          console.log('why')
          this.isLoading = false
          this.imgs = this.imgs.concat(this.imgArr)
        }, 500)
      }
    },
    getScrollDom() {
      return this.$refs.scrollList.$el || this.$refs.scrollList
    },
    addListen() {
      document.addEventListener('scroll', this.handleScroll)
    },
    removeListen() {
      document.removeEventListener('scroll', this.handleScroll)
    },
    handleToggle() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
      this.removeListen()
      this.equal = !this.equal
      this.$nextTick(() => {
        this.addListen()
      })
    }
  }
}
</script>

<style lang="scss" >
.main {
  padding-top: 60px;
  border-bottom: 1px solid #eeeff2;
  .header {
    position: fixed;
    height: 60px;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 99;
    padding: 0 5px;
    justify-content: flex-end;
  }
  .fav-list{
      display: flex;
      flex-wrap: wrap;
      margin: 2px;
    }
    .fav-list::after{
      content: '';
      flex-grow: 999999999;
      order: 999999999;
    }
    .fav-list > div{
      margin: 2px;
      // background-color: violet;
      position: relative;
    }
    .fav-list > div > i {
      display: block;
      background-color: lightblue;
      /* display: none; */
    }
    .fav-list > div > img {
      position: absolute;
      vertical-align: bottom;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .fav-list > .placeholder{
      flex-grow: 100;
      flex-basis: 240px;
      height: 0;
      margin: 0;
    }
}
</style>

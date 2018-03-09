import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios,axios)
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    markdownArea: false,
    rightSidebarPop: false,
    RightSidebarPopData: '',
    weatherData: {
      city: '110101', // adcode
      type: 'base',  // base: 实况天气 all: 预报天气
      details: []
    },
    rightSidebarData: [
      {
        num: "0",
        content: {
            article: [
                  "Blog更新记录",
                  "20180309正式更新",
                  "主要为此侧边栏功能更新",
                  "",
                  "新增天气",
                  "暂只支持北京",
                  "优化排版"
            ]
        }
      },
      {
        num: "1",
        content:  {
            article: [
                  "项目记录",
                  "20180309",
                  "共6项目",
                  "分别为 ''我的笔记'' 'cnode' 'kaka' '洛神云' '云的世界' j'ust 4 fun' 其中just 4 fun是修改而已"
            ]
        }
      },
      {
        num: "2",
        content:  {
            article: [
                  "test项目",
                  "寻觅中"
            ]
        }
      },
      {
        num: "3",
        content:  {
            article: [
                  "技术更新",
                  "Blog需要本地修改代码build上传至git仓库",
                  "原因",
                  "无专用的云主机"
            ]
        }
      }
    ],
  },
  mutations: {
    markdownAreaAction(state) {
      state.markdownArea = !state.markdownArea
    },
    rightSidebarPop(state) {
      state.rightSidebarPop = !state.rightSidebarPop
    },
    RightSidebarPopChange(state,d) {
      state.RightSidebarPopData = d
      // console.log('store',d);
    },
    weatherRequest() {
      let req =  () => {
          let frontTemp = 'http://restapi.amap.com/v3/weather/weatherInfo?'
          const key = 'f9ebe1be7c473f3de4b281c9508efb30'
          let city = this.state.weatherData.city
          let extensions = this.state.weatherData.type
          axios.get(`${frontTemp}&key=${key}&city=${city}&extensions=${extensions}`)
          .then((res) => {
            this.state.weatherData.details = res.data.lives[0]
          })
        }
        req()
        setInterval(req,540000)
    }
  }
})

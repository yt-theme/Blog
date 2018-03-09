<template>
  <div class="right-sidebar-wrap">
    <div class="article">
      <ul v-for="data in articleData">
        <li class="articleList">
          <h3>{{data.num}}</h3>
          <p v-on:click="LookDt">{{data.content.article[0]}}</p>
        </li>
      </ul>
    </div>
    <div class="weather">
      <h3>城市: {{this.$store.state.weatherData.details.province}}
        {{this.$store.state.weatherData.details.city}}</h3>
      <h3>温度: {{this.$store.state.weatherData.details.temperature}}℃</h3>
      <h3>天气: {{this.$store.state.weatherData.details.weather}}</h3>
      <h3>风向: {{this.$store.state.weatherData.details.winddirection}}
        {{this.$store.state.weatherData.details.windpower}}级</h3>
    </div>
    <RightSidebarPop/>
  </div>
</template>
<script>
import RightSidebarPop from './RightSidebarPop'
export default {
  name: 'RightSidebar',
  data () {
    return {
      articleData : this.$store.state.rightSidebarData
    }
  },
  methods: {
    LookDt: function ($event) {
      // send to pop
      let d = $event.target.parentNode.children[0].innerText
      this.$store.commit('RightSidebarPopChange',d)
      if (this.$store.state.rightSidebarPop === false) {
        this.$store.commit('rightSidebarPop')
      }
    }
  },
  components: {
    RightSidebarPop
  },
  created: function() {
      this.$store.commit('weatherRequest')
  }
}
</script>
<style scoped>
  .right-sidebar-wrap {
    position: fixed;
    top: 2.9em;
    bottom: 0.9em;
    right: 0;
    width: 19vw;
    max-width: 300px;
    height: auto;
    background-color: rgba(255,255,255,0.2);
  }
  .article {
    height: 50%;
    min-height: 200px;
    border: 0px solid #04282C;
    overflow: auto;
    border-radius: 4px;
    box-shadow: 0 0 8px #6cf inset,0 0 8px #6cf;
    padding: 0.7em;
    margin: 0.35em;
  }
  .articleList {
    display: flex;
    justify-content: flex-start;
    line-height: 1.5;
    cursor: alias;
  }
  .articleList> * {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 3em;
  }
  .articleList> h3 {
    color: #ccc;
    text-shadow: 0 0 8px #ccc;
    width: 10%;
  }
  .articleList> p {
    width: 80%;
    color: #ccc;
    text-shadow: 0 0 8px #000;
    margin-left: 0.7em;
  }
  .weather {
    height: 50%;
    padding: 1.4em;
  }
  .weather> h3 {
    line-height: 3em;
    color: #ccc;
    text-shadow: 0 0 3px #000;
  }
</style>

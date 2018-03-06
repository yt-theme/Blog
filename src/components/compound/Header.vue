<template>
<header>
  <div class="nav-wrap">
    <img class="logo" src="../../assets/logo.png"></img>
    <ul class="nav">
      <li v-bind:class="{eventButtonActive : eventButton}">
        <a  href="#" v-on:click="MarkdownSlideout">Event</a>
      </li>
      <li><a href="#">Github</a></li>
      <li><a href="#">Gitbook</a></li>
      <li><a href="#">Project</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </div>
  <time  class="header-time">{{headerTime}}</time>
</header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      eventButton: false,
      eventButtonActive: 'eventButtonActive',
      headerTime: 0
    }
  },
  methods: {
    MarkdownSlideout() {
      console.log('触发了Event, vuex',this.$store.state.markdownArea);
      // console.log(this.$store.state.markdownArea);
      this.$store.commit('markdownAreaAction')
      this.eventButton = !this.eventButton
    },
    CreateHeaderTime() {
      setInterval(()=>{
          let time1 = new Date()
          let weekday = time1.getDay()
          switch(weekday) {
            case 1:
              weekday = "一"
              break;
            case 2:
              weekday = "二"
              break;
            case 3:
              weekday = "三"
              break;
            case 4:
              weekday = "四"
              break;
            case 5:
              weekday = "五"
              break;
            case 6:
              weekday = "六"
              break;
            case 0:
              weekday = "日"
              break;
          }
          this.headerTime = "星期" + weekday + " " + time1.toLocaleString()
        },1000)
    }
  },
  mounted() {
    this.CreateHeaderTime()
  }
}
</script>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  background-color: rgba(255,255,255,0.8);
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
  padding: 4px;
  font-size: 0.8125em;
  color: #666;
}
.nav-wrap {
  display: flex;
  align-items: center;
}
.logo {
  display: block;
  max-width: 17px;
  max-height: 17px;
  margin-right: 1.57%;
  margin-left: 0.785%;
  cursor: pointer;
}
.eventButtonActive {
  background-color: #aaa;
}
.nav {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
.nav li{
  display: block;
  width: 100%;
  margin: 0 1.23%; /*3/1280*/
  padding: 2px 3.2%;
  text-align: center;
  border-radius: 6px;
}
@keyframes nav {
  0%   { background-color: #8c8c8c;}
  100%  { background-color: #aaa;}
}
.nav li a {
  width: 100%;
  height: 100%;
   /*3/1280*/
}
.nav li:hover {
  animation: nav 0.7s forwards;
}
.header-time {
  background-color: #e1e1e1;
  background-color: rgba(0,0,0,0)
}
</style>

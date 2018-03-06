<template>
  <div class="wrap">
    <Header/>

    <div class="markdown-area" ref="mdArea" v-bind:class="{markdownActive : markdownArea}">
      <div class="markdown-area-header" ref='mdHeader' @mousedown="mHandleMouseDown($event)">
        Attention
      </div>
      <Markdown/>
    </div>
    <ArticleWrap/>
    <RightSidebar/>
  </div>
</template>
<script>
import Header from './compound/Header'
import Markdown from './compound/Markdown'
import ArticleWrap from './compound/ArticleWrap'
import RightSidebar from './compound/RightSidebar'
export default {
  name: 'Index',
  data() {
    return {
      startX:0,
      startY:0,
      mdArea:null,
    }
  },
  components: {
    Header,
    Markdown,
    ArticleWrap,
    RightSidebar
  },
  methods: {
    mHandleMouseDown: function($event) {
      let mdArea = this.$refs.mdArea
      // let mdHeader = this.$refs.mdHeader
      let startX = $event.clientX-mdArea.offsetLeft
      let startY = $event.clientY-mdArea.offsetTop
      this.startX = startX
      this.startY = startY
      this.mdArea = mdArea
      console.log("startx,y",startX,startY)
      console.log("objmdArea",mdArea.offsetTop)
      // console.log("mdheader",mdHeader)\
      this.mdArea.onmousemove = this.mHandleMouseMove
      document.onmouseup = this.mHandleMouseUp
    },
    mHandleMouseMove: function($event) {
      this.mdArea.style.left = $event.clientX-this.startX+"px"
      this.mdArea.style.top  = $event.clientY-this.startY+"px"
    },
    mHandleMouseUp: function() {
      this.mdArea.onmousemove = null
      this.mdArea.onmouseup   = null
    }
  },
  computed: {
    markdownArea() {
      return this.$store.state.markdownArea
    }
  }
}
</script>
<style scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  padding-top: 41px;
  background: url("../assets/bgi.png") no-repeat;
  background-size: cover;
}
.markdown-area {
  min-width: 600px;
  height: 77vh;
  position: fixed;
  top: 10vh;
  left: 0;
  border:1px solid rgba(0,0,0,0);
  /*border-radius: 15px;*/
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
  background-color: #ffffff;
  padding: 15px;
  display: none;
  z-index: 101;
}
.markdownActive {
  display: block;
}
.markdown-area-header {
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 2em;
  background-color: #ccc;
  text-align: center;
  line-height: 2em;
  color: #666;
  cursor: move;
  z-index: 101;
}
</style>

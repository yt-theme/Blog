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
    <RightSidebarPop/>
  </div>
</template>
<script>
import RightSidebarPop from './RightSidebarPop'
// import articleData from '../../rightSidebarArticle'
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
      console.log('sidebar',d);
      this.$store.commit('RightSidebarPopChange',d)
      if (this.$store.state.rightSidebarPop === false) {
        this.$store.commit('rightSidebarPop')
      }
    }
  },
  components: {
    RightSidebarPop
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
  }
  .articleList> h3 {
    color: #ccc;
    text-shadow: 0 0 8px #ccc;
    width: 10%;
  }
  .articleList> p {
    width: 80%;
    color: #999;
    text-shadow: 0 0 3px #666;
    margin-left: 0.7em;
  }
</style>

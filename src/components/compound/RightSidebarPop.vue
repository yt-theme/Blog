<template>
  <div class="popWrap" v-bind:class="{popWrapActive : this.$store.state.rightSidebarPop}">
    <div>
      <div v-on:click="Close" class="popWrapClose"><i></i></div>
        <h2>{{articleT}}</h2>
      <ul>
        <li v-for='rspdata in article'>
          <template v-for='articleData in rspdata.article'>
            <p>{{articleData}}</p>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import articleData from '../../rightSidebarArticle'
export default {
  name: 'RightSidebarPop',
  data () {
    return {
      // articleData : ,
      // closeStatus : false
    }
  },
  methods: {
    Close: function () {
      console.log('pop',this.$store.state);
      this.$store.commit('rightSidebarPop')
      // this.closeStatus = this.$store.state.rightSidebarPop
    }
  },
  computed: {
    article() {
      let dataArr = this.$store.state.rightSidebarData[this.$store.state.RightSidebarPopData]
      return dataArr
    },
    articleT() {
      // let dataArr1 = this.$store.state.rightSidebarData[this.$store.state.RightSidebarPopData]
      // let dataT = dataArr1.content.article[0]
      // return dataT
    }
  }
}
</script>
<style>
.popWrap {
  position: relative;
  position: fixed;
  right: -50vw;
  border-radius: 8px;
  top: 15%;
  width: 50vw;
  height: 70vh;
  background-color: #04282C;
  margin-right:1em;
  padding: 1em;
  transition: all 0.3s;
  box-shadow: 0 0 8px #38989A;
  transition: all 0.5s;
}
@keyframes popWrap {
  0%   { box-shadow: 0 0 8px #38989A; }
  55%  { box-shadow: 0 0 48px #38989A; }
  100% { box-shadow: 0 0 8px #38989A; }
}
.popWrap:hover {
  animation: popWrap 5s ease-out infinite;
}
.popWrap> div {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.popWrap> div> h2 {
  color: #ccc;
  font-size: 1.4em;
  text-align: center;
}
.popWrapActive {
  right: 25%;
}
.popWrap> div> ul {
  margin-top: 1em;
  list-style: none;
}
.popWrap> div> ul> li {
  color: #838383;
  line-height: 1.7;
}
.popWrapClose {
  position: absolute;
  top: -0.7em;
  left: -0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 1.5vw;
  min-width: 15px;
  height: 1.5vw;
  min-height: 15px;
  background-color: #6cf;
  box-shadow: 0 0 8px #38989A;
  cursor: pointer;
}
.popWrapClose:hover {
  transform: rotate(180deg);
  transition: transform 0.3s;
  animation: popWrap 2.5s infinite;
}
.popWrapClose> i {
  display: block;
  width: 100%;
  border: 1px solid #04282C;
}
</style>

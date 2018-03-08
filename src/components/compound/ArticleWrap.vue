<template>
  <div class="article-wrap">
    <Section/>
  </div>
</template>
<script>
import Section from './Section'
export default {
  name : 'ArticleWrap',
  components: {
    Section
  }
}
</script>
<style scoped>
  .article-wrap {
    position: fixed;
    top: 2.9em;
    bottom: 0.9em;
    left: 0;
    width: 80vw;
    min-width: 500px;
    height: auto;
    background-color: rgba(255,255,255,0.2);
  }
</style>

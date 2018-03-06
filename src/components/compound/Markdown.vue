<template>
  <div class="markdown-wrap">
    <div class="comments" v-for="comment in comments">
      <vue-markdown :source="comment"></vue-markdown>
    </div>
  </div>
</template>
<script scoped>
import VueMarkdown from 'vue-markdown'
import mk from '../../markdown'
export default {
  name: 'Markdown',
  data () {
    return {
      comments: mk
    }
  },
  components: {
    VueMarkdown
  }
}
</script>
<style scoped>
  .markdown-wrap {
    width: 100%;
    height: 100%;
    margin-top: 2em;
    overflow: auto;
    line-height: 1.5;
    padding-bottom: 2em;
  }
</style>

<template>
  <div class="r_wrap">
    <template v-for="dd in dockData">
      <a v-bind:href="dd.link" class="dock-section-wrap" target="view_window">
        <img v-bind:src="dd.logo"/>
      </a>
    </template>
  </div>
</template>
<script>
import dockSectionConfig from '../../DockSectionConfig'
export default {
  name: 'DockSection',
  data () {
    return {
      dockData : dockSectionConfig.data
    }
  },
  mounted: function() {

  }
}
</script>
<style scoped>
  .r_wrap {
    display: flex;
  }
  .dock-section-wrap {
    display: block;
    height: 45px;
    width: 45px;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #000;
    border-radius:10%;
    margin: 0 10px;
    transition: all 0.2s;
  }
  .dock-section-wrap:hover {
    border: 1px solid #6cf;
    box-shadow: 0 0 21px #6cf;
  }
  .dock-section-wrap> img {
    width: 100%;
    height: auto;
  }
</style>

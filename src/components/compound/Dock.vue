<template>
  <div class="dock-wrap">
    <div class="dock">
      <DockSection/>
    </div>
  </div>
</template>
<script>
import DockSection from './DockSection'
export default {
  name: 'Dock',
  components: {
    DockSection
  }
}
</script>
<style>
  @keyframes dock {
    0%   { box-shadow: 0 0 50px #38989A; }
    25%  { box-shadow: 0 0 50px #F5A692; }
    45%  { box-shadow: 0 0 50px #3BB3E1; }
    50%  { box-shadow: 0 0 50px #6cf; }
    75%  { box-shadow: 0 0 50px #3BE154; }
    85%  { box-shadow: 0 0 50px #3BE1A1; }
    100% { box-shadow: 0 0 50px #38989A; }

  }
  .dock-wrap {
    position: fixed;
    /*bottom: -3.4vw;*/
    bottom: 0;
    opacity: 0.8;
    width: 100vw;
    height: 8vw;
    max-height: 45px;
    transition: all 0.4s;
  }
  .dock-wrap:hover {
    bottom:0;
  }
  .dock {
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
    height: 100%;
    width: 0;
    /*max-width: 70%;*/
    /*min-width: 300px;*/
    background-color: #04282C;
    border-radius: 30px;
    animation: dock 16s infinite;
  }
</style>

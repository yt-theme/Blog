<template>
  <div class="section-wrap">
    <template v-for="sd in sectionData">
      <a v-bind:href="sd.link" target="view_window" class="section">
        <img v-bind:src="sd.logo"/>
        <span>{{sd.name}}</span>
      </a>
    </template>
  </div>
</template>
<script>
import config from '../../sectionConfig'
export default {
  name: 'Section',
  data () {
    return {
      sectionData : config.data
    }
  },
  mounted(){
    console.log(this.sectionData)
  }
}
</script>
<style>
  .section-wrap {
    position: absolute;
    display: flex;
    align-content: flex-start;
    /*justify-content: flex-start;*/
    flex-wrap: wrap;
    width: 100%;
    min-width: 30px;
    height: 100%;
    min-height: 30px;
    overflow: auto;
  }
  .section {
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    height: 7.5vw;
    min-height: 30px;
    width: 7.5vw;
    min-width: 30px;
    color: #ccc;
    border-radius: 8px;
    background: #04282C;
    box-shadow: 0 0 8px #38989A;
    opacity: 0.7;
    font-size: 0.8em;
    line-height: 2.5em;
    margin: 2.5vw;
  }
  @media screen and (max-width: 1045px) {
    .section {
      font-size: 0.7em;
      width: 11vw;
      height: 11vw;
    }
  }
  @media screen and (max-width: 765px) {
    .section {
      font-size: 0.7em;
      width: 15vw;
      height: 15vw;
    }
  }
  @media screen and (max-width: 510px) {
    .section {
      font-size: 0.7em;
      width: 20vw;
      height: 20vw;
    }
  }
  @media screen and (max-width: 379px) {
    .section {
      font-size: 0.7em;
      width: 25vw;
      height: 25vw;
    }
  }
  .section> a {
    color: #ccc;
  }
  .section> img {
    width: 50%;
    height: 50%;
    margin-top: 17%;
  }
  @keyframes sectionH {
    0%   {box-shadow: 0 0 8px #38989A;}
    30%  {box-shadow: 0 0 30px #6cf;}
    50%  {box-shadow: 0 0 15px #6fc;}
    75% {box-shadow: 0 0 30px #38989A;}
    100% {box-shadow: 0 0 8px #38989A;}
  }
  .section:hover {
    /*box-shadow: 0 0 30px #38989A;*/
    opacity: 0.8;
    animation: sectionH 5s ease-in infinite;
  }
</style>

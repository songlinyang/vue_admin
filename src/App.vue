<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <div class="row">
    <div class="col-3">
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <router-link to="/about" class="nav-link" :class="{'active':isActive1}" data-toggle="pill" role="tab" aria-controls="v-pills-profile" >
        <p @click="update">About</p>
        </router-link>
        <router-link to="/home" class="nav-link" :class="{'active':isActive2}" data-toggle="pill" role="tab" aria-controls="v-pills-profile">
        <p @click="update">Home</p>
        </router-link>
        
        <!-- <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
          About</a>
        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
          Home</a> -->
        
      </div>
    </div>
    <div class="col-9">
      <div class="tab-content" id="v-pills-tabContent">
        <router-view/>
      </div>
    </div>
    </div>
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data () {
    return {
      isTrue : false,
      isActive1: true,
      isActive2: false
    }
  },
  methods : {
    update() {
      console.log("hah")
      this.isActive1 = ! this.isActive1
      this.isActive2 = ! this.isActive2
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

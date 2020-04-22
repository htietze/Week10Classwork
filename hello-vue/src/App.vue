<template>
<!-- more html for displaying, showing the parent. -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hey, welcome to some kinda app."/>
  </div>
</template>

<script>
// importing the component so it can be set as a child in the components section
import HelloWorld from './components/HelloWorld.vue'

export default {
  // vue app setup!
  name: 'App',
  // setting the HelloWorld component as the child
  components: {
    HelloWorld
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

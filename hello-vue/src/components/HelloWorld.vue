<template>
<!-- html section, calls up the msg and helloMessage from the script -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ helloMessage }}</h2>
  </div>
</template>

<script>
export default {
  // data for the vue app I think? setting the name, data, and sorts of methods
  name: 'HelloWorld',
  // asking the app for its data causes it to go like a method? So it returns the values stored
  data() {
    return {
      helloMessage: ''
    }
  },
  // data sent to the component from the App.vue parent, telling it to expect a string?
  props: {
    msg: String
  },
  // special kind of method I think.
  mounted() {
    // the hello_api is linked to the HelloAPI.js file because of the main.js vue prototyping.
    // then it calls the method which sends back a response, which is saved to the helloMessage variable.
    this.$hello_api.getHelloMessage().then(resp => {
      this.helloMessage = resp.message
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<!--
    Author: Adetunji "TJ"
    Project: Quiz App
    Course: Webclient[ITEC 2560-60]
    Aim: Final project, to exhibit the skills learned in
         HTML, CSS, Javascript, SQLite, JS Framework[VUE], Deploying on Heroku, and using
         github as repo for project and software codes.

    References:
      Class Lab Slides
      https://blog.logrocket.com/how-to-use-refs-to-access-your-application-dom-in-vue-js/
      https://vuejs.org/v2/guide/components-props.html
      https://vuejs.org/v2/guide/forms.html
      https://stackabuse.com/using-sequelize-js-and-sqlite-in-an-express-js-app/

      -YouTube:
        Vue JS 2 Tutorial #22 - Props
        Vue JS 2 Tutorial #27 - Slots
        Vue JS 2 Tutorial #24 - Events (child to parent)
  -->

<template>
  <div id="app">
    <!--default component use to display the Home page Header -->
    <HelloWorld msg="The Quiz App"/>

    <!-- embed the register-form & question component-->
    <Quiz url="https://api.myjson.com/bins/ahn1p"></Quiz>
  </div>
</template>

<script>
//import the two components above
import HelloWorld from './components/HelloWorld.vue'
import Quiz from './components/Quiz.vue'

export default {
  name: 'app',
  data:function(){
    return{
       
    }
  },
  components: {
    //used components registered here.
    HelloWorld,
    Quiz   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

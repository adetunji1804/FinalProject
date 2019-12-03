<template>
    
    <div>
  <h4>Quiz {{questions[cnt].id}}</h4>
  <table cellspacing="4" cellpadding="4">
  <tr>
  <th colspan="2">{{ questions[cnt].question }}</th>
  </tr>
  
  <Question v-bind:question="question" v-on:answerSelected="answerSelected"></Question>   
  <!-- listen to messages from Question component  -->

  <tr>
    <td colspan="2" id="btn">
      <button v-on:click="moveNext()" id="nextBtn" v-bind:disabled="stop">
      Next >>
      </button>
    </td>
  </tr>
  
  </table>
  <span>{{ questions[cnt].Ans }}</span>

    </div>
</template>

<script>
export default {
  props: {
    questions: Array
  },
data: function(){
    return{
    cnt:0,
    correctAns: ''
    } 
  },
  methods:{
    answerSelected: function(id, isCorrect) {
      
      // do whatever you need to do with the fact that the answer is right or wrong 
      // change question in Question component 
      // figure out if it is the end of the quiz and take whatever action

    }, 
  },
  computed:{
  stop:function(){
 	return this.cnt === questions.length ? true : false
  },
  }
  
}

</script>
<style scoped>
h4{
    text-align: left;
    display: block;
    background:antiquewhite;
}
</style>
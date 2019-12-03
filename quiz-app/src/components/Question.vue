<template>
    
    <div>
  <h4>Quiz {{question.id}}</h4>
  <table cellspacing="4" cellpadding="4">
  <tr>
  <th colspan="2">{{ question.question }}</th>
  </tr>
  <tr>
<!-- display all the choices  -->
    <input v-for="choice in generatedChoices" v-bind:key="choice" v-on:change="chosenAnswer(choice)">

  </tr>
  
  </table>
  <span>{{ questions[cnt].Ans }}</span>

    </div>
</template>

<script>
export default {
  props: {
    question: Object
  },
data: function(){
    return{
    cnt:0,
    correctAns: ''
    } 
  },
  methods:{
      chosenAnswer: function(choice) {
          // decide if correct answer.
          // emit message to parent id = 4, answerIsCorrect = true 
      },

  },
  computed:{
 
   generatedChoices: function() {

       // get right answer, get wrong answers array, combine into one array and shuffle 

   }
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
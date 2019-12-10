<template>
<div id="quiz-div">
  <!-- App intro stage -->
  <div v-if="introStage">
    <p>{{ intro }}</p>
    <div><register-form
          v-bind:idNo="idNo"
          v-bind:fN="fN"
          v-bind:lN="lN">
        </register-form>
      </div>
      <button class="btn btn-primary" @click="startQuiz" id="strBtn">Click to Start</button>
  </div>

   <!-- Question phase -->
  <div v-if="questionStage">
    <question 
      :question="questions[currentQuestion]"
      v-on:answer="handleAnswer"
      :question-number="currentQuestion+1"
    ></question>
  </div>

    <!-- result message phase -->
  <div v-if="resultsStage">
    <div id="result">
      <h4>You got {{correct}} right, out of {{questions.length}} questions.</h4> 
      <h4>Your percentage is {{perc}}%.</h4>
    </div>
  </div>
</div>
    
</template>

<script>
//import RegisterForm from './components/RegisterForm.vue'

export default {
    props: ['url'],
    data: function(){
        return{
          //data to be returned are declared and initialized
      introStage: false,
      questionStage: false,
      resultsStage: false,
      questions: [],
      currentQuestion: 0,
      answers: [],
      correct: 0,
      perc: null,
      intro: " Provide answers to the questions, each correct answer is 25%.",
        }
    },
    components:{
    //import and registration of components
        'question':() => import('@/components/Question.vue'),
        'register-form':() => import('@/components/RegisterForm.vue')
    },
    created() {   
      //fetching JSON file from online source 
        fetch(this.url)
        .then(res => res.json())
        .then(res => {
        this.questions = res.questions;
        this.introStage = true;
        }).catch(err =>{
          //console.log(err)
          alert("Data file cannot be fetched! "+ err)
        })
    },
    methods:{
        startQuiz() {
      this.introStage = false;
      this.questionStage = true;
     // console.log('test'+JSON.stringify(this.questions[this.currentQuestion]));
      },
      handleAnswer(e) {
     // console.log('answer event ftw',e);
      this.answers[this.currentQuestion]=e.answer;
      if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
      } else {
        this.currentQuestion++;
      }
    },
    handleResults() {
      //console.log('handle results');
      this.questions.forEach((a, index) => {
        if(this.answers[index] === a.answer) this.correct++;        
      });
      this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
     //console.log(this.correct+' '+this.perc);
    },

  }
    
}
</script>

<style scoped>
#quiz-div{
  align-content: center;
}#result{
  width:450px;
  min-height:300px;
  padding-top:100px;
  border:1px solid grey;
  margin-left: 350px;
  margin-top:50px;
}
</style>
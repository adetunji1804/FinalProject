<template>
<div id="quiz-div">
  <!-- App intro stage -->
  <div v-if="introStage">
    <p>{{ intro }}</p>
    <div><register-form></register-form>
      </div>
     <!-- <button class="btn btn-primary" @click="startQuiz" id="strBtn">Click to Start</button> -->
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
      <img id="imgz" src="@/assets/blank.jpg" width="70">
      <p>
        <table class="table table-hover info">
          <tr><th>#ID:</th> <td>A0124</td></tr>
          <tr><th>Question[total]:</th> <td>{{questions.length}}</td></tr>
          <tr><th>Gotten Correct:</th> <td> {{correct}}</td></tr>
          <tr><th>Score[%]:</th> <td>{{perc}}</td></tr>
        </table>
      </p>
      <div>
        <table class="table table-hover info">
          <tr> 
            <td><button class="btn btn-info" @click="updateData">Update Record</button> </td> 
            <td><button class="btn btn-warning">Exit Application</button> </td> 
          </tr>
           </table>
      </div>
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
      intro: " Each correct answer is 25%. Register to proceed",
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
   
    },
  
  mounted:function(){
      this.$root.$on('Quiz', () =>{
        this.startQuiz()
      })    
  }
    
}
</script>

<style scoped>
#quiz-div{
  align-content: center;
}#result{
  width:400px;
  min-height:350px;
  padding:5px;
  border:1px solid grey;
  margin-left: 350px;
  margin-top:50px;
}
#result.imgz{
  
}
#img{
  top:1px;
  left:1px;
  position:absolute;
}
.info{
  margin-left: 20px;
  width: 90%;
}
th{
  text-align:left;
}
</style>
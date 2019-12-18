<template>
<div id="quiz-div">
  <!-- App intro stage -->
  <div v-show="introStage">
    <p>{{ intro }}</p>
    <div><register-form v-on:studentcreated="studentcreated"></register-form>
      </div>
     <!-- <button class="btn btn-primary" @click="startQuiz" id="strBtn">Click to Start</button> -->
  </div>

   <!-- Question phase -->
  <div v-show="questionStage">
    <question 
      :question="questions[currentQuestion]"
      v-on:answer="handleAnswer"
      :question-number="currentQuestion+1"
    ></question>
  </div>

    <!-- result message phase -->
  <div v-show="resultsStage">
    <div class="result">
      <p>
        <img class="imgz" src="@/assets/blank.jpg" width="65">
        <table class="table table-hover info">
          <tr><th>#ID:</th> <td>{{ id }}</td></tr>
          <tr><th>Question [total]:</th> <td>{{questions.length}}</td></tr>
          <tr><th>Answered Correct:</th> <td> {{correct}}</td></tr>
          <tr><th>Scores [%]:</th> <td>{{perc}}</td></tr>
        </table>
      </p>
      <div>
        <table class="table table-hover info">
          <tr> 
            <td align="right"><button class="btn btn-info" @click="updateData">Update Score</button>

            <!--  <router-link to="/result">-->
                <button class="btn btn-success" style="margin-left:5px"> View Records </button>
             <!-- </router-link> -->
            </td> 
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
      id:'',
      student:{}
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
      studentcreated:function(student){
        //console.log("created!", student)
        this.id = student.studentID
        this.student = student
      },
        startQuiz() {
          this.introStage = false;
        this.questionStage = true;
        
     // console.log('test'+JSON.stringify(this.questions[this.currentQuestion]));
      },
      updateData: function(){
        //todo
        //this.student.score = this.perc
       // this.$student_api.updated(student).then( ()=>{})
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
    }
    
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
}
#quiz-div.result{
  width:400px;
  min-height:350px;
  padding:5px;
  border:1px solid grey;
  margin-left: 350px;
  margin-top:50px;
}

.imgz{
  top:1px;
  left:1px;
  position:relative;
}
.info{
  margin-left: 20px;
  width: 60%;
}
th{
  text-align:left;
}
</style>
<template>

<div class="set">
  
<div v-if="question" class="card">
  <div>
  <strong>Question {{ questionNumber }}:</strong>
  </div>
      <div class="header">
        <p id="question"><strong>{{ question.text }} </strong> </p>
      </div>
                <!-- if question is true/false type -->
    <div class="container" v-if="question.type === 'tf'">
      <table id="question-tbl" class="table table-hover" style="width:400px; margin-top:10px;">
        <tr>
          <td><sub><i>Check appropriate answer</i></sub></td>
          </tr>
        <tr>
          <td><input type="radio" name="currentQuestion" id="trueAnswer" v-model="answer" value="t">&nbsp;&nbsp; &nbsp;<label for="trueAnswer">True</label></td>
        </tr>
        <tr>
            <td><input type="radio" name="currentQuestion" id="falseAnswer" v-model="answer" value="f">&nbsp;&nbsp; &nbsp;<label for="falseAnswer">False</label></td>  
        </tr>
      </table>
    </div>
            <!-- if question is a multiple choice type -->
  <div v-if="question.type === 'mc'">
    <div v-for="(mcanswer,index) in question.answers" v-bind:key="index">
      <div id="multi-quest">
        <input type="radio" :id="'answer'+index" name="currentQuestion" v-model="answer" :value="mcanswer">&nbsp;&nbsp;&nbsp; <label :for="'answer'+index">{{mcanswer}}</label><br/>
      </div>
    </div>
  </div>

  <button class="btn btn-primary mt-2" @click="submitAnswer"> Next >></button>
</div>
</div>
    
</template>

<script>
export default {
data() {
    return {
        answer: ''
     }
    },
props: ['question','question-number'],
methods:{
	submitAnswer: function() {
	this.$emit('answer', {answer:this.answer});
    this.answer = null;
	}
  }
    
}
</script>

<style scoped>
td
{
    padding:0px;
    height: 30px;
    vertical-align: bottom;
    text-align: left;
    border-bottom: 1px solid white;
}
div.card 
{
    width: 600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: left;
}
div.header 
{
    background-color: #486480;
    color: white;
    min-height: 160px;
    padding: 20px 40px 20px 10px;
    font-size: 16px;
}
.set{
    width: auto;
    padding-left: 300px;
    padding-top:25px;
}
#multi-quest{
  margin-top: 10px 0 0 10px;
  padding:10px;
}
</style>
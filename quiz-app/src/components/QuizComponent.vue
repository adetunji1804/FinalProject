<template>
    
    <div>
  <h4>Quiz {{questions[cnt].id}}</h4>
  <table cellspacing="4" cellpadding="4">
  <tr>
  <th colspan="2">{{ questions[cnt].question }}</th>
  </tr>
  <tr>
    <td><input type="radio" v-bind:value="questions[cnt].optionA" name="opt"></td>
    <td>{{ questions[cnt].optionA  }}</td>
  </tr>
  
  <tr>
    <td><input type="radio" v-bind:value="questions[cnt].optionB" name="opt"></td>
    <td>{{ questions[cnt].optionB }}</td>
  </tr>
  
  <tr>
    <td><input type="radio" v-bind:value="questions[cnt].optionC" name="opt"></td>
    <td>{{ questions[cnt].optionC }}</td>
  </tr>
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
data: function(){
    return{
  questions: [
      { 
      	id: 1,
      	question: "The most populous black nation?", 
      	optionA:"Egypt",
        optionB:"Nigeria",
        optionC:"Ghana",
        Ans:"Nigeria"
      },
      
      { 
      	id: 2,
      	question: "The most skillful soccer player ever?", 
        optionA:"George Weah",
        optionB:"Paulo Rossi",
        optionC:"Pele",
        Ans:"Pele"
      },
      
       { 
      	id: 3,
      	question: "The tallest mountain in the world?",
        optionA:"Kilimanjaro",
        optionB:"Everest",
        optionC:"Mauna",
        Ans:"Everest"
      }
      
    ],
    cnt:0,
    correctAns: ''
    } 
  },
  methods:{
  moveNext: function(){
  if(this.cnt === 2)
  {
  	return alert('End of Quiz....')    
  }
  else
  {
  	return this.$set(this.cnt++)
  }
 }
 
  },
  computed:{
  stop:function(){
 	return this.cnt === 2 ? true : false
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
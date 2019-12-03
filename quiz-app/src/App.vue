<template>
  <div id="app">
    <HelloWorld msg="Quiz World!"/>
    <QuizComponent v-bind:questions="questions"></QuizComponent>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import QuizComponent from './components/QuizComponent.vue'

export default {
  name: 'app',
  data: function(){
    questions: [
{
"category": "Entertainment: Film",
"type": "multiple",
"difficulty": "medium",
"question": "Which retired American football quarterback played himself in &#039;Ace Ventura: Pet Detective&#039; and &#039;Little Nicky&#039;?",
"correct_answer": "Dan Marino",
"incorrect_answers": [
"John Elway",
"Tom Brady",
"Joe Montana"
]
},
{
"category": "Politics",
"type": "multiple",
"difficulty": "medium",
"question": "Who was the 40th President of the USA?",
"correct_answer": "Ronald Reagan",
"incorrect_answers": [
"Jimmy Carter",
"Bill Clinton",
"Richard Nixon"
]
},
{
"category": "Entertainment: Music",
"type": "multiple",
"difficulty": "medium",
"question": "Which of these is the name of an American psychedelic rock band formed in 2002 by Benjamin Goldwasser and Andrew VanWyngarden?",
"correct_answer": "MGMT",
"incorrect_answers": [
"MSTRKRFT",
"STRFKR",
"SBTRKT"
]
},
{
"category": "Entertainment: Musicals & Theatres",
"type": "multiple",
"difficulty": "hard",
"question": "Who wrote the lyrics for Leonard Bernstein&#039;s 1957 Brodway musical West Side Story?",
"correct_answer": "Stephen Sondheim",
"incorrect_answers": [
"Himself",
"Oscar Hammerstein",
"Richard Rodgers"
]
},
{
"category": "Entertainment: Board Games",
"type": "multiple",
"difficulty": "hard",
"question": "In standard Monopoly, what&#039;s the rent if you land on Park Place with no houses?",
"correct_answer": "$35",
"incorrect_answers": [
"$30",
"$50",
"$45"
]
},
{
"category": "Sports",
"type": "multiple",
"difficulty": "hard",
"question": "Which male player won the gold medal of table tennis singles in 2016 Olympics Games?",
"correct_answer": "Ma Long (China)",
"incorrect_answers": [
"Zhang Jike (China)",
"Jun Mizutani (Japan)",
"Vladimir Samsonov (Belarus)"
]
},
{
"category": "Geography",
"type": "multiple",
"difficulty": "medium",
"question": "What is the capital of British Columbia, Canada?",
"correct_answer": "Victoria",
"incorrect_answers": [
"Vancouver",
"Hope",
"Kelowna"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "medium",
"question": "What year does Part 7 of &quot;JoJo&#039;s Bizarre Adventure&quot; take place in?",
"correct_answer": "1890",
"incorrect_answers": [
"1888",
"1999",
"2003"
]
},
{
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "The Sun consists of mostly which two elements?",
"correct_answer": "Hydrogen &amp; Helium",
"incorrect_answers": [
"Hydrogen &amp; Nitrogen",
"Carbon &amp; Nitrogen",
"Carbon &amp; Helium"
]
},
{
"category": "Entertainment: Japanese Anime & Manga",
"type": "multiple",
"difficulty": "easy",
"question": "How many &quot;JoJos&quot; that are protagonists are there in the series &quot;Jojo&#039;s Bizarre Adventure&quot;?",
"correct_answer": "8",
"incorrect_answers": [
"6",
"4",
"5"
]
}
]
      },
  components: {
    HelloWorld,
    QuizComponent
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>

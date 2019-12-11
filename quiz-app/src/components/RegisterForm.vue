<template>
<!-- registration form component. Get the details of candidate to databse-->
    <div class="tblStyle">
        <form @submit.prevent="addData">
            <table class="table">
                <tr>
                    <th>Register Here </th>
                </tr>
                <tr>
                    <td class="border-0">
                        <sub>ID#&nbsp;<i>not less than 3 characters</i></sub>
                        <input type="text" ref="idNum" class="form-control" placeholder="Enter Your ID#" v-model="idNo">
                    </td>
                </tr>
                <tr>
                    <td class="border-0">
                        <sub>Firstname&nbsp;<i>not less than 5 characters</i></sub>
                        <input type="text" ref="fName" class="form-control" placeholder="Enter Your Firstname" v-model="fN">
                    </td>
                </tr>
                <tr>
                    <td class="border-0"> 
                        <sub>Lastname&nbsp;<i>not less than 5 characters</i></sub>
                        <input type="text" ref="lName" class="form-control" placeholder="Enter Your Lastname" v-model="lN">
                    </td>
                </tr>
                <tr>
                    <td id="regBtn"><button ref="add" class="btn btn-info regBtn" v-on:click="addData" v-bind:disabled ="disableButton"> Register </button></td>
                </tr>
                <tr>
                    <!--- test verify data is fetched. Goes to database later -->
                    <td>{{ idNo }} |  {{ fN }} |  {{ lN }}</td>
                </tr>
            </table>
        </form>
    </div>
</template>


<script>
export default {
    name:'RegisterForm',
    data: function(){
        return{
        idNo: '',
        fN: '',
        lN: ''
        }
    },
    props:{
    },
    methods:{
      addData: function(){
          

          //emit the function startQuiz on the Quiz component
            this.$root.$emit('Quiz')

          //clear input boxes
          this.$refs.idNum.value = ""
          this.$refs.lName.value = ""
          this.$refs.fName.value = ""
      }

    },
    computed: {
    
    disableButton: function (){
     
     return !(this.idNo.length > 3 && this.fN.length > 5 && this.lN.length > 5)
        
    }
}
}
</script>


<style scoped>
.tblStyle{
    width:450px; 
    border-bottom: 1px solid gray;
    border-left:1px solid grey;
    border-right:1px solid gray;
    margin-left: 400px;
    margin-top:10px;
    margin-bottom: 10px;
}
.table{
    padding: 2px;
}
td{
    text-align: left;
}
th{
    background-color: rgb(42, 79, 114);
    color:white;
}
#regBtn{
    text-align: right;
}
</style>
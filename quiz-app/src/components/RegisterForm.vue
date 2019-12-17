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
<<<<<<< HEAD
                        <sub>ID#&nbsp;<i>not less than 3 characters</i></sub>
=======
                        <sub><i>ID#</i></sub>
>>>>>>> 153ae6bbf3b23b29d5863bf983a1c35cf458e59a
                        <input type="text" ref="idNum" class="form-control" placeholder="Enter Your ID#" v-model="idNo">
                    </td>
                </tr>
                <tr>
                    <td class="border-0">
<<<<<<< HEAD
                        <sub>Firstname&nbsp;<i>not less than 4 characters</i></sub>
=======
                        <sub><i>Firstname</i></sub>
>>>>>>> 153ae6bbf3b23b29d5863bf983a1c35cf458e59a
                        <input type="text" ref="fName" class="form-control" placeholder="Enter Your Firstname" v-model="fN">
                    </td>
                </tr>
                <tr>
                    <td class="border-0"> 
<<<<<<< HEAD
                        <sub>Lastname&nbsp;<i>not less than 4 characters</i></sub>
=======
                        <sub><i>Lastname</i></sub>
>>>>>>> 153ae6bbf3b23b29d5863bf983a1c35cf458e59a
                        <input type="text" ref="lName" class="form-control" placeholder="Enter Your Lastname" v-model="lN">
                    </td>
                </tr>
                <tr>
<<<<<<< HEAD
                    <td id="regBtn"><button ref="add" class="btn btn-info regBtn" v-on:click="addData" v-bind:disabled ="disableButton"> Register </button></td>
=======
                    <td><button ref="add" class="btn btn-info" v-on:click="addData" v-bind:disabled="disableSubmitButton"> Add </button></td>
>>>>>>> 153ae6bbf3b23b29d5863bf983a1c35cf458e59a
                </tr>
                <tr>
                    <!--- test verify data is fetched. Goes to database later -->
                    <td>{{ idNo }} |  {{ fN }} |  {{ lN }}</td>
                </tr>
            </table>
        </form>
       
           
       
        
    </div>
</template>

<!-- Script section -->

<script> 
export default {
    name:'RegisterForm',
    data: function(){
        return{
        students:[],
        idNo: '',
        fN: '',
        lN: ''
        }
    },
    methods:{
      addData: function(){
     //emit the function startQuiz on the Quiz component
         this.$root.$emit('Quiz')
         this.addStudent() //call function to add name to database
      },
      addStudent:function(){
             let student= { //create student object 
             studentID: this.idNo, 
             firstName: this.fN,
             lastName:this.lN, 
             score:0.00 
           }
           //this.students.push(student)
           this.$student_api.addStudent(student).then( () => {
               console.log("created! " , student)
               this.$emit('studentcreated', student)
           })
    },
    updateStudents(){
        this.$student_api.getAllStudent().then (students =>{
            this.students = students
        })
    }
},
    computed: {
<<<<<<< HEAD
        //check if input button has the range value specify
    disableButton: function (){
     return !(this.idNo.length > 2 && this.fN.length > 3 && this.lN.length > 3)
    }, 
}

}
=======
        disableSubmitButton: function() {
            return  !(this.idNo.length > 3 && this.fN.length > 5 && this.lN.length > 5)
        }
    }

} 
>>>>>>> 153ae6bbf3b23b29d5863bf983a1c35cf458e59a
</script>

    <!-- style section -->

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
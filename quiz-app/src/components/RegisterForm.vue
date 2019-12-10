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
                        <sub><i>ID#</i></sub>
                        <input type="text" ref="idNum" class="form-control" placeholder="Enter Your ID#" v-model="idNo">
                    </td>
                </tr>
                <tr>
                    <td class="border-0">
                        <sub><i>Firstname</i></sub>
                        <input type="text" ref="fName" class="form-control" placeholder="Enter Your Firstname" v-model="fN">
                    </td>
                </tr>
                <tr>
                    <td class="border-0"> 
                        <sub><i>Lastname</i></sub>
                        <input type="text" ref="lName" class="form-control" placeholder="Enter Your Lastname" v-model="lN">
                    </td>
                </tr>
                <tr>
                    <td><button ref="add" class="btn btn-info" v-on:click="addData" v-bind:disabled="disableSubmitButton"> Add </button></td>
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
          this.idNo = this.$refs.idNum.value
          this.fN = this.$refs.lName.value
          this.lN = this.$refs.fName.value
      }

    },
    computed: {
        disableSubmitButton: function() {
            return  !(this.idNo.length > 3 && this.fN.length > 5 && this.lN.length > 5)
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
</style>
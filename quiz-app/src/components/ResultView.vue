<template>
    <div>
        <table class="table table-hover">
            <tr>
                <th>StudentID</th> 
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Score</th>
            </tr>
            <tr v-for="student in results" :key="student.id">
                <td>{{ student.studentID }}</td>
                <td>{{ student.firstName }}</td>
                <td>{{ student.lastName }}</td>
                <td>{{ student.score }}</td>
            </tr>
        </table>
    </div>
</template>


<script>
export default {
    data:function(){
        return {
            results:[]
        }
    },
    mounted:function(){
        this.$services.results.getAllresults.then (data => {
        this.results = data
        })
    },
    methods:{
     
    }
}
</script>


<style scoped>

</style>
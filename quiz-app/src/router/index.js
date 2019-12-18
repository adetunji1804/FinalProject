
import Router from 'vue-router'

//import components from '@/components'
import ResultView from '@/components/ResultView.vue'
import Quiz from '@/components/Quiz.vue'

//Vue.use(Router)

export default new Router({
    //mode: 'history',
    routes:[
        {
            path: '/result',
            name:'result',
            component: ResultView
        },
        {
            path: '/home',
            name: 'home',
            component: Quiz
        }
    ]
})


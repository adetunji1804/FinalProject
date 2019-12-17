
import Router from 'vue-router'

// import components from '@/components'
import ResultView from '@/components/ResultView'
import Quiz from '@/components/Quiz'



export default new Router({
    // mode: 'history',
    routes:[
        {
            path: '/result',
            name:'result',
            component: ResultView
        },
        {
            path: '/sdg',
            name:'home',
            component: Quiz
        }
        

    ]
})


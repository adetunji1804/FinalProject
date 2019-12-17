
import Router from 'vue-router'

import components from '@/components'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/result',
            name:'result',
            component:components.ResultView
        }
    ]
})


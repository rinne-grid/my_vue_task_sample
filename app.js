
Vue.component('my-task-list', {
    props: ['tasks'],
    template: '<div>                                        \
                    <ul v-for="task in tasks">              \
                        <my-task v-bind:task="task"></my-task>\
                    </ul>                                   \
                </div>'    

});

Vue.component('my-task', {
    props: ['task'],
    template: '<li>{{task.title}}-{{task.body}}</li>'
});

var vm = new Vue({
    el: '#app',
    template: '<my-task-list v-bind:tasks="tasks"></my-task-list>',
    data: {
        tasks: [
            {
                'title' : '件名です',
                'body'  : '本文です' 
            },
            {
                'title' : '件名2です',
                'body'  : '本文2です' 
            }

        ]
    }
});
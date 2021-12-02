<template>
    <div id="home-page">
        <h1>Список дел</h1>
        <section class="create-todo">
            Добавить туду:
            <!-- добавление туду -->
        </section>
        <section class="todo-list">
            <ul>
                <li v-for="todoItem in todoList" :key="todoItem.id">
                    <div id="title">{{todoItem.title}}</div>
                    <div id="description">Описание: {{ todoItem.description}}</div>
                    <div id="checkbox">Выполнено <input type="checkbox" :checked="todoItem.isDone"></div>
                    <div id="checkbox">В избранном <input type="checkbox" :checked="todoItem.isFavourity"></div>
                    <div id="priority">Приоритет: {{todoItem.priority}}</div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { getTodoList } from '@/netClient/dataService.js'

export default ({
    name: 'HomePage',
    mounted(){
        this.fetchTodoList();
    },
    data: () => ({
        todoList: [],
    }),
    methods : {
        async fetchTodoList(){
            try {
                this.todoList = await getTodoList();
            } catch (error) {
                console.error({ error });
            }
        }
    }
})
</script>

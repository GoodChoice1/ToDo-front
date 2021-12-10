<template>
    <div id="home-page">
        <h1>Список дел</h1>
        <button @click="deleteAllTodos" class="submit-btn" type="submit">Удалить всё</button>
        <section class="create-todo">
            <CreateTodo/>
        </section>
        <section class="todo-list">
            <ul>
                <TodoItem @updateTodoList="fetchTodoList()" v-for="todoItem in todoList" :key="todoItem.id"
                :todoItem="todoItem"

                />
            </ul>
        </section>
    </div>
</template>

<script>
import { getTodoList, deleteTodos } from '@/netClient/services/todoService.js'

import CreateTodo from '@/components/CreateTodo'
import TodoItem from '@/components/TodoItem'

export default ({
    name: 'HomePage',
    components: {
        CreateTodo,TodoItem
    },
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
        },
        async deleteAllTodos(){
            try {
                await deleteTodos();
             this.fetchTodoList();
            } catch (error) {
                console.error({ error });
            }
        },
    }
})
</script>

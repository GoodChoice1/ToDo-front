<template>
    <div id="home-page">
        <h1>Список дел</h1>
        <button @click="deleteAllTodos" class="submit-btn" type="submit">Удалить всё</button>
        <section class="create-todo">
            Добавить задание:
                <form @submit="onFormSubmit">

                    <div class="form-field">
                        <label for="title">Заголовок<br/></label>
                        <input v-model="title" id="title" type="text" required>
                    </div>

                    <div class="form-field">
                        <label for="description">Описание<br/></label>
                        <input v-model="description" id="description" type="text" required>
                    </div>

                    <div class="form-field">
                        <label for="priority">Приоритет<br/></label>
                        <input v-model="priority" id="priority" type="text">
                    </div>

                    <button class="submit-btn" type="submit">
                        Добавить задачу
                    </button>
                </form>
        </section>
        <section class="todo-list">
            <ul>
                <li v-for="todoItem in todoList" :key="todoItem.id" class="todo">
                    <a @click="redirect(todoItem.id)">
                    <div id="title">{{todoItem.title}}</div>
                    <div id="description">Описание: {{ todoItem.description}}</div>
                    <div id="checkbox">Выполнено <input @change="toggleCheckboxDone(todoItem.id,!todoItem.isDone)" type="checkbox" :checked="todoItem.isDone"></div>
                    <div id="checkbox">В избранном <input type="checkbox" :checked="todoItem.isFavourite"></div>
                    <div id="priority">Приоритет: {{todoItem.priority}}</div>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { getTodoList } from '@/netClient/dataService.js'
import { createTodo } from '@/netClient/dataService';
// import { deleteTodo } from '@/netClient/dataService';
import { deleteTodos } from '@/netClient/dataService';
import { changeTodoDone } from '@/netClient/dataService';

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
        },
        async onFormSubmit(){
            try {
                await createTodo(
                    this.title.trim(),
                    this.description.trim(),
                    this.priority.trim(),
                    
                )
            } catch (error) {
                console.error({ error });
            }
        },
        redirect(id){
            localStorage.todoId = id
            this.$router.push('/todo')
        },
        async toggleCheckboxDone(id,isDone){
            try {
                await changeTodoDone(
                    id,
                    isDone
                )
                this.fetchTodoList();
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
        // async deleteTodo(){
        //     try {
        //         await deleteTodo(

        //         )
        //      this.fetchTodoList();
        //     } catch (error) {
        //         console.error({ error });
        //     }
        // },
    }
})
</script>

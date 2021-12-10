<template>
  <div id="main">
    <div v-if="isTodo()">
      <div id="title">{{todoItem.title}}</div>
      <div id="description">Описание: {{ todoItem.description}}</div>
      <div class="checkbox">Выполнено <input @change="toggleCheckboxDone(todoItem.id,!todoItem.isDone)" type="checkbox" :checked="todoItem.isDone"></div>
      <div class="checkbox">В избранном <input @change="toggleCheckboxFav(todoItem.id,!todoItem.isFavourite)"  type="checkbox" :checked="todoItem.isFavourite"></div>
      <div id="priority">Приоритет: {{todoItem.priority}}</div>
      <div>
        <button @click="deleteTodo(todoItem.id)" class="submit-btn" type="submit">
          Удалить задачу
        </button>
      </div>

      <form @submit="onFormSubmit(todoItem.id,title,description,priority)">
        Изменить задание
        <div class="form-field">
            <label for="title">Заголовок<br/></label>
            <input v-model="title" id="title" type="text">
        </div>

        <div class="form-field">
            <label for="description">Описание<br/></label>
            <input v-model="description" id="description" type="text">
        </div>

        <div class="form-field">
            <label for="priority">Приоритет<br/></label>
            <input v-model="priority" id="priority" type="number">
        </div>

        <div>
          <button class="submit-btn" type="submit">
            Изменить
          </button>
        </div>
      </form>
    </div>
    <div v-else>
      Задача не выбрана
    </div>
  </div>
</template>

<script>
import { getTodo, deleteTodoById,changeTodoDone,changeTodoFav, changeTodo } from '@/netClient/services/todoService';
export default {
  name: "TodoPage",
  data: () => ({
        todoItem: {},
        title: '',
        description: '',
        priority: '',
    }),
  mounted(){
        this.getTodoInfo();
    },
  methods:{
    async getTodoInfo(){
      try {
        this.todoItem = await getTodo();
      } catch (error) {
        console.error({ error });
      }
    },
    async deleteTodo(id){
      try {
        await deleteTodoById(
          id
        )
        this.$router.push('/')
      } catch (error) {
        console.error({ error });
      }
    },
    async toggleCheckboxDone(id,isDone){
      try {
        await changeTodoDone(
          id,
          isDone
        )
      } catch (error) {
          console.error({ error });
      }
    },
    async toggleCheckboxFav(id,isFavourite){
      try {
        await changeTodoFav(
          id,
          isFavourite
        )
      } catch (error) {
        console.error({ error });
      }
    },
    async onFormSubmit(){
      try {
        await changeTodo(
          this.todoItem.id,
          this.title.trim(),
          this.description.trim(),
          this.priority,
        );
      } catch (error) {
        console.error({error})
      }
    },
    isTodo(){
      return localStorage.todoId != undefined
    },
  }
};
</script>
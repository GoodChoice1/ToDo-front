<template>
  <div class="todo">
    <div id="title">{{ todoItem.title }}</div>
    <div id="checkbox">
      Выполнено
      <input
        @change="toggleCheckboxDone(todoItem.id, !todoItem.isDone)"
        type="checkbox"
        :checked="todoItem.isDone"
      />
    </div>
    <div id="checkbox">
      В избранном
      <input
        @change="toggleCheckboxFav(todoItem.id, !todoItem.isFavourite)"
        type="checkbox"
        :checked="todoItem.isFavourite"
      />
    </div>
    <div id="priority">Приоритет: {{ todoItem.priority }}</div>
    <div>
      <button @click="redirect()" class="submit-btn" type="submit">
        Просмотреть задачу
      </button>
    </div>
    <div>
      <button @click="deleteTodo(todoItem.id)" class="submit-btn" type="submit">
        Удалить задачу
      </button>
    </div>
  </div>
</template>

<script>
import {
  changeTodoDone,
  changeTodoFav,
  deleteTodoById,
} from "@/netClient/services/todoService";

export default {
  props: {
    todoItem: {
      type: Object,
      required: true,
    },
  },
  name: "TodoItem",
  methods: {
    async deleteTodo(id) {
      try {
        await deleteTodoById(id);
        this.$emit("updateTodoList");
      } catch (error) {
        console.error({ error });
      }
    },
    async toggleCheckboxDone(id, isDone) {
      try {
        await changeTodoDone(id, isDone);
      } catch (error) {
        console.error({ error });
      }
    },

    async toggleCheckboxFav(id, isFavourite) {
      try {
        await changeTodoFav(id, isFavourite);
      } catch (error) {
        console.error({ error });
      }
    },
    redirect() {
      localStorage.todoId = this.todoItem.id;
      this.$router.push("/todo");
    },
  },
};
</script>

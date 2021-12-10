<template>
  <form @submit="onFormSubmit">
    <div class="form-field">
      <label for="title">Заголовок<br /></label>
      <input v-model="title" id="title" type="text" required />
    </div>

    <div class="form-field">
      <label for="description">Описание<br /></label>
      <input v-model="description" id="description" type="text" required />
    </div>

    <div class="form-field">
      <label for="priority">Приоритет<br /></label>
      <input v-model="priority" id="priority" type="number" />
    </div>

    <button class="submit-btn" type="submit">Добавить задачу</button>
  </form>
</template>

<script>
import { createTodo } from '@/netClient/services/todoService.js'

export default ({
    name: 'createTodo',
    data: () => ({
        title: '',
        description: '',
        priority: '',
    }),
    
    methods : {
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
    }
})
</script>

<template>
  <div id="main">
    <li>
        <div id="title">{{userInfo.title}}</div>
        <div id="description">Описание: {{ userInfo.description}}</div>
        <div  id="checkbox">Выполнено <input  type="checkbox" :checked="userInfo.isDone"></div>
        <div id="checkbox">В избранном <input  type="checkbox" :checked="userInfo.isFavourity"></div>
        <div id="priority">Приоритет: {{userInfo.priority}}</div>
    </li>
  </div>
</template>

<script>
import { getTodo } from '@/netClient/dataService';
export default {
  name: "TodoPage",
  data: () => ({
        userInfo: {},
    }),
  mounted(){
        this.getTodoInfo();
    },
  methods:{
    async getTodoInfo(){
      try {
        this.userInfo = await getTodo();
      } catch (error) {
        console.error({ error });
      }
    }
  }
};
</script>
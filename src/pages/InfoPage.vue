<template>
  <div id="main">
    <li>
      <div id="login">Логин: {{userInfo.login}}</div>
      <div id="email">Почта: {{userInfo.email}} </div>
      <div id="name">Имя: {{userInfo.password}}</div>
    </li>
  </div>
</template>

<script>
import { getUser } from '@/netClient/dataService';
// updateUser
export default {
  name: "InfoPage",
  data: () => ({
        userInfo: {},
    }),
  mounted(){
        this.getUserInfo();
    },
  methods:{
    async getUserInfo(){
      try {
        this.userInfo = await getUser();
      } catch (error) {
        console.error({ error });
      }
    }
  }
};
</script>
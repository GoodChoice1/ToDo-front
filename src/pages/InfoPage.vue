<template>
  <div id="main">
    <div>
    <div id="login">Логин: {{userInfo.login}}</div>
    <div id="email">Почта: {{userInfo.email}} </div>
    <div id="name">Имя: {{userInfo.name}}</div>
    <form @submit="onFormSubmit()">
      <br/>
        Изменить себя
        <div class="form-field">
            <label for="login">Логин<br/></label>
            <input v-model="login" id="login" type="text">
        </div>

        <div class="form-field">
            <label for="mail">Почта<br/></label>
            <input v-model="mail" id="mail" type="text">
        </div>

        <div class="form-field">
            <label for="name">Имя<br/></label>
            <input v-model="name" id="name" type="text">
        </div>

        <div>
          <button class="submit-btn" type="submit">
            Изменить
          </button>
        </div>
      </form>
      <br/>
      Изменить пароль
    <form @submit="onPassFormSubmit()">
      
      <div class="form-field">
            <label for="oldPass">Старый пароль<br/></label>
            <input v-model="oldPass" id="oldPass" type="text" required>
        </div>

        <div class="form-field">
            <label for="newPass">Новый пароль<br/></label>
            <input v-model="newPass" id="newPass" type="text" required>
        </div>

        <div>
          <button class="submit-btn" type="submit">
            Изменить
          </button>
        </div>
    </form>
    </div>
  </div>
</template>

<script>
import { getUser, updateUser, updateUserPass } from '@/netClient/services/userService';
export default {
  name: "InfoPage",
  data: () => ({
        userInfo: {},
        login: '',
        mail: '',
        name: '',
        oldPass: '',
        newPass: '',
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
    },
    async onFormSubmit(){
      try {
        await updateUser(
          this.login.trim(),
          this.mail.trim(),
          this.name.trim(),
        );
      } catch (error) {
        console.error({error})
      }
    },
    isTodo(){
      return localStorage.todoId != undefined
    },

    async onPassFormSubmit(){
      try {
        await updateUserPass(
          this.oldPass.trim(),
          this.newPass.trim(),
        );
      } catch (error) {
        console.error({error})
      }
    },
  }
};
</script>
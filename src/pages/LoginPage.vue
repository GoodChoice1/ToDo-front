<template>
  <form @submit.prevent="onFormSubmit" class="form">
    <div class="form-field">
      <label for="login"></label>
      Login
      <br />
      <input v-model="login" id="login" type="text" required />
    </div>
    <div class="form-field">
      <label for="password"></label>
      Password
      <br />
      <input v-model="password" id="password" type="text" required />
    </div>
    <button class="submit-btn" type="submit">Войти</button>
    <div class="action-link">
      <span> Нет аккаунта? </span>
      <a @click="redirect" class="link-btn"> Зарегистрироваться </a>
    </div>
  </form>
</template>

<script>
import { login } from "@/netClient/services/authService";
export default {
  name: "LoginPage",
  data: () => ({
    login: "",
    password: "",
  }),
  methods: {
    redirect() {
      this.$router.push("/registration");
    },
    async onFormSubmit() {
      try {
        const token = await login(this.login.trim(), this.password.trim());
        if (token) {
          this.$router.push("/");
        }
      } catch (error) {
        console.warn({ error });
        alert(error.response.data.message);
      }
    },
  },
};
</script>


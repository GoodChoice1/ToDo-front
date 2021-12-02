<template>
    <form @submit.prevent="onFormSubmit">

        <div class="form-field">
            <label for="login">Login<br/></label>
            <input v-model="login" id="login" type="text" required>
        </div>

        <div class="form-field">
            <label for="password">Password<br/></label>
            <input v-model="password" id="password" type="text" required>
        </div>

        <div class="form-field">
            <label for="email">Email<br/></label>
            <input v-model="email" id="email" type="text" required>
        </div>

        <div class="form-field">
            <label for="name">Name<br/></label>
            <input v-model="name" id="name" type="text">
        </div>

        <button class="submit-btn" type="submit">
            Зарегистрироваться
        </button>

        <div class="action-link">
            <span>
                Есть аккаунт?
            </span>
            <a @click="redirect" class="link-btn">
                Войти
            </a>
        </div>

    </form>
</template>

<script>

import {register} from '@/netClient/dataService';

export default {
    name: 'RegistrationPage',
    data: () => ({
        email: '',
        login: '',
        password: '',
        name: '',
    }),
    methods: {
        redirect(){
            this.$router.push('/login')
        },
        async onFormSubmit(){
            try {
                const data = await register(
                    this.login.trim(),
                    this.password.trim(),
                    this.email.trim(),
                    this.name.trim(),
                    )
                console.warn({data})
            } catch (error) {
                console.error({ error });
            }
            this.$router.push('/login')
        }
    }
}
</script>

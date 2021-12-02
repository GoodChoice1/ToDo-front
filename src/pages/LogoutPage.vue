<template>
    <button @click="logout" class="submit-btn" type="submit">
        Выйти из аккаунта
    </button>
</template>

<script>

export default {
    name: 'LogoutPage',
    methods: {
        logout(){
            this.$router.push('/login')
        }
    }
}
</script>


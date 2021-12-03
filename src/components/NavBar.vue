<template>
    <div id="nav">
      <router-link class="link" to ="/">
        Список дел
      </router-link>
      <router-link class="link" to = "/todo">
        Задание
      </router-link>
      <router-link class="link" to = "/info">
        Инфо
      </router-link>
      <a class="link" @click="onLogoutClicked">
        Выход
      </a>
    </div>
</template>

<script>
import { logout } from '@/netClient/dataService.js'

export default {
  name: "NavBar",
  methods: {
    async onLogoutClicked(){
            try {
                await logout();
                this.$router.push('/login');
            } catch (error) {
                console.error({ error });
            }
        }
  }
}
</script>
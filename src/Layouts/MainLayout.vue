<template>
    <div class="main-layout">
        <NavBar/>
        <div class="page-container">
            <router-view/>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
    name: 'AuthLayout',
    components: {
        NavBar
    }
}
</script>

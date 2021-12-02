<template>
<div id="main">
    <component :is="layout">
      <router-view/>
    </component>
</div>
</template>

<script>
import AuthLayout from '@/Layouts/AuthLayout';
import MainLayout from '@/Layouts/MainLayout';
export default {
  name: "App",
  components: {
    AuthLayout,MainLayout
  },
  computed: {
    layout(){
      return this.$route.meta?.layout || 'main-layout'
    }
  }
};
</script>
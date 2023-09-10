<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Home from './pages/home.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Home



  }
}
</script>

<template>
  <AppHeader />

  <Home />


  <router-view>

  </router-view>

  <AppFooter />
</template>

<style></style>
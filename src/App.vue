<template>
  <v-app>
    <AppNavbar />
    <v-container class="pt-8">
      <RouterView />
    </v-container>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './components/global/AppNavbar.vue'
import AppFooter from './components/global/AppFooter.vue'
</script>

<template>
  <footer>
    <v-footer
      :app="true"
      class="footer d-flex flex-column pa-0"
    >
      <div class="pa-4 bg-black text-center w-100">
        <strong>© {{ new Date().getFullYear() }} - Kaustubh Ghodke</strong>
      </div>
    </v-footer>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 3px solid #00fba7;
}
</style>

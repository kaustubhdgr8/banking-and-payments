<template>
  <v-app-bar class="header d-flex align-center px-3 elevation-2 flex-nowrap">
    <img
      alt="Digital Bank logo"
      src="../../assets/digital-bank.png"
      width="60"
    />
    <nav class="header__nav d-flex align-center">
      <RouterLink
        activeClass="active"
        class="header__nav__item ml-8 pe-1 d-flex align-center"
        to="/dashboard"
      >
        <v-icon icon="mdi-finance"></v-icon>
        <span class="ml-2 text-subtitle-2 text-uppercase">
          {{ $t('nav.dashboard') }}
        </span>
      </RouterLink>
      <RouterLink
        activeClass="active"
        class="header__nav__item ml-8 pe-1 d-flex align-center"
        to="/accounts"
      >
        <v-icon icon="mdi-account-box-multiple-outline"></v-icon>
        <span class="ml-2 text-subtitle-2 text-uppercase">
          {{ $t('nav.accounts') }}
        </span>
      </RouterLink>
      <RouterLink
        activeClass="active"
        class="header__nav__item ml-8 pe-1 d-flex align-center"
        to="/transactions"
      >
        <v-icon icon="mdi-invoice-text-multiple-outline"></v-icon>
        <span class="ml-2 text-subtitle-2 text-uppercase">
          {{ $t('nav.transactions') }}
        </span>
      </RouterLink>
    </nav>
    <v-spacer></v-spacer>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          color="indigo-lighten-5"
          prepend-icon="mdi-translate"
          variant="tonal"
        >
          {{ $i18n.locale }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
        >
          <v-list-item-title class="text-uppercase">{{ locale }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: sticky;
  background-image: linear-gradient(to right, #580eeb, black);

  &__nav {
    height: 60px;

    &__item {
      height: inherit;
      color: var(--vt-c-white-soft);

      &.active {
        border-bottom: 3px solid var(--vt-c-white-soft);

        span {
          font-weight: bold;
          text-shadow: 0 0 1px #00fba7;
        }
      }

      &:hover {
        color: #00fba7;
        border-color: #00fba7;
      }
    }
  }
}
</style>

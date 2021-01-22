<template lang="pug">
  v-row.fill-height(
    justify="center"
    align="center"
    no-gutters
  )
    v-col(
      cols="12"
      sm="10"
      md="8"
      lg="7"
    )
      div.text-center.headline This isn't the page you are looking for
      div.text-center.headline(v-if="$router.currentRoute.path === '/'") This page does not exist
      div.text-center.headline(v-else)
        | Page
        code.mx-2 {{ $router.currentRoute.path }}
        | does not exist
      v-img(
        :src="require('~/assets/img/fox.png')"
        aspect-ratio="1"
        contain
      )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'home'
})
</script>

<template lang="pug">
  v-row(
    justify="center"
    align="center"
  )
    v-col(cols="8")
      v-card
        v-card-title This is the base boilerplate page
        v-card-text This project was Sugar pre-configured
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'home'
})
</script>

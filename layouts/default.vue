<template lang="pug">
  v-app(dark)
    v-app-bar(app)
      router-link(
        to="/"
        style="text-decoration: none; color: inherit;"
      )
        v-toolbar-title Base Boilerplate
    v-main
      v-container
        nuxt
    v-footer(
      app
      absolute
    )
      v-spacer
      SugarMark
</template>

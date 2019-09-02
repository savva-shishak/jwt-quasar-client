<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Cookies from "js-cookie"
import { mapMutations } from "vuex";
export default {
  name: 'App',
  created() {
    const user = Cookies.getJSON("user")
    
    this.setUser(user)
  },
  methods: mapMutations(["setUser"])
}
</script>

<style>
</style>

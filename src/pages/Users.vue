<template>
  <q-page class="flex flex-center">
    <q-list bordered separator style="width: 90%; max-width: 500px">
      <q-item v-for="user of getUsers" :key="user.login">
        <q-item-section>
          <q-item-label>{{user.name}}</q-item-label>
          <q-item-label caption>логин: {{user.login}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: mapActions(["newUsers"]),
  computed: mapGetters(["getUsers"]),
  async created() {
    await this.newUsers()
  }
}
</script>

<style>

</style>
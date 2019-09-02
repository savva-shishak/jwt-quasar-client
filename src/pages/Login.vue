<template>
  <q-page class="flex flex-center text-primary">
    <q-card class="text-center" style="max-width: 450px; width: 90%">
      <q-card-section>
        <h4>Вход</h4>
      </q-card-section>
      <q-card-section>
        <q-input v-model="login" label="Логин"/>
      </q-card-section>
      <q-card-section>
        <q-input v-model="password" type="password" label="Пароль"/>
      </q-card-section>
      <q-card-section>
        <q-btn label="Забыли пароль?" size="sm" flat @click="forgetLogin"/>
      </q-card-section>
      <q-card-section>
        <q-btn label="Войти" color="deep-orange" class="full-width" rounded @click="requestToLogin({login, password})"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      login: "",
      password: ""
    }
  },
  methods: mapActions(["requestToLogin", "forgetLogin"])
}
</script>

<style>

</style>
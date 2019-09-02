<template>
  <q-page class="flex flex-center text-primary">
    <q-card class="text-center" style="max-width: 600px; width: 90%">
      <q-card-section>
        <h4>Регистрация</h4>
      </q-card-section>

      <q-card-section>
        <q-input v-model="name" label="Как вас зовут?"/>
      </q-card-section>

      <q-separator/>

      <q-card-section>
        <q-input v-model="login" label="Придумайте логин"/>
      </q-card-section>

      <q-separator/>

      <q-card-section>
        <q-input v-model="password" type="password" label="Придумайте пароль"/>
      </q-card-section>

      <q-separator/>

       <q-card-section>
        <q-input v-model="passwordCheck" type="password" label="Подтвердите пароль"/>
      </q-card-section>

      <q-separator/>

      <q-card-section>
        <q-btn 
          class="full-width" color="deep-orange" @click="requestToCreate({name, login, password, passwordCheck})" label="Создать аккаунт" rounded
          />
          
      </q-card-section>
      
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      name: "",
      login: "",
      password: "",
      passwordCheck: ""
    }
  },
  methods: mapActions(["requestToCreate"])
}
</script>

<style>

</style>
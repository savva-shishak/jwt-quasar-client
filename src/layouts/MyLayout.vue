<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{getUser.name? getUser.name:'Fasebook' }}
        </q-toolbar-title>

        <div v-show="getUser.name">
          <q-btn label="Выйти" @click="logout"/>
        </div>
        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2 text-primary"
    >
      <q-list>
        <q-item-label class="text-grey" header>Fasebook</q-item-label>

        <q-item :to="'/users'" tag="a">
          <q-item-section avatar>
            <q-icon name="fas fa-users"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Все пользователи</q-item-label>
          </q-item-section>
        </q-item>

        <q-item :to="'/sigin'" tag="a" v-show="!getUser.name">
          <q-item-section avatar>
            <q-icon name="create"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Регистрация</q-item-label>
          </q-item-section>
        </q-item>

        <q-item :to="'/login'" tag="a" v-show="!getUser.name">
          <q-item-section avatar>
            <q-icon name="fas fa-key"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Вход</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters(["getUser"]),
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    ...mapMutations(["logout"]),
    openURL
  }
}
</script>

<style>
</style>

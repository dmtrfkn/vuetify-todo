<template>
  <v-app class="app">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Vuetify Todo</v-list-item-title>
          <v-list-item-subtitle>The best fast todo ever </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list dense nav>
        <v-list-item :to="item.to" v-for="item in list" :key="item.title" link>
          <v-list-item-icon>
            <v-icon aria-hidden="false">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar prominent app color="primary" dark src="./assets/ффы.jpeg">
      <v-app-bar-nav-icon style="color: white" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title style="color: white">Vuetify Todo </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,

    list: [
      { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'About', icon: 'mdi-account', to: '/about' },
    ],
  }),
};
</script>

<style>
h1 {
  color: white;
}
.v-main__wrap {
  background-color: #7899d2;
}
</style>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Project Piano
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <v-spacer />
      <Profile />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Profile from './components/Profile.vue';
export default {
  name: 'App',

  components: {
    HelloWorld,
    Profile,
  },

  data: () => ({
    //
  }),
};
</script>

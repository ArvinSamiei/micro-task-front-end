<template>
  <!-- Toolbar -->
  <v-toolbar dark color="primary" fixed app>
    <v-toolbar-side-icon @click.stop="nav()"></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Cradsourcing</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>language</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>


<script>


export default {
   data: () => ({
      items: [
        { title: 'English' },
        { title: 'فارسی' },
      ]
    }),
    methods: {
      nav() {
        this.$store.dispatch('nav')
      }
    }
};
</script>

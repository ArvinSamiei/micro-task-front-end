<template>
  <v-navigation-drawer
    v-model="drawer"
    hide-overlay
    app
    value="true"
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/women/21.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Carla Smith</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'home' },
          { title: 'Dashboard', icon: 'dashboard' },
          { title: 'Settings', icon: 'settings' },
          { title: 'Wallet', icon: 'money' }
        ]
      }
    }
  }
</script>
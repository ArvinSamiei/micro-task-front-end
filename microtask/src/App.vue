<template>
  <v-app>
    <!-- Toolbar -->
    <v-toolbar dark color="primary" fixed app>
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Micro Task</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Navbar-Drawer -->
    <v-navigation-drawer stateless value="true" fixed app>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <v-list-group prepend-icon="account_circle" value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group no-action sub-group value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Admin</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(admin, i) in admins" :key="i" @click>
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Actions</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list-tile v-for="(crud, i) in cruds" :key="i" @click>
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container grid-list-xl>
        <v-layout v-bind="binding">
          <v-flex>
            <v-card dark color="primary">
              <v-card-text>one</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card dark color="secondary">
              <v-card-text>two</v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card dark color="accent">
              <v-card-text>three</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer height="auto" color="primary lighten-1" app inset>
      <v-layout justify-center row wrap>
        <v-btn v-for="link in links" :key="link" color="white" flat round>{{ link }}</v-btn>
        <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
          &copy;2018 —
          <strong>Vuetify</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "@/views/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    admins: [["Management", "people_outline"], ["Settings", "settings"]],
    cruds: [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"]
    ],
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>

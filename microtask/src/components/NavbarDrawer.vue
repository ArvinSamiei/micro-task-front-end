<template>
  <v-navigation-drawer v-model="drawer" hide-overlay app stateless floating>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/women/21.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title> {{  username }} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title" @click="runMethod(item.title)">
        <v-list-tile-action>
          <v-icon @click="runMethod(item.title)">{{ item.icon }}</v-icon>
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
  data() {
    return {
      items: [
        { title: "Home", icon: "home" },
        { title: "Login", icon: "person_add" }
      ],
      username: 'Users'
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    drawer: function() {
      return this.$store.getters.nav;
    }
  },
  mounted() {
    if (this.isLoggedIn) {
      this.items = [
        { title: "Home", icon: "home" },
        { title: "Dashboard", icon: "dashboard" },
        { title: "Settings", icon: "settings" },
        { title: "Wallet", icon: "money" },
        { title: "Logout", icon: "exit_to_app" }
      ];
      
      fetch("http://localhost:8000/profilemanager/current_user/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(json => {
           this.username = json.username 
        });
    }
  },
  methods: {
    Home: function() {
      this.$router.push("/");
    },
    Dashboard: function() {
      this.$router.push("/dashboard");
    },
    Settings: function() {
      this.$router.push("/setting");
    },
    Wallet: function() {
      this.$router.push("/wallet");
    },
    Logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    Login: function() {
      this.$router.push("/login");
    },
    runMethod(method) {
      this[method]();
    }
  }
};
</script>
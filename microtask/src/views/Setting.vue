<template>
  <v-layout row style="height: 100%;">
    <v-flex xs12 sm6 offset-sm3 style="height: 100%;">
      <v-card style="height: 100%;">
        <v-list two-line subheader>
          <v-subheader>User</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content @click="changePassword()">
              <v-list-tile-title @click="changePassword()">Password</v-list-tile-title>
              <v-list-tile-sub-title @click="changePassword()">Change your password</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list subheader two-line>
          <v-subheader>Profile</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Profile photo</v-list-tile-title>
              <v-list-tile-sub-title>Change your profile photo</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Address</v-list-tile-title>
              <v-list-tile-sub-title>Change your address</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Phone</v-list-tile-title>
              <v-list-tile-sub-title>Change your phone number</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list subheader two-line>
          <v-subheader>Skills</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>New Skill</v-list-tile-title>
              <v-list-tile-sub-title>Add a new skill</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Remove Skill</v-list-tile-title>
              <v-list-tile-sub-title>Remove a skill from your skills list</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list subheader two-line>
          <v-subheader>Role</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Requster</v-list-tile-title>
              <v-list-tile-sub-title>Become a requster</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  methods: {
    changePassword: function() {
      this.$router.push('/changepass')
    }
  }
};
</script>

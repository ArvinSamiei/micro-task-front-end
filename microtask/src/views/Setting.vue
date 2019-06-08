<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="green" title="Edit Profile" text="Complete your profile">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field label="Username" disabled/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field class="purple-input" label="Phone"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Email Address" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="First Name" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Last Name" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="National ID" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Bank Account" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="City" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Country" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-checkbox v-model="checkbox1" :label="`Become A Requester`"></v-checkbox>
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn style="margin-top: 20px; color: green;">Update Profile</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  //
};
</script>


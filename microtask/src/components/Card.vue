<template>
  <div style="width: 100%;">
    <v-flex xs12>
      <v-card v-bind:color="color" class="white--text">
        <v-layout>
          <v-flex xs5>
            <v-img v-bind:src="image" height="125px"  contain></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ title }}</div>
                <div>{{ subtitle }}</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          Contributions
          <v-spacer></v-spacer>
          {{ contributions }}
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>


<script>
export default {
    name: "Card",
    props: ['contributions', 'title', 'subtitle', 'image', 'color'],
    data() {
        return {
            
        }
    }
}
</script>

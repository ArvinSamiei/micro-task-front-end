<template>
  <div id="e3" style="height:100%; max-width: 500px; margin: auto;" class="grey lighten-3">
    <v-card style="height:100%;">
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">What would you like to help with?</div>
                  <span>Contribute to improving artificial inteligence and get rewards.</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          

          <Card
          :contributions="99"
          :title="`Image Labeling`"
          :subtitle="`Validate images label`"
          :image="`https://cdn.vuetifyjs.com/images/cards/foster.jpg`"
          :color="`cyan darken-2`">
          </Card>

          <Card
          :contributions="78"
          :title="`Voice To Text`"
          :subtitle="`Convert voice to text`"
          :image="`https://cdn.vuetifyjs.com/images/cards/halcyon.png`"
          :color="`purple`">
          </Card>

          <Card
          :contributions="60"
          :title="`Text To Voice`"
          :subtitle="`Convert text to voice`"
          :image="`https://cdn.vuetifyjs.com/images/cards/foster.jpg`"
          :color="`cyan darken-2`">
          </Card>

          <Card
          :contributions="80"
          :title="`Text To Text`"
          :subtitle="`Convert ambigious text to clean text`"
          :image="`https://cdn.vuetifyjs.com/images/cards/halcyon.png`"
          :color="`purple`">
          </Card>

        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>


<script>
import Card from "@/components/Card";

export default {
  name: "CardList",
  components: {
    Card
  }
};
</script>


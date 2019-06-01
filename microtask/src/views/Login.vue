<template>
  <div style="height:100%; max-width: 500px; margin: auto; margin-top: 20px;">
    <form>
      <v-text-field
        v-model="username"
        v-validate="'required|max:25'"
        :counter="25"
        :error-messages="errors.collect('username')"
        label="Username"
        data-vv-name="username"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        v-validate="'required|max:100'"
        :counter="100"
        :error-messages="errors.collect('password')"
        label="Password"
        data-vv-name="password"
        required
        type="password"
      ></v-text-field>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    dictionary: {
      attributes: {
        email: "E-mail Address"
        // custom attributes
      },
      custom: {
        name: {
          required: () => "can not be empty",
          max: "The name field may not be greater than 10 characters"
        },
        select: {
          required: "Select field is required"
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.$validator.reset();
    }
  }
};
</script>

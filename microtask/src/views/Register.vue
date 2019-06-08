<template>
  <div style="height:100%; max-width: 500px; margin: auto; margin-top: 20px; margin-bottom: 20px;">
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
        v-validate="'required'"
        :counter="100"
        :error-messages="errors.collect('password')"
        label="Password"
        data-vv-name="password"
        required
        type="password"
        ref="password"
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword"
        v-validate="'required|confirmed:password'"
        :counter="100"
        :error-messages="errors.collect('confirm password')"
        label="Confirm Password"
        data-vv-name="confirm password"
        required
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
      ></v-text-field>
      
      <v-btn @click.stop.prevent="submit()" style="margin-top: 20px; color: green;" >register</v-btn>
      <v-btn @click="clear" style="margin-top: 20px; color: red;">clear</v-btn>
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
    type: null,
    username: '',
    email: "",
    password: '',
    confirmPassword: '', 
    dictionary: {
      attributes: {
        email: "E-mail Address"
      }
    }
  }),
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  methods: {
    submit() {
      this.$validator.validateAll().then((response) => {
          if (response) {
              const data = {
                username: this.username,
                email: this.email,
                password: this.password,
                group: this.type
              }
              this.$store.dispatch('register', data)
              .then(() => this.$router.push('/'))
              .catch(err => {
                console.log(err)
                this.clear()
              })
          }
      });
    },
    clear() {
      this.type = null,
      this.username = '',
      this.email = "",
      this.password = '',
      this.confirmPassword = '',
      this.$validator.reset();
    }
  }
};
</script>
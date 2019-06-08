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
      <v-btn @click.stop.prevent="submit()" style="margin-top: 20px; color: green;" >login</v-btn>
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
  data: () => (
    {
      username: '',
      password: ''
    }
  ),
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  methods: {
    submit() {
      this.$validator.validateAll().then((res) => {
          if (res) {
            let username = this.username
            let password = this.password
            this.$store.dispatch('login', { username, password })
            .then(() => this.$router.push('/'))
            .catch(err => { 
              console.log(err)
              this.$router.push('/login')
              this.clear()
            })
          }
      });
    },
    clear() {
      this.username = ''
      this.password = ''
      this.$validator.reset()
    }
  }
};
</script>

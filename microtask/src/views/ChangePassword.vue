<template>
  <div style="height:100%; max-width: 500px; margin: auto; margin-top: 20px;">
    <form>
      <v-text-field
        v-model="old_password"
        v-validate="'required'"
        :counter="100"
        :error-messages="errors.collect('old password')"
        label="Old Password"
        data-vv-name="old password"
        required
        type="password"
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
      <v-btn @click.stop.prevent="submit()" style="margin-top: 20px; color: green;" >submit</v-btn>
      <v-btn @click="clear" style="margin-top: 20px; color: red;">clear</v-btn>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  data: () => ({
    old_password: "",
    password: "",
    confirmPassword: ""
  }),
  $_veeValidate: {
    validator: "new"
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(res => {
        if (res) {
          let old_password = this.old_password;
          let new_password = this.password;
          this.$store
            .dispatch("changePassword", { old_password, new_password })
            .then(() => this.$router.push("/"))
            .catch(err => {
              console.log(err)
              this.$router.push("/changepass");
              this.clear();
            });
        }
      });
    },
    clear() {
      this.username = "";
      this.password = "";
      this.$validator.reset();
    }
  }
};
</script>

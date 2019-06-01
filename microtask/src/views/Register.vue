<template>
  <div style="height:100%; max-width: 500px; margin: auto; margin-top: 20px;">
    <form>
      <v-text-field
        v-model="firstName"
        v-validate="'required|max:20'"
        :counter="20"
        :error-messages="errors.collect('first name')"
        label="First Name"
        data-vv-name="first name"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        v-validate="'required|max:20'"
        :counter="20"
        :error-messages="errors.collect('last name')"
        label="Last Name"
        data-vv-name="last name"
        required
      ></v-text-field>
      <v-radio-group
        label="Gender"
        v-model="gender"
        v-validate="'required'"
        data-vv-name="gender"
        :error-messages="errors.collect('gender')"
      >
        <v-radio label="Male" value="male"></v-radio>
        <v-radio label="Female" value="female"></v-radio>
      </v-radio-group>

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
      <v-text-field
        v-model="nationalid"
        v-validate="'required'"
        :error-messages="errors.collect('national id')"
        label="National ID"
        data-vv-name="national id"
        required
      ></v-text-field>
      <v-text-field
        v-model="phoneNum"
        v-validate="'required'"
        :error-messages="errors.collect('phone number')"
        label="Phone Number"
        data-vv-name="phone number"
        required
      ></v-text-field>
      <v-select
        v-model="country"
        v-validate="'required'"
        :items="countries"
        :error-messages="errors.collect('country')"
        label="Country"
        data-vv-name="country"
        required
      ></v-select>
      <v-text-field
        v-model="city"
        v-validate="'required|max:85'"
        :counter="85"
        :error-messages="errors.collect('city')"
        label="City"
        data-vv-name="city"
        required
      ></v-text-field>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import { mapActions } from 'vuex'


Vue.use(VeeValidate);

export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    firstName: "",
    lastName: "",
    gender: null,
    username: '',
    email: "",
    nationalid: '',
    phoneNum: '',
    country: null,
    city: '',
    password: '',
    confirmPassword: '', 
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua &amp; Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia &amp; Herzegovina",
      "Botswana",
      "Brazil",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cape Verde",
      "Cayman Islands",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Cote D Ivoire",
      "Croatia",
      "Cruise Ship",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Polynesia",
      "French West Indies",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kuwait",
      "Kyrgyz Republic",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Pierre &amp; Miquelon",
      "Samoa",
      "San Marino",
      "Satellite",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "South Africa",
      "South Korea",
      "Spain",
      "Sri Lanka",
      "St Kitts &amp; Nevis",
      "St Lucia",
      "St Vincent",
      "St. Lucia",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Timor L'Este",
      "Togo",
      "Tonga",
      "Trinidad &amp; Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks &amp; Caicos",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "United States Minor Outlying Islands",
      "Uruguay",
      "Uzbekistan",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (US)",
      "Yemen",
      "Zambia",
      "Zimbabwe"
    ],
    dictionary: {
      attributes: {
        email: "E-mail Address"
      },
      custom: {
        name: {
          required: () => "can not be empty",
          max: "The name field may not be greater than 20 characters"
        },
        country: {
          required: "Country field is required"
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    ...mapActions([
      'register'
    ]),
    submit() {
      this.$validator.validateAll().then((response) => {
          if (response) {
              const payload = {
                firstName: this.firstName,
                lastName: this.lastName,
                gender: this.gender,
                username: this.username,
                email: this.email,
                nationalid: this.nationalid,
                phoneNum: this.phoneNum,
                country: this.country,
                city: this.city,
                password: this.password,
              }
              console.log(payload)
              this.register(payload)
              this.clear()
          }
      });
    },
    clear() {
      this.firstName =  "",
      this.lastName = "",
      this.gender = null,
      this.username = '',
      this.email = "",
      this.nationalid = '',
      this.phoneNum = '',
      this.country = null,
      this.city = '',
      this.password = '',
      this.confirmPassword = '',
      this.$validator.reset();
    }
  }
};
</script>
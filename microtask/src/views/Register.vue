<template>
  <div style="height:100%; max-width: 500px; margin: auto; margin-top: 20px;">
    <form>
      <v-text-field
        v-model="firstName"
        v-validate="'required|max:20'"
        :counter="20"
        :error-messages="errors.collect('firstName')"
        label="First Name"
        data-vv-name="firstName"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        v-validate="'required|max:20'"
        :counter="20"
        :error-messages="errors.collect('lastName')"
        label="Last Name"
        data-vv-name="lastName"
        required
      ></v-text-field>

      <p>Gender</p>
      <v-radio-group v-model="radios" :mandatory="false">
        <v-radio label="Male" value="radio-1"></v-radio>
        <v-radio label="Female" value="radio-2"></v-radio>
      </v-radio-group>

      <v-text-field
        v-model="username"
        v-validate="'required|max:25'"
        :counter="25"
        :error-messages="errors.collect('username')"
        label="user name"
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
      <v-text-field
        v-model="confirmPassword"
        v-validate="'required|max:100'"
        :counter="100"
        :error-messages="errors.collect('confirmPassword')"
        label="Confirm Password"
        data-vv-name="confirmPassword"
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
        v-model="natinalid"
        v-validate="'required'"
        :error-messages="errors.collect('nationalid')"
        label="National ID"
        data-vv-name="nationalid"
        required
      ></v-text-field>
      <v-text-field
        v-model="phoneNum"
        v-validate="'required'"
        :error-messages="errors.collect('phoneNum')"
        label="Phone Number"
        data-vv-name="phoneNum"
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

Vue.use(VeeValidate);

export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
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
        // custom attributes
      },
      custom: {
        name: {
          required: () => "can not be empty",
          max: "The name field may not be greater than 10 characters"
          // custom messages
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
      this.checkbox = null;
      this.$validator.reset();
    }
  }
};
</script>
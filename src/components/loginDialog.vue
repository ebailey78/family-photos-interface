<template>
  <v-dialog
    :value="!loggedIn"
    max-width="500"
    persistent
  >
    <v-card>
      <v-card-title>Welcome</v-card-title>
      <v-card-text>
        <p :style="{color: messageColor}" v-html='message'></p>
        <v-form v-model="validForm" ref='form'>
          <v-row dense>
            <v-col cols = 12>
              <v-text-field
                label="Email"
                v-model="email"
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols = 12>
              <v-text-field
                type="password"
                label="Password"
                v-model="password"
                :rules="[required]"
                @keypress.enter="login"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text color='grey'>Forgot Password?</v-btn>
        <v-spacer></v-spacer>
        <v-btn color='primary' :disabled="!validForm" @click="login"><v-icon left>mdi-login</v-icon>Sign In</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "fpLoginDialog",
    data() {
      return {
        required: (v) => !!v || "Required",
        validForm: false,
        email: "",
        password: "",
        message: "Please sign in to continue",
        messageColor: 'black'
      }
    },
    computed: {
      loggedIn() {
        return this.$store.getters['user/loggedIn']
      }
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch("user/login", {username: this.email, password: this.password})
        } catch(err) {
          this.message = err.message
          this.messageColor = 'red'
        }
      }
    }
  }
</script>
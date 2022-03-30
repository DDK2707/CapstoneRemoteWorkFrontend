<template>
  <div class="container">
    <h1 class="title">Log in to your TUNEz account</h1>
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="submit"
        >
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="login.email"
          />
          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="login.password"
          />
          <p>
            Dont have an account?? <router-link to="/register"
              >Click here to register</router-link
            >
          </p>
          <!-- Sign in button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Sign in
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }, 
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = newFormData();
      User.append("email", form.email);
      User.append("password", form.password);
      try{
        await this.LogIn(User);
        this.$router.push("/timeline")
        this.showError = false
      }catch(error) {
        this.showError = true
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 5rem;
}

.title {
  text-align: center;
  margin-right: 1em;
  color: #7692ff;
}

form {
  border-radius: 10px;
}
</style>
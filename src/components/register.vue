<template>
  <div class="registercontainer">
      <h1 class="registertitle">Register Here:</h1>
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
            <form
            class="border border-primary p-5"
            style="margin-top:70px;height:auto;padding-top:100px !important;"
            @submit.prevent="registerUser">

            <input
            type="text"
            id="username"
            class="form-control mb-5"
            placeholder="Username"
            v-model="register.username"/>

            <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="register.email"/>
          
            <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="register.password"
            />

            <select name="roles" id="roleselect" v-model="register.role">
                <option value="user/artist">Artist</option>
                <option value="producer"> Producer</option>
                <option value="exec/label">Music Label</option>
            </select>
          <p>
            Already have an account?? <router-link to="/"
              >Click here to login</router-link
            >
          </p>
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Register your account
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
        username:"",
        email: "",
        password: "",
        role:""
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/home");
        this.showError = false
      }catch (error) {
        this.showError = true
      }
    }
  }
}
</script>

<style>
    .registercontainer {
  margin-top: 5rem;
}

.registertitle {
  text-align: center;
  margin-right: 1em;
  color: #7692ff;
}

form {
  border-radius: 10px;
}
</style>
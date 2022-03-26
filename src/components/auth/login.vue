<template>
  <div class="container">
    <h1 class="title">Log in to your TUNEz account</h1>
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="loginUser"
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
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.patch("/api/users/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          Swal.fire("Success", "Login Successful", "success");
          this.$router.push("/home");
        }
      } catch (err) {
        Swal.fire("Error", "Something Went Wrong", "error");
        console.log(err.message);
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
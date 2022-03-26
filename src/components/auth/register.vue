<template>
  <div class="registercontainer">
      <h1 class="registertitle">Register Here:</h1>
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
            <form
            class="text-center border border-primary p-5"
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
          
            <!-- <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="update.password"
            /> -->

            <select name="roles" id="roleselect">
                <option value="user/artist">Artist</option>
                <option value="producer"> Producer</option>
                <option value="exec/label">Music Label</option>
            </select>
          <p>
            Alread have an account?? <router-link to="/"
              >Click here to login</router-link
            >
          </p>
          <!-- Sign in button -->
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
export default {
    data() {
    return {
      register: {
        username:"",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.patch("/api/users/register", this.register);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          Swal.fire("Success", "Register Successful", "success");
          this.$router.push("/home");
        }
      } catch (err) {
        Swal.fire("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    }
  }
}
</script>

<style>
    .registertitle{
        color: #7692ff;
    }
</style>
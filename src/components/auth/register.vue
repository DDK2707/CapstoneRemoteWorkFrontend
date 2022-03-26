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
          
            <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="register.password"
            />

            <select name="roles" id="roleselect">
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
        let response = await this.$http.post("/api/users/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/home");
          alert("Success", "Registration Was successful", "success");
        } else {
          alert("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error == 409) {
          Swal.fire("Error", error.data.message, "error");
        } else {
          Swal.fire("Error", error.data.err.message, "error");
        }
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
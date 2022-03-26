<template>
  <div class="registercontainer">
      <h1>Update your profile:</h1>
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
            <form
            class="text-center border border-primary p-5"
            style="margin-top:70px;height:auto;padding-top:100px !important;"
            @submit.prevent="updateUser">

            <input
            type="text"
            id="username"
            class="form-control mb-5"
            placeholder="Username"
            v-model="update.username"/>

            <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="update.email"/>
          
            <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="update.password"
            />

            <input type="text"
            id="description"
            class="form-control mb-5"
            placeholder="Description"
            v-model ="update.description"
            />

            <input type="text"
            id="city"
            class="form-control mb-5"
            placeholder="Location"
            v-model ="update.city"
            />

            <input type="text"
            id="profilepicture"
            class="form-control mb-5"
            placeholder="profilepicture"
            v-model ="update.profilePicture"
            />

            <input type="text"
            id="coverPicture"
            class="form-control mb-5"
            placeholder="coverpicture"
            v-model ="update.coverPicture"
            />

            <select name="roles" id="roleselect">
                <option value="user/artist">Artist</option>
                <option value="producer"> Producer</option>
                <option value="exec/label">Music Label</option>
            </select>


          <!-- Update button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Update profile
            </button>
          </center>
        </form>
      </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      update: {
        username:"",
        email: "",
        password: "",
        description:"",
        city: "",
        profilePicture:"",
        coverPicture:""
      }
    };
  },
  methods: {
    async updateUser() {
      try {
        let response = await this.$http.patch("/api/users/", this.update);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          Swal.fire("Success", "Update Successful", "success");
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

</style>
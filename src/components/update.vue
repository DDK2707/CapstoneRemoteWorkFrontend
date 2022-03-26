<template>
  <div class="updatecontainer">
      <h1 class="updatetitle">Update your profile:</h1>
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

            <div class="imageinput" v-if="!image">
              <h4>Upload Profile Picture</h4>
              <input type="file" @change="onFileChange">
            </div>
            <div v-else>
              <img :src="image" />
              <button @click="removeImage">Remove image</button>
            </div>

            <div class="imageinput" v-if="!image">
              <h4>Upload Cover Picture</h4>
              <input type="file" @change="onFileChange">
            </div>
            <div v-else>
              <img :src="image" />
              <button @click="removeImage">Remove image</button>
            </div>
              <br>
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
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}
</script>

<style>
 .updatetitle{
   margin-top: 50px;
   color: #7692ff;
 }

 .imageinput {
   margin-top: 50px;
 }

 .updatecontainer {
   margin-bottom: 100px;
 }
</style>
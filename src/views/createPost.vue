<template>
  <div class="postcontainer">
      <h1 class="posttitle">Create a post:</h1>
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
            <form
            class="text-center border border-primary p-5"
            style="margin-top:70px;height:auto;padding-top:100px !important;"
            @submit.prevent="createPost">

            <input
            type="text"
            id="description"
            class="form-control mb-5"
            placeholder="Description"
            v-model="post.description"/>

            <div class="imageinput" v-if="!image">
              <h4>Upload image:</h4>
              <input type="file" @change="onFileChange">
            </div>
            <div v-else>
              <img :src="image" />
              <button @click="removeImage">Remove image</button>
            </div>

          <!-- Update button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Upload your post
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
      post: {
        description:"",
        profilePicture:"",
      }
    };
  },
  methods: {
    async createPost() {
      try {
        let response = await this.$http.patch("/api/posts/", this.post);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          Swal.fire("Success", "Post Successfully Uploaded", "success");
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
 .posttitle{
   margin-top: 50px;
   color: #7692ff;
 }

 .imageinput {
   margin-top: 50px;
 }

 .postcontainer {
   margin-bottom: 100px;
 }
</style>
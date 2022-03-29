<template>
  <div class="postcontainer">
      <h1 class="posttitle">Create a post:</h1>
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
            <form
            class="text-center border border-primary p-5"
            style="margin-top:70px;height:auto;padding-top:100px !important;"
            @submit.prevent="submit">

            <input
            type="text"
            id="description"
            class="form-control mb-5"
            placeholder="Description"
            v-model="form.description"/>

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
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
    return {
      form: {
        description:"",
        img:"",
      }
    };
  },

  created: function() {
    this.getPosts()
  },

  computed: {
    ...mapGetters({Posts: "StatePosts", User: "StateUser"}),
  },

  methods: {
    ...mapActions(["CreatePost", "GetPosts"]),
    async submit() {
      try {
        await this.createPost(this.form);
      } catch(error) {
        throw "You cannot make a post right now!"
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
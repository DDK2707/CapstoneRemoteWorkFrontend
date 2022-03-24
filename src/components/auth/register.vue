<template>
  <div class="registercontainer">
      <h1>Register Here:</h1>
      <div class="row">
          <div class="col-sm-6">
              <form action="" class="text-center">
                  <input type="text" class="username">
                  <input type="text" class="email">
                  <input type="text" class="password">
                  <select name="role" id="roleselect">
                      <option value="Artist" class="roleselect">Artist</option>
                      <option value="Producer" class="roleselect">Producer</option>
                      <option value="Label" class="roleselect">Record Label</option>
                  </select>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    mounted() {
        axios.post('https://ddk-capstone-backend.herokuapp.com/api/users')
        .then((response) => {
        this.results = response.data.results;
        console.log(response.data);
        })
        .catch((error) => {
        console.log(error.message);
    });
  },
}
</script>

<style>

</style>
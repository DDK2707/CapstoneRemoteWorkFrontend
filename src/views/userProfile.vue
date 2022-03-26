<template>
      <div class="container mt-5">
        <div class="row" id="coverphoto">
          <div class="col-md-12">
            <img src="" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group border border-primary">
                <li class="list-group-item"><img src="" alt=""></li>
              <li class="list-group-item">Name : {{ results.username }}</li>
              <li class="list-group-item">Email : {{ results.email }}</li>
              <li class="list-group-item">Description : {{ results.description }}</li>
              <li class="list-group-item">Location : {{results.city}}</li>
              <li class="list-group-item">Posts : {{ results.posts }}</li>
            </ul>
            <br>
            <router-link to="/updateProfile"> Update Profile </router-link>
          </div> 
        </div>
      </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'userDetails',
  data() {
    return {
      User: [],
      results: {}
    }
  },
  mounted() {
    axios.get('https://ddk-capstone-backend.herokuapp.com/api/users/:id')
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
 .row {
   width: 100%;
 }

  .list-group {
    margin-bottom: 100px;
  }

</style>
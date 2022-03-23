<template>
    <div>
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
                <li class="list-group-item"><img src="" alt=""></li>
              <li class="list-group-item">Name : {{ results.username }}</li>
              <li class="list-group-item">Email : {{ results.email }}</li>
              <li class="list-group-item">Contact : {{ results.contact }}</li>
              <li class="list-group-item">Cart : {{ results.cart }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'userDetails',
  data() {
    return {
      Users: [],
    }
  },
  mounted() {
    axios.get('https://ddk-capstone-backend.herokuapp.com/api/users')
    .then((response) => {
      this.Users = response.data.results;
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
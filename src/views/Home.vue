<template>
    <div class="homecontainer">
        <div class="row" v-for="result of results" :key="result._id">
            <div class="col-sm-3 border border-primary">
                <div class="image"> {{result.img}} </div>
            </div>
            <div class="col-sm-6 border border-primary">
                <div class="posts"> {{result.description}} </div>
                <div class="likes"> {{result.likes}} </div>
            </div>
            <div class="col-sm-3 border border-primary" id="followlist">
                <ul class="followerlist">
                    <li class="follower"> {{result.followers}}</li>
                </ul>
                <br>
                <ul class="followinglist">
                    <li class="following"> {{result.following}} </li>
                </ul>
            </div>
        </div>
    </div>
    <ChatBox />
</template>

<script>
import axios from "axios"
import ChatBox from "@/components/chatBox.vue"


export default {
components:
ChatBox,

name: 'userDetails',
  data() {
    return {
      Users: [],
      results: []
    }
  },

  mounted() {
    axios.get('https://ddk-capstone-backend.herokuapp.com/api/users')
    .then((response) => {
      this.results = response.data.results;
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
      axios.get('https://ddk-capstone-backend.herokuapp.com/api/posts')
      .then((response) =>{
          this.results = response.data.results;
          console.table(this.results);
      })
      .catch((error) => {
          console.log(error.message);
      })
  }
}

</script>

<style scoped>
 #followlist {
   margin: auto;
 }
</style>
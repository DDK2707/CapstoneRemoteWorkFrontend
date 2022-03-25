<template>
    <div class="homecontainer">
        <div class="row" v-for="result of results" :key="result._id">
            <div class="col-sm-9">
                <div class="posts"> {{result.description}} </div>
            </div>
            <div class="col-sm-3">
                <ul class="followerlist">
                    <li class="follower"> {{result.follower}}</li>
                </ul>
                <ul class="followinglist">
                    <li class="following"> {{result.following}} </li>
                </ul>
            </div>
        </div>
    </div>
    <chatBox />
</template>

<script>
import axios from "axios"
import chatBox from "@/components/chatBox.vue"


export default {
components:
chatBox,

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
.posts{
    width: 100%;


}

.followinglist {
 width: 100%
}

.followerlist {
 width: 100%;
}
</style>
<template>
    <div class="homecontainer">
        <div class="row">
            <div class="col-sm-9">
                <div class="posts"> {{results.posts}} </div>
            </div>
            <div class="col-sm-3">
                <ul class="followerlist">
                    <li class="follower"> {{results.followers}}</li>
                </ul>
                <ul class="followinglist">
                    <li class="following"> {{results.following}} </li>
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
      results: {}
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
  },

  mounted() {
      axios.get('https://ddk-capstone-backend.herokuapp.com/api/posts')
      .then((response) =>{
          this.results = response.data.results;
          console.log(response.data);
      })
      .catch((error) => {
          console.log(error.message);
      })
  }
}

</script>

<style>
.posts{
    width: 100%;


}

.followinglist {

}

.followerlist {

}
</style>
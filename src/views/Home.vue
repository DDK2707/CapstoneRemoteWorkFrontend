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
</template>

<script>
import axios from "axios"


export default {

}


</script>

<style>
</style>
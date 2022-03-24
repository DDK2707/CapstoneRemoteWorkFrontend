<template>
  <div class="aboutcontainer">
    <div class="row">
      <div class="col-sm-6">
        <img src="../assets/aboutpagephoto.jpg" alt="aboutphoto" class="aboutphoto">
      </div>
      <div class="col-sm-6" id="abouttext">
        <h1>About TUNEz</h1> <br>
        <p>My name is Dale, and I've been obsessed with music for as long as I can remember. It became an outlet for me at a very young age 
          and now I would say that I have a passion, both for appreciating music and creating it. </p><br>
        <p>I am dedicated to music, both as a craft worthy of recognition and as an outlet for those who need it.This is an application that mirrors my dedication
          by putting you in direct contact with the people you need most, whether you're a fledgeling musician, an up-and-coming producer or an established record label.
          I was inspired to create TUNEz to remove a musician's panic when looking for a producer or record label, and to expedite the process of producers and labels
          searching for new talent. 
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  width: 100%;
}

.aboutcontainer {
  margin-top: 50px
}

.aboutphoto {
    width: 700px;
  height: 700px;
  margin-left: -50px;
  border-radius: 50%;
}

p {
  margin: auto;
  font-size: 1.2rem;
}

h1 {
  color: #7692ff;
}

#abouttext {
  margin: auto
}

@media (max-width: 1285px) {
  .aboutphoto {
    width: 350px;
    height: 350px
  }
}
</style>

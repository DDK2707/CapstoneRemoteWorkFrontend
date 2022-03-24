<template>
<div class="contact">
  <form action="">
      <h1 class="m-5">Contact Us</h1>

              <label for="name">Name</label>
              <input type="name" v-model="name">

              <label for="email">Email</label>
              <input type="email" v-model="email">

              <label for="contact">Contact Number</label>
              <input type="contact" name="contact" v-model="contact">

              <label for="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="5" v-model="message"></textarea>

              <button class="p-2">Send</button>

  </form>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    text-align: center;
    padding: 40px;
    border-radius: 10px;
}

h1 {
    color: #7692ff;
}

form {
    display: grid;
    margin-inline: auto;
    width: 50%;
}

button {
    background-color: #7692ff;
    border: solid black;
    padding: 10px 20px;
    margin: auto;
    width: 50%;
    color: black;
    border-radius: 20px;
}

input, textarea {
    border-radius: 10px;
    border: solid black;
}

@media (max-width:600px) {
    form{
        width: fit-content
    }
    input {
        margin-right: 10px;
        margin-left: 10px;
    }
    textarea {
        margin-right: 10px;
        margin-left: 10px;
    }
    button{
        margin: auto
    }
}

label {
    font-size: 1.2rem;
}

input {
    margin-bottom: 20px;
}

button {
    margin-top: 30px;
}

</style>
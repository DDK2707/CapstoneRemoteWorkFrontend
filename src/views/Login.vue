<template>
    <div class="login grid place-items-center p-10">
    <img src="../assets/logo.png" alt="Facebook Logo" loading="lazy" />
    <div class="flex items-center">
      <button
        class="
          my-5
          p-3
          rounded-full
          text-white text-center
          cursor-pointer
          focus:outline-none
        "
        @click="signIn"
      >
        {{ !loading ? "Sign In With Google" : "Signing..." }}
      </button>
    </div>
  </div>
</template>
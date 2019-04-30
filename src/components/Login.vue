<template>
  <div class="login">
    <form @submit="login">
      <p>You need to login to continue..</p>
      <button class="btn">
        <i class="fab fa-github"></i> Login with GitHub
      </button>
    </form>
  </div>
</template>

<script>
import auth from "@/auth";

export default {
  methods: {
    login() {
      auth.login();
    }
  }
};
</script>

<style scoped>
.login {
  display: flex;
  width: 30%;
  height: 300px;
  margin: auto;
  padding: 10px;
}
form {
  border: 1px solid black;
  display: flex;
  flex-flow: column;
  margin: auto;
  width: 80%;
}
form > p {
  align-self: center;
}
.btn {
  align-self: center;
  margin: 10px auto;
  width: 80%;
}
</style>

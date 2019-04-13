<template>
  <div>
    <form @submit="login">
      <p>You need to login to continue..</p>
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
import auth from "@/auth";

export default {
  methods: {
    login() {
      auth.login(loggedIn => {
        this.$router.replace(this.$route.query.redirect || "/");
      });
      // this.$router.push(this.$route.query.redirect);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  width: 300px;
}
p {
  margin: auto;
}
input[type="submit"] {
  flex: 2;
}
</style>
<template>
  <header class="header">
    <h1>Github API explorer</h1>
    <div id="nav">
      <router-link v-if="loggedIn" to="/logout">Log out |</router-link>
      <router-link v-if="!loggedIn" to="/login">Log in |</router-link>
      <router-link to="/">Dashboard</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
import auth from "@/auth";
import axios from "axios";

export default {
  name: "header",
  data() {
    return {
      loggedIn: auth.loggedIn()
    };
  },
  created() {
    this.loggedIn = auth.loggedIn();
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn;
    };
  },
  beforeCreate() {
    setTimeout(function() {
      axios.get("/api/is_authenticated/").then(res => {
        localStorage.setItem("loggedIn", res.data.status);
      });
      this.loggedIn = auth.loggedIn();
    }, 5000);
  }
};
</script>

<style scoped>
h1 {
  margin: 0;
}
.header {
  flex: 1;
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin: 0;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>
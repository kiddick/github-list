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

export default {
  name: "header",
  data () { 
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>
<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
export default {
  name: "app",
  components: { Header },
};
</script>
<style>
* {
  /* border: 1px solid red !important; */
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  margin: 0;
}
.btn {
  border: none;
  background: #555;
  color: #fff;
  padding: 5px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
#app {
  display: flex;
  flex-flow: column;
}
</style>

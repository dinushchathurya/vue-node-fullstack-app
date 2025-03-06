<template>
  <div id="app">
    <UserList />
  </div>
</template>

<script>
import UserList from "./components/UserList.vue";

export default {
  components: {
    UserList,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  text-align: center;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
}
</style>

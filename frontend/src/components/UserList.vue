<template>
  <div>
    <h1>Users List</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <p v-else>Loading users...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    // Fetch user data from backend API
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  },
};
</script>

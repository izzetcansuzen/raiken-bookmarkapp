<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- my css link -->
    <link rel="stylesheet" href=".././assets/css/style.css">
    <!--  all icon  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <title>Raiken Bookmark App</title>
  </head>

  <body>
  <!-- nav component -->
  <navComponent/>

  <main class="main section container grid">
    <h1 class="section-title">Your Bookmarks</h1>

    <div class="bookmarks-container grid">
      <!-- Componenti sadece bir item üzerinden ayarladım çünkü ne kadar item olduğunu buraya getireceğim ve
       ne kadar item varsa o kadar basacağım-->
      <bookmarkItem v-for="item in bookmarks" :key="item.id" :item="item"/>
    </div>
  </main>
  <!-- my script file -->
  </body>
  </html>
</template>

<script>
import axios from "axios";
import bookmarkItem from "../components/HomeComponents/bookmarkItem";

export default {
  name: "Home",
  components: {
    bookmarkItem,
  },
  data() {
    return {
      bookmarks: [],
    }
  },
  methods: {},
  mounted() {
    axios.get("http://localhost:3000/bookmarks").then(get_response => {
      this.bookmarks = get_response.data || [];
    });
  }
}
</script>

<style>

</style>
<template>
  <navComponent />
  <div class="user-bookmark container">
    <div class="user-bookmark-header flex">
      <div class="user-bookmark-img">
        <img src=".././assets/img/card-bg.jpg" alt="">
      </div>
      <h1 class="user-bookmark-title">{{ bookmark.bookmarkTitle }}</h1>
    </div>
    <div class="user-bookmark-content flex">
      <a :href="bookmark.bookmarkLink" class="user-bookmark-link">Your Link Click here !</a>
      <p class="user-bookmark-text">{{ bookmark.bookmarkText }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "bookmark",
  data(){
    return{
      bookmark: [],
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/bookmarks?id=${this.$route.params.id}`).then(get_response => {
        this.bookmark = get_response.data[0] || [];
    });
  }
}
</script>

<style scoped>

</style>
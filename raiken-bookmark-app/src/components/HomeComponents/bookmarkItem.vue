<template>
  <div class="bookmark">
    <div class="bookmark-img">
      <img src="../../assets/img/card-bg.jpg" alt="">
    </div>
    <div class="bookmark-content">
      <h3 class="bookmark-title">{{ item.bookmarkTitle }}</h3>
      <a :href="item.bookmarkLink" class="bookmark-link">Bookmark Link Click !</a>

      <p class="bookmark-text">{{ item.bookmarkText }}</p>

      <span>{{ item.bookmarkCategory }}</span>
      <br>
      <br>
      <a @click="$router.push({name:'Bookmark' , params:{id: item.id}})">Checkout your bookmark</a>
      <div class="bookmark-settings flex">
        <div class="bookmark-icon" @click="changeIcon">
          <i class='bx bx-like'></i>
        </div>
        <div class="bookmark-icon" @click="changeIcon">
          <i class='bx bx-bookmark'></i>
        </div>
        <div class="bookmark-icon" @click="deleteBookmark($event,item.id)">
          <i class='bx bx-message-x'></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "bookmarkItems",
  props: ["item"],
  methods: {
    changeIcon(e) {
      let icon = e.target.children[0];
      //eğer ikon like ikonu ise
      if (icon.classList.contains("bx-like")) {
        icon.className = "bx bxs-like";
      } else if (icon.classList.contains("bxs-like")) {
        icon.className = "bx bx-like";
      }

      //ikon bookmark ikonu ise
      if (icon.classList.contains("bx-bookmark")) {
        icon.className = "bx bxs-bookmark";
      } else if (icon.classList.contains("bxs-bookmark")) {
        icon.className = "bx bx-bookmark";
      }

      //ikon mesaj ikonu ise
      //ayrıca bu kısım bookmark'ı silecek
      if (icon.classList.contains("bx-message-x")) {
        icon.className = "bx bxs-message-x";
      } else if (icon.classList.contains("bxs-message-x")) {
        icon.className = "bx bx-message-x";
      }
    },
    async deleteBookmark(e, item) {
      const deleteItem = await axios.delete(`http://localhost:3000/bookmarks/${item}`);
      const isDeleted = await deleteItem.status === 200;
      isDeleted ? e.target.parentElement.parentElement.parentElement.remove() : alert("Bookmark silinirken bir hata oluştu !");
    }
  },
}
</script>

<style>

</style>
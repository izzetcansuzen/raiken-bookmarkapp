<template>
  <div class="alert-model" v-if="this.control">
    <div class="alert-model-content">
      <div class="alert-icon">
        <i class='bx bx-error-alt'></i>
      </div>
      <h1 class="alert-title">
        Lütfen bookmark değerlerini boş bırakmayınız !</h1>
      <button class="btn btn__dark alert-btn" id="alert-btn" @click="this.control = false">Okay !</button>
    </div>
  </div>
  <navComponent/>
  <main class="main section container grid">
    <h1 class="section-title">Add New Bookmark</h1>

    <div class="form-card">
      <form action="" class="bookmark-form">
        <div class="form-input">
          <label for="bookmark-title">
            Bookmark Title
          </label>
          <input type="text" id="bookmark-title" class="bookmark-input" enterkeyhint="next"
                 placeholder="My Bookmark Title..." v-model="bookmarkItem.bookmarkTitle">
        </div>
        <!--{{ titleLength }}-->
        <div class="form-input">
          <label for="bookmark-link">
            Bookmark Link
          </label>
          <input type="url" id="bookmark-link" class="bookmark-input" placeholder="https://..."
                 v-model="bookmarkItem.bookmarkLink">
        </div>
        <select name="bookmark-category" id="bookmark-category" class="bookmark-category"
                v-model="bookmarkItem.bookmarkCategory">
          <option :value="item.categoryName" v-for="item in categories" :key="item.id">{{ item.categoryName }}</option>
        </select>
        <div class="form-input">
          <label for="bookmark-text">
            Bookmark Text
          </label>
          <textarea name="bookmark-text" id="bookmark-text" class="bookmark-textarea"
                    placeholder="Something about my bookmark..." cols="30" rows="10"
                    v-model="bookmarkItem.bookmarkText"></textarea>
        </div>
        <div class="form-buttons flex">
          <input type="reset" class="btn btn__red" value="Cancel" @click="$router.push({name: 'HomePage'})">
          <a class="btn btn__dark" @click="addBookmark">Submit !</a>
          <!--onclick="showAlertModel()"-->
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "AddBookmark",
  data() {
    return {
      bookmarkItem: {
        bookmarkTitle: "",
        bookmarkCategory: "",
        bookmarkLink: "",
        bookmarkText: "",
      },
      categories: [],
      control: false,
    }
  },
  methods: {
    checkInputs() {
      if (this.bookmarkItem.bookmarkTitle && this.bookmarkItem.bookmarkCategory && this.bookmarkItem.bookmarkLink && this.bookmarkItem.bookmarkText) {
        this.control = false;
      } else {
        this.control = true;
      }
    },
    addBookmark() {
      //değerlerin boş olup olmadığını kontrol etmek için kullanıyorum
      this.checkInputs();

      if (!this.control) {
        axios.post("http://localhost:3000/bookmarks", this.bookmarkItem).then(save_response => {
          console.log(save_response);
          this.$router.push({name: "HomePage"});
        });
      }
    }
  },
  mounted() {
    axios.get("http://localhost:3000/categories").then(get_response => {
      this.categories = get_response.data;
    });
  },
  computed: {
    titleLength() {
      if (this.bookmarkItem.bookmarkTitle.length >= 6) {
        return null;
      } else {
        return "sayı 6 dan büyük olmalı !";
      }
    }
  },
}
</script>

<style scoped>

</style>
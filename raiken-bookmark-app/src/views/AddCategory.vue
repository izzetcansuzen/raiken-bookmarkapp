<template>
  <navComponent/>

  <main class="main section container grid">
    <h1 class="section-title">Add New Bookmark</h1>

    <div class="form-card">
      <form action="" class="bookmark-form">
        <div class="form-input">
          <label for="category-name">
            Category Name
          </label>
          <input type="text" id="category-name" class="bookmark-input" enterkeyhint="end"
                 placeholder="Anime or something... xd" v-model="categoryItem.categoryName">
        </div>
        <div class="form-buttons flex">
          <a class="btn btn__red" @click="$router.push({name: 'HomePage'})">Cancel</a>
          <a class="btn btn__dark" value="submit" @click="addCategory">Submit !</a>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "AddCategory",
  data() {
    return {
      categoryItem: {
        categoryName: null,
      }
    }
  },
  methods: {
    async addCategory() {
      const postItem = await axios.post("http://localhost:3000/categories", this.categoryItem);

      //eğer ki atılan post başarılı bir şekilde atıldıysa değere atama yapıyorum.
      const isPosted = await postItem.status === 201;

      //eğer atıldıysa direk olarak uyarı versin ve ana sayfaya gitsin
      if (isPosted) {
        alert("Kategori başarılı bir şekilde eklendi !");
        this.$router.push({name: "HomePage"});
      } else { //eğer gitmediyse uyarı versin
        alert("Kategori eklenirken bir hata oluştu lütfen daha sonra tekrar deneyin");
      }
    }
  }
}
</script>

<style>

</style>
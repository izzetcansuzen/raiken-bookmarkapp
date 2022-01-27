<template>
  <header>
    <nav class="nav container flex">
      <div class="nav-icon__menu nav-icon" @click="openSidebar">
        <i class='bx bx-menu-alt-left nav-icon'></i>
      </div>

      <ul class="nav-category-list" id="nav-category-list">
        <a class="nav-icon__close nav-icon" @click="closeSidebar">
          <i class='bx bx-x nav-icon'></i>
        </a>

        <!-- Component halinde yapılıyor kategori bilgileri dışarıdan gelecek ! -->
        <!-- Daha sonradan o kategoriye ait olan bilgileri ana sayfaya getirecek -->
        <categoryList v-for="item in categoryList" :key="item.id" :item="item"/>
      </ul>

      <div class="nav-user-section flex">
        <a class="nav-btn btn__dark" @click="$router.push({name: 'AddBookmark'})">+ add</a>

        <div class="nav-icon__user nav-icon" @click="openUserMenu">
          <i class='bx bx-user-circle nav-icon'></i>
        </div>

        <!-- popup menu -->
        <div class="nav-user-menu">
          <ul class="user-menu-list flex">
            <li class="user-menu-item">
              <a href="#" class="user-menu-link">HomePage</a>
            </li>
            <li class="user-menu-item">
              <a class="user-menu-link" @click="$router.push({name: 'Settings'})">Settings</a>
            </li>
            <li class="user-menu-item">
              <a href="#" class="user-menu-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import categoryList from "../NavComponents/categoryList";
import axios from "axios";

export default {
  name: "navComponent",
  components: {categoryList},
  data(){
    return{
      categoryList: [],
    }
  },
  methods: {
    //sidebar aktif olması için yazılan fonksiyon
    openSidebar() {
      const sidebar = document.querySelector("#nav-category-list");
      if (sidebar) sidebar.classList.add('show-menu');
    },
    //sidebar'ın kapanması için yazılan fonksiyon
    closeSidebar() {
      const sidebar = document.querySelector("#nav-category-list");
      if (sidebar) sidebar.classList.remove('show-menu');
    },
    //userMenu'nün açılması için yazılan fonksiyon
    openUserMenu() {
      const userMenu = document.querySelector('.nav-user-menu');
      userMenu.classList.add('show-user-menu');
    },
  },
  mounted() {
    axios.get("http://localhost:3000/categories").then(get_response => {
      this.categoryList = get_response.data;
    });
  },
};
//userMenu'nün kapanması için yazılan kod
//NOT: bir element seçmek istersek bunu fonksiyon içerisinde yapmamız gerek !
document.addEventListener('click', (e) => {
  const userMenu = document.querySelector('.nav-user-menu');
  if (!e.target.classList.contains("nav-icon__user")) {
    if(userMenu){
      userMenu.classList.remove("show-user-menu");
    }
  }
});
</script>

<style>

</style>
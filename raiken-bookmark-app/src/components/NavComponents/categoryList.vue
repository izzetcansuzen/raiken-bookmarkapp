<template>
  <li class="nav-category-item">
    <a href="#" class="nav-category-link">{{ item.categoryName }}</a>
  </li>
</template>

<script>
export default {
  name: "categoryList",
  props:["item"]
}
</script>

<style scoped>

</style>
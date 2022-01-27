<template>
  <main class="main section container grid">
    <h1 class="section-title">Login</h1>

    <div class="form-card">
      <form action="" class="bookmark-form">
        <div class="form-input">
          <label for="user-email">
            Email
          </label>
          <input type="email" id="user-email" class="bookmark-input" enterkeyhint="next"
                 placeholder="raiken@blabla.com">
        </div>
        <div class="form-input">
          <label for="user-password">
            User Password
          </label>
          <input type="password" id="user-password" class="bookmark-input" placeholder="*****">
        </div>
        <div class="form-buttons flex">
          <input type="reset" class="btn btn__red" value="Reset" @click="$router.push({name: 'HomePage'})">
          <input type="submit" class="btn btn__dark" value="Register">
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "Logi"
}
</script>

<style scoped>

</style>
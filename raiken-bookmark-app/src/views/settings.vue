<template>
  <main class="main section container grid">

    <div class="form-card">
      <form action="" class="bookmark-form">
        <div class="setting-item">
          <span class="setting-title">Dark Mode</span>
          <div class="setting-label">
            <label for="settingItem1">
              <input type="checkbox" id="settingItem1">
              <div class="setting-icon">
                <i class='bx bx-check-square'></i>
              </div>
            </label>
          </div>
        </div>
        <div class="setting-item">
          <span class="setting-title">Categories</span>
          <div class="setting-label">
            <label for="settingItem2">
              <input type="checkbox" id="settingItem2">
              <div class="setting-icon">
                <i class='bx bx-check-square'></i>
              </div>
            </label>
          </div>
        </div>
        <div class="setting-item">
          <span class="setting-title setting__red">Delete My Account</span>
        </div>
        <div class="setting-item">
          <span class="setting-title setting__red" @click="$router.push({name: 'HomePage'})">Back to Main Page</span>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "settings"
}
</script>

<style scoped>

</style>
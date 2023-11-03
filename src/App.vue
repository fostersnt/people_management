<template>
  <div class="container mt-3">
    <div class="main">
      <div style="height: 100vh; width: 200px;">
      <NavBar />
    </div>
    <div style="flex: 1;">
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/views/NavBar.vue";

export default {
  name: "nav-bar",
  components: {
    NavBar,
  },
};
</script>

<style>
.main{
  display: flex;
}
</style>
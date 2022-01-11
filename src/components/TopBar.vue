<template>
  <div class="container">
    <input type="text" class="search-box" placeholder="Search video..." v-model="keyword">
    <span class="favorite-box" @click="navigateToFavorites">
      Favorites
      <fa-icon icon="heart" />
    </span>
  </div>
</template>

<script>
import {FAVORITES} from "@/router/routes";

export default {
  name: "TopBar",
  methods: {
    navigateToFavorites() {
      this.$router.push(FAVORITES.replace(':userId', 'bootcamp'));
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  box-shadow: 0 1px 10px 1px var(--color-background-dark);
}
.search-box {
  width: 40vw;
  padding: 8px 16px;
  border: none;
  border-radius: 32px;
  outline: none;
}
.search-box:focus {
  box-shadow: 0 0 10px 3px var(--color-white);
}
.favorite-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-weight: 800;
  cursor: pointer;
  border-radius: 16px;
  color: var(--color-white);
  background-color: var(--color-button-secondary);
  transition: box-shadow .5s;
}
.favorite-box:hover {
  box-shadow: 0 0 10px 3px var(--color-button-secondary);
}
</style>
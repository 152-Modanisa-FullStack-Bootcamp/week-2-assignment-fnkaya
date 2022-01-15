<template>
  <div class="container">
    <VIdeoItem v-for="video in getFavorites"
               :key="video.id"
               :video="video" />
  </div>
</template>

<script>
import VIdeoItem from "@/components/VideoItem";
import {mapGetters} from "vuex";

export default {
  name: "FavoritesPage",
  components: {VIdeoItem},
  computed: {
    ...mapGetters(['getFavorites']),
  },
  mounted() {
    console.log(this.getFavorites)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
</style>
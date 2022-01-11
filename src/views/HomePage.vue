<template>
  <div class="container">
    <VideoCard v-for="video in videos" :key="video.id" :data="video" />
  </div>
</template>

<script>
import VideoCard from "@/components/VideoCard";
import {getVideos} from "@/utils/api";

export default {
  name: "HomePage",
  components: {
    VideoCard
  },
  data() {
    return {
      videos: [],
    }
  },
  async created() {
    const { data } = await getVideos();
    this.videos = data;
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
}
</style>
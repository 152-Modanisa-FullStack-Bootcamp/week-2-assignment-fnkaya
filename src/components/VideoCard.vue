<template>
  <div class="card">
    <img class="image"
         :src="image"
         :alt="data.title"
         @mouseover="setHoverImage"
         @mouseout="setCoverImage"
         @click="navigateToVideoPage" />
    <div class="card-content">
      <div>
        <img class="owner-image"
             :src="data.ownerImage"
             :alt="data.ownerName">
      </div>
      <div class="video-details">
        <h3 class="video-title">{{data.title}}</h3>
        <div class="owner-name">{{data.ownerName}}</div>
        <div class="video-infos">
          <span class="view-count">{{data.viewCount}} görüntülenme</span>
          <span class="publish-date">{{data.publishDateInMonth}} ay önce</span>
          <fa-icon icon="heart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {VIDEO} from "@/router/routes";

export default {
  name: "VideoCard",
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      image: this.data.coverImage,
    }
  },
  methods: {
    setHoverImage() {
      this.image = this.data.hoverImage;
    },
    setCoverImage() {
      this.image = this.data.coverImage;
    },
    navigateToVideoPage() {
      this.$router.push({ path: VIDEO, query: { id: this.data.id } })
    }
  },
}
</script>

<style scoped>
.card {
  width: min-content;
  border-radius: 16px;
  cursor: pointer;
  transition: transform .5s, color .5s;
}
.card:hover {
  background-color: var(--color-white);
  transform: scale(1.15, 1.15);
}
.image {
  height: 200px;
  width: 360px;
  transition: border-radius .5s;
}
.image:hover {
  border-radius: 16px 16px 0 0;
}
.card-content {
  display: flex;
  padding: 8px;
  gap: 24px;
  height: 100px;
  width: 100%;
  font-size: .8em;
}
.owner-image {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}
.video-details {
  display: flex;
  flex-direction: column;
  text-align: start;
  user-select: none;
  width: 100%;
}
.video-title {
  margin-bottom: auto;
  overflow: hidden;
}
.video-infos > span:first-child::after {
  content: '·';
  margin: 0 4px;
}
.video-infos > svg {
  float: right;
  font-size: 1.5em;
}
</style>
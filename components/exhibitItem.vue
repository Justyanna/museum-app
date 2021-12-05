<template>
  <view class="card">
    <view>
      <text>{{ exhibit.title }}</text>
      <image
        v-if="uri"
        :style="{ width: 100, height: 100 }"
        :source="{ uri: exhibit.photo }"
      />
      <text v-if="exhibit.type">Type: {{ exhibit.type }}</text>
      <text v-for="material in exhibit.materials" :key="material">{{
        material
      }}</text>
      <text v-if="exhibit.date">Date: {{ exhibit.date }}</text>
      <text v-if="exhibit.origin">Origin: {{ exhibit.origin }}</text>
      <text v-if="exhibit.description"
        >Description: {{ exhibit.description }}</text
      >
    </view>
  </view>
</template>

<script>
import load from "../utils.js";
export default {
  props: {
    exhibit: {
      Type: Object,
    },
  },
  data() {
    return {
      exhibitData: {},
      uri: {},
    };
  },
  watch: {
    exhibit: {
      immediate: true,
      handler() {
        this.exhibitData = this.exhibit;
        console.log(this.exhibitData);
        load(this.exhibitData).then((res) => {
          console.log(res);
          this.uri = res;
        });
      },
    },
  },
};
</script>

<style>
.card {
  background-color: rgb(255, 255, 255);
  padding: 8px;
  border-bottom-width: 1;
  border-color: gray;
  width: 100%;
  padding: 15;
}
</style>

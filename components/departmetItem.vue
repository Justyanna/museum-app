<template>
  <view class="card">
    <view>
      <text class="dep-name">{{ department.name }}</text>
      <text class="dep-name">Exhibits:</text>

      <scroll-view :style="{ widht: '100%' }">
        <exhibit-item
          v-for="e in department.exhibits"
          :key="e.title"
          :exhibit="e"
        />
      </scroll-view>
    </view>
  </view>
</template>

<script>
import ExhibitItem from "./exhibitItem.vue";
export default {
  components: { ExhibitItem },
  props: {
    department: {
      Type: Object,
    },
  },
};
</script>

<style>
.card {
  background-color: #313E50;
  padding: 8px;
  border-bottom-width: 1;
  border-color: gray;
  width: 100%;
  padding: 15;
  color:#fff;
}
.dep-name{
  text-align: center;
  background-color: #313e50;
  color:#fff;
  padding: 5px;
  font-weight: bold;
  font-size: 20px;
}
</style>

<template>
  <view class="container">
    <text class="text-welcome-banner">{{
      this.props.navigation.getParam("museumName")
    }}</text>

    <scroll-view :style="{ widht: '100%' }">
      <department-item
        v-for="d in this.props.navigation.getParam('departmets')"
        :key="d.name"
        :department="d"
      />
    </scroll-view>
  </view>
</template>

<script>
import DepartmentItem from "./../components/departmetItem.vue";
export default {
  components: { DepartmentItem },
  props: {
    navigation: {
      type: Object,
    },
  },
};
</script>

<style>
.container {
  background-color: rgb(255, 255, 255);
  margin-top: 50;
  margin-left: 4;
}
.text-welcome-banner {
  font-size: 18;
  color: rgb(34, 0, 255);
}
</style>

<template>
  <view class="container">
    <text class="text-welcome-banner">{{
      this.props.navigation.getParam("museumName")
    }}{{" "}}<ionicons class="icon" name="color-palette-outline"/></text>

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
  background-color: #c4721c;
  margin: top -50px;
}
.text-welcome-banner {
  background-color: #3a50d9;
  color: #e0eff2;
  font-family:monospace;
  font-size: 18;
  text-align: center;
  padding:8px
}
.icon{
  font-size: 20px;
}
</style>

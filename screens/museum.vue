<template>
<view class="container">
  <text class="text-welcome-banner">{{museumName}}</text>
  <scroll-view :style="{widht:'100%'}">
    <text>{{departments}}</text>
    </scroll-view >
  </view>
</template>

<script>
export default {
  props: {
    departments: {
      Type: Object
    },
    museumName:{
        Type: String
    }
  },
};
</script>

<style>
.container {
  background-color: rgb(255, 255, 255);
  margin-top: 50;
  margin-left: 4;
}
.text-welcome-banner{
  font-size: 29;
  color: rgb(34, 0, 255);
}   
</style>

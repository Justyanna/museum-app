<template>
  <view class="card">
    <text class="text-title"
      >{{ museum.name }}
      <ionicons name="color-palette-outline" class="text-title" />
    </text>
    <view class="card-content">
      <view class="card-address">
        <text class="text-address"
          >{{ museum.localisation.street }} - {{ museum.localisation.city }}, {{ museum.localisation.country }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    museum: {
      Type: Object,
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
    .text-title {
    font-size: 18;
    color: rgb(34, 0, 255);
    }
    .card-content {
    height: 40;
    }
    .text-address {
    font-size: 16;
    }
</style>

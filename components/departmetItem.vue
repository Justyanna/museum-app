<template>
  <view class="card">
      <view>
          <text>{{ department.name }}</text>
          <text>Exhibits:</text> 
  
          <scroll-view :style="{widht:'100%'}">
            <exhibit-item
              v-for="e in department.exhibits"
              :key="e.title"
              :exhibit="e"
            />
        </scroll-view >
      </view>
  </view>
</template>

<script>
import ExhibitItem from "./exhibitItem.vue";
export default {
  components: { ExhibitItem },
  props: {
    department: {
      Type: Object
    },
  }
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

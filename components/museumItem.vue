<template>
  <view class="card">
      <text class="text-title">{{museum.name}}</text>
      <!-- <button class="button" @click.native="goToMuseumView(museum.departments, museum.name)" title="Press Me" /> -->
      <view class="card-content">
          <view class="card-address">
            <text class="text-address">{{museum.localisation.street }} - {{museum.localisation.city }}, {{museum.localisation.country}}</text>
          </view>
      </view>

      <text>Departments:</text>

      <scroll-view :style="{widht:'100%'}">
        <department-item
          v-for="d in museum.departments"
          :key="d.name"
          :department="d"
        />
      </scroll-view >
    
  </view>
</template>

<script>
import DepartmentItem from "./departmetItem.vue";
export default {
  
  components: { DepartmentItem },
  props: {
    museum: {
      Type: Object
    },
  },
   methods: {
    goToMuseumView: function(departmets, museumName) {
        this.navigation.navigate("Museum", {departmets:departmets, museumName:museumName});

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
  .button{
    margin-left: 40;
  }
  .text-title{
    font-size: 18;
    color: rgb(34, 0, 255);
  }
  .card-content{
    height: 40;
  }
  .text-address{
    font-size: 16;
  }

</style>

<template>
<view class="container">
  <button class="button" :on-press="goToMuseumView" title="Press Me" />
  <text class="text-welcome-banner">Welcome in Museums App</text>
  <scroll-view :style="{widht:'100%'}">
    <museum-item
      v-for="m in museums"
      :key="m.name"
      :museum="m"
      :function="goToMuseumView"
    />
    </scroll-view >
  </view>
</template>

<script>
import json from "../data.json";
import MuseumItem from "../components/museumItem.vue";
import { Ionicons } from "@expo/vector-icons";
import Vue from "vue-native-core";
Vue.component("ionicons", Ionicons);

export default {
  props: {
    navigation: {
      type: Object
    },
  },
  components: { MuseumItem, Ionicons },
  methods: {
    goToMuseumView: function(departmets, museumName) {
      //alert('siema');
      //console.log('patyt swietnie plywa');
      console.log(departmets);
      console.log(museumName);
        this.navigation.navigate("Museum", {departmets:departmets, museumName:museumName});

    },
  },
  data() {
    return {
      museums: json,
    }
  },
};
</script>

<style>
.text-welcome-banner{
  font-size: 29;
  color: rgb(34, 0, 255);
}

.container {
  background-color: rgb(255, 255, 255);
  margin-top: 50;
  margin-left: 4;
}
</style>

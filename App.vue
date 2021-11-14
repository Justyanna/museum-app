<template>
<view class="container">
  <text class="text-welcome-banner">Welcome in Museums App</text>
  <scroll-view :style="{widht:'100%'}">
    <museum-item
      v-for="m in museums"
      :key="m.name"
      :museum="m"
    />
    </scroll-view >
  </view>
</template>

<script>
import json from "./data.json";
import MuseumItem from "./components/museumItem.vue";
import { Ionicons } from "@expo/vector-icons";
import Vue from "vue-native-core";
Vue.component("ionicons", Ionicons);
export default {

  components: { MuseumItem, Ionicons },
  data() {
    return {
      museums: json,
    };
  },
  methods: {
    exclaim() {},
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
  }
</style>
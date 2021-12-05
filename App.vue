<template>
  <app-navigator theme="dark"></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from "vue-native-router";

import { Ionicons } from "@expo/vector-icons";
import MainScreen from "./screens/main.vue";
import MuseumSceen from "./screens/museum.vue";
import Vue from "vue-native-core";
Vue.component("ionicons", Ionicons);

const StackNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Museum: MuseumSceen,
  },
  {
    initialRouteName: "Main",
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator, Ionicons },
};
</script>

<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import MainScreen from "./screens/main.vue";
import MuseumSceen from "./screens/museum.vue";
import Test from "./screens/template_testowy.vue";

const StackNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Museum: MuseumSceen,
    Test: Test

  },
  {
    initialRouteName: 'Main',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
}
</script>
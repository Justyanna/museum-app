<template>
  <view class="container">
    <text class="text-welcome-banner">Welcome in Museums App</text>
    <scroll-view :style="{ widht: '100%' }">
      <museum-item
        v-for="m in museums"
        :key="m.name"
        :museum="m"
        :navigation="this.props.navigation"
      />
    </scroll-view>
  </view>
</template>

<script>
import * as FileSystem from "expo-file-system";
const { StorageAccessFramework } = FileSystem;
import MuseumItem from "../components/museumItem.vue";
import axios from "axios";
let json;
const dataBaseUri = FileSystem.documentDirectory + "data1.json";

const getDatabase = async (data) => {
  const dirInfo = await FileSystem.getInfoAsync(dataBaseUri);

  if (!dirInfo) {
    await StorageAccessFramework.createFileAsync(
      FileSystem.documentDirectory,
      "data1.json",
      "application/json"
    );
  }
  console.log(dirInfo);

  FileSystem.writeAsStringAsync(dataBaseUri, JSON.stringify(data), {})
    .then((resp) => console.log("result ", resp))
    .catch((error) => console.log(error));
};

const cacheData = (data) => {
  getDatabase(data);
};

const loadData = async () => {
  let file;
  const info = await FileSystem.getInfoAsync(dataBaseUri);

  if (info.exists && !info.isDirectory) {
    file = await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + "data1.json"
    ).catch((error) => console.log(error));
  }
  return file;
};

export default {
  props: {
    navigation: {
      type: Object,
    },
  },
  components: { MuseumItem},
  data() {
    return {
      museums: json,
    };
  },
  mounted() {
    axios
      .get("https://GreedySeashellPup.justyanna.repl.co")
      .then((response) => {
        this.museums = response.data;
        cacheData(response.data);
      })
      .catch((error) => {
        loadData().then((file) => {
          this.museums = JSON.parse(file);
        });
      });
  },
};
</script>

<style>
.text-welcome-banner {
  background-color: #3a50d9;
  color: #e0eff2;
  font-family:monospace;
  font-size: 28px;
  padding: 20px;
  margin-left: -5px;
  text-align: center;
}

.container {
  background-color: #fbf1e6;
  font-family:monospace;
  margin-bottom: 80px;
}
</style>

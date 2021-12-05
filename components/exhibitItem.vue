<template>
  <view class="card">
    <view>
      <text class="ex-title ex">{{ exhibit.title }}</text>
      <image class="ex-img ex"
        v-if="uri"
        :style="{ width: 300, height: 300 }"
        :source="{ uri: exhibit.photo }"
      />
      <text class="ex-type ex" v-if="exhibit.type"><text :style="{ fontWeight: 'bold' }">Type:</text> {{ exhibit.type }}</text>
      <!--<text class="ex-tit ex" >Materials:</text> 
      <text class="ex-materials ex" v-for="material in exhibit.materials" :key="material">{{
        material
      }}</text>-->
      <text class="ex-materials ex"><text :style="{ fontWeight: 'bold' }">Materials:</text> {{ exhibit.materials }}</text>
      <text class="ex-date ex" v-if="exhibit.date"><text :style="{ fontWeight: 'bold' }">Date:</text> {{ exhibit.date }}</text>
      <text class="ex-origin ex" v-if="exhibit.origin"><text :style="{ fontWeight: 'bold' }">Origin:</text> {{ exhibit.origin }}</text>
      <text class="ex-desc ex" v-if="exhibit.description"
        ><text :style="{ fontWeight: 'bold' }">Description:</text> {{ exhibit.description }}</text>
    </view>
  </view>
</template>

<script>
import load from "../utils.js";
export default {
  props: {
    exhibit: {
      Type: Object,
    },
  },
  data() {
    return {
      exhibitData: {},
      uri: {},
    };
  },
  watch: {
    exhibit: {
      immediate: true,
      handler() {
        this.exhibitData = this.exhibit;
        console.log(this.exhibitData);
        load(this.exhibitData).then((res) => {
          console.log(res);
          this.uri = res;
        });
        let connected = "";
        if (!(typeof this.exhibitData.materials === "string")) {
          this.exhibitData.materials.forEach((element) => {
            connected += element + ", ";
          });

          this.exhibitData.materials = connected.substring(
            0,
            connected.length - 3
          );
        }
      },
    },
  },
};
</script>

<style>
.card {
  background-color: #313E50;
  padding: 8px;
  border-bottom-width: 1;
  border-color: gray;
  width: 100%;
  padding: 15;
  margin-top: 10px;
  margin-bottom: 10px;
  display:flex;
  color: rgb(255, 255, 255);
}
.ex{
  text-align: center;
  color:#fff;
}
.ex-title{
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.ex-img{
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  margin-bottom: 10px;
}
.ex-tit{ 
  font-size: 15px;
}
.ex-desc{
  margin-top: 10px;
}

</style>

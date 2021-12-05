<template>
  <view class="card">
    <text
      class="text-title"
      :on-press="() => goToMuseumView(museum.departments, museum.name)"
      >{{ museum.name }}{{ " " }}
                            <ionicons class="icon" name="arrow-forward-circle-outline" />
    </text>
    
    <view class="card-content">
      <view class="card-address">
        <text
          class="text-address"
          :on-press="() => goToMuseumView(museum.departments, museum.name)"
          >{{ museum.localisation.street }} - {{ museum.localisation.city }},{{
            " "
          }}{{ museum.localisation.country }}</text
        >
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
    navigation: {
      type: Object,
    },
  },
  methods: {
    goToMuseumView: function (departmets, museumName) {
      this.navigation.navigate("Museum", {
        departmets: departmets,
        museumName: museumName,
      });
    },
  },
};
</script>

<style>
.card {
  background-color: #313E50;
  border-bottom-width: 1;
  border-color: gray;
  width: 100%;
  padding: 15px;
}
.button {
  margin-left: 40;
  width: 10;
}
.text-title {
  font-size: 18px;
  color: #8b99f3;
  /*text-align: center;*/
  font-weight: bold;
}
.card-content {
  height: 40;
}
.text-address {
  font-size: 16px;
  /* text-align: center; */
  color:#fff;
}
.icon{
  font-size: 20px;
}
</style>

<template>
    <div class="pinPopup">
      <div v-if="pin.image" class="image">
        <img :src="pin.image" alt="" />
      </div>
      <div class="name">
        {{ pin.name }}
      </div>
      <div class="address">
        {{ pin.address }}
      </div>
      <div v-if="pin.rating" class="rating">
        {{ pin.rating }} <i class="fas fa-star"></i>
      </div>
      <div v-if="pin.price" class="price">
        {{ pin.price }}
      </div>
      <div v-if="pin.categories" class="categories">
        <span v-for='(cat, index) in pin.categories'>{{ cat.title }}</span>
      </div>
      <button
        class="pinPopupCreateButton btn btn-primary"
        onclick="handleIncreaseScore"
      >
        Vote
      </button>
    </div>
</template>

<script>
export default {
  name: 'PinInfobox',
  props: {
    msg: String,
    increaseScorePin: Function,
    index: Number
  },
  methods: {
    handleIncreaseScore() {
      this.increaseScorePin(this.index)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.pinPopup .name {
  font-size: 12pt;
  color: #00C5FA;
}

.pinPopup .address {
  margin-bottom: 5px;
}

.pinPopup button {
  display: block!important;
  margin-left: auto!important;
}
.fa-star {
  color: #FCEC36!important;
  text-shadow: 0px 0px 1px rgba(0,0,0,0.6);
}
.pinPopup .rating,
.pinPopup .price {
  display: inline-block;
}
.pinPopup .price {
  margin-left: 5px;
}
.pinPopup .rating,
.pinPopup .categories {
  font-size: 8pt;
}
.pinPopup .categories {
  color: grey;
}
.pinPopup .image {
  margin-top: 20px;
  margin-bottom: 5px;
}
.pinPopup .image img {
  max-height: 100px;
  margin: 0 auto;
  display: block;
}
.pinPopupCreateButton {
  margin-top: 20px!important;
}
</style>

const PinInfoBox = (pin) => `
  <div class="pinPopup">
    <div v-if="${pin.image}" class="image">
      <img :src="${pin.image}" alt="" />
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
      onclick="vm.handleIncreaseScore"
    >
      Vote
    </button>
  </div>
`

export default PinInfoBox
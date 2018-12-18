const PinInfoBox = function(pin, index) {
  const pinRating = `
    <div class="rating">
      ${pin.rating} <i class="fas fa-star"></i>
    </div>
  `
  const pinPrice = `
    <div class="price">
      ${pin.price}
    </div>
  `

  const printCategories = (categories) => {
    const categoriesNode = categories.map((cat, index) => {
      return `
        <span>${cat.title}</span>
      `
    })

    return categoriesNode;
  }

  const pinCategories = `
    <div class="categories">
      ${pin.categories ? printCategories(pin.categories) : ''}
    </div>
  `

  const pinImage = `
    <div class="image">
      <img src="${pin.image}" alt="" />
    </div>
  `

  return `
    <div class="pinPopup">
      ${pin.image ? pinImage : ''}
      <div class="name">
        ${pin.name}
      </div>
      <div class="address">
        ${pin.address}
      </div>
      ${pin.rating ? pinRating : ''}
      ${pin.price ? pinPrice : ''}
      ${pin.categories ? pinCategories : ''}
      <button
        class="pinPopupCreateButton btn btn-primary"
        onclick="vm.increaseScorePin(${index})"
      >
        Vote
      </button>
    </div>
  `
}

export default PinInfoBox
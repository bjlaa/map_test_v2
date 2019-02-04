/*
*   Styling located in ./src/styles.styl
*/

const PinInfoBox = function (pin, index) {
  const pinRating = `
    <div class="pinInfoBox__rating">
      ${pin.rating} <i class="fas fa-star"></i>
    </div>
  `
  const pinPrice = `
    <div class="pinInfoBox__price">
      ${pin.price}
    </div>
  `

  const printCategories = (categories) => {
    const categoriesNode = categories.map(cat => <span>${cat.title}</span>)

    return categoriesNode;
  }

  const pinCategories = `
    <div class="pinInfoBox__categories">
      ${pin.categories ? printCategories(pin.categories) : ''}
    </div>
  `

  const pinImage = `
    <div class="pinInfoBox__image">
      <img src="${pin.image}" alt="" />
    </div>
  `

  return `
    <div class="pinInfoBox">
      ${pin.image ? pinImage : ''}
      <div class="pinInfoBox__name">
        ${pin.name}
      </div>
      <div class="pinInfoBox__address">
        ${pin.address}
      </div>
      ${pin.rating ? pinRating : ''}
      ${pin.price ? pinPrice : ''}
      ${pin.categories ? pinCategories : ''}
      <button
        class="pinInfoBox__button btn btn-primary"
        onclick="vm.increaseScorePin(${index})"
      >
        Vote
      </button>
    </div>
  `
}

export default PinInfoBox

<template>
  <div
    v-if="isSearchResultsOpen && searchInputValue !== '' && searchResults"
    class="searchResults"
  >
    <ul
      v-if='searchResults.length > 0'
      class="searchResults__list"
    >
      <!-- On render seulement si il y a des résultats de recherche -->
      <li
        v-for="item in searchResults"
        class="searchResults__list__item"
        @click="addPin(item)"
        v-bind:key='item.title'
      >
        <div class="searchResults__list__item__icon">
          <img
            class="searchResults__list__item__icon__img"
            src="../../assets/images/markerIcon.png"
            alt=""
          >
        </div>
        <div class="searchResults__list__item__text">
          <div class="searchResults__list__item__text__name">
            {{ item.name }}
          </div>
          <div class="searchResults__list__item__text__address">
            {{ item.location && item.location.address1 }}, {{ item.location && item.location.zip_code }} {{ item.location && item.location.city }}
          </div>
        </div>
      </li>
      <!-- Si pas de résultats on render: -->
      <li
        v-if='searchResults.length <= 0'
        class="searchResults__list__item"
      >
        <div class="searchResults__list__item__text">
          No result found
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
    isSearchResultsOpen: Boolean,
    searchInputValue: String,
    searchResults: [Array, Boolean],
    addPin: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

.searchResults {
  padding-left: 0;
  background: #FAFAFA;
  border-radius: 3px;
  overflow: hidden;
  max-width: calc(75% - 142px);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-left: 22px;
  margin-top: 5px;
  border: solid 1px lightgrey;
  position: fixed;
  left: 0;
  top: 55px;
  width: 100%;
  &__list {
    padding-left: 0;
    margin-bottom: 0;
    &__item {
      cursor: pointer;
      height: 45px;
      padding-left: 10px;
      font-size: 10pt;
      display: flex;
      align-items: center;
      transition: background 0.2s ease-in-out;
      border-radius: none;
      &:first-child {
        border-top: none;
      }
      &:hover {
        background: #F2F2F2;
        background: #CACACA;
      }
      &__icon {
        margin-right: 10px;
        width: 30px;
        text-align: center;
        &__img {
          width: 15px;
        }
      }
      &__text {
        &__name {
          font-weight: bold;
          text-align: left;
        }      
      }
    }
  }
}
.list-group-item:first-child {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
</style>

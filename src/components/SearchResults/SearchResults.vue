<template>
  <div
    v-if="isSearchResultsOpen && searchInputValue !== '' && searchResults"
    class="searchResults"
  >
    <ul
      v-if='searchResults.length > 0'
      class="searchList"
    >
      <!-- On render seulement si il y a des résultats de recherche -->
      <li
        v-for="item in searchResults"
        class="searchListItem"
        @click="addPin(item)"
        v-bind:key='item.title'
      >
        <div class="searchListItemIcon">
          <img src="../../assets/images/markerIcon.png" alt="">
        </div>
        <div class="searchListItemText">
          <div class="searchListItemTextName">
            {{ item.name }}
          </div>
          <div class="searchListItemTextAddress">
            {{ item.location && item.location.address1 }}, {{ item.location && item.location.zip_code }} {{ item.location && item.location.city }}
          </div>
        </div>
      </li>
      <!-- Si pas de résultats on render: -->
      <li
        v-if='searchResults.length <= 0'
        class="searchListItem"
      >
        <div class="searchListItemText">
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
<style scoped lang="stylus">

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
}
.searchList {
  padding-left: 0;
}
.searchListItem {
  cursor: pointer;
  height: 45px;
  padding-left: 10px;
  font-size: 10pt;
  display: flex;
  align-items: center;
  transition: background 0.2s ease-in-out;
}
.searchListItem:first-child {
  border-top: none;
}
.searchListItem:hover {
  background: #F2F2F2;
}
.searchListItemIcon {
  margin-right: 10px;
  width: 30px;
  text-align: center;
}
.searchListItemIcon img {
  width: 15px;
}
.searchListItemTextName {
  font-weight: bold;
  text-align: left;
}
.searchListItem li {
  transition: background 0.2s ease-in-out;
  border-radius: none;
}
.searchListItem li:hover {
  background: #CACACA;
}
.list-group-item:first-child {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;

}
</style>

<template>
  <div v-if="isSearchResultsOpen && searchInputValue !== '' && searchResults" class="searchResults">
            <ul class="searchList">
              <!-- On render seulement si il y a des résultats de recherche -->
              <li
                v-if='searchResults.length > 0'
                v-for="item in searchResults"
                class="searchListItem"
                @click="addPin(item)"
              >
                <div class="searchListItemIcon">
                  <img src="./assets/markerIcon.png" alt="">
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
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>

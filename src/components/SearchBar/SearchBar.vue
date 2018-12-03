<template>
  <div class="searchBar">
            <!-- On utilise un form ici pour bénéficier du submit quand on appuie sur Entrée en plus du click sur le bouton -->
            <form
              class="searchBarForm"
              v-on:submit.prevent="searchYelpAPI($refs.searchInput.value)"
            >
              <input
                ref='searchInput'
                type="text"
                class="searchInput form-control"
                v-model="searchInputValue"
                placeholder="Search for a location or a venue"
                @focus="toggleSearchList(true);cancelPinFromMap();"
              >
              <button
                type="button"
                class="searchButton btn btn-primary"
                id="searchButton"
                @click="searchYelpAPI($refs.searchInput.value)"
              >Search</button>                    
            </form>
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

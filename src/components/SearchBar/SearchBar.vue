<template>
  <div class="searchBar">
    <!-- On utilise un form ici pour bénéficier du submit quand on appuie sur Entrée en plus du click sur le bouton -->
    <form
      class="searchBarForm"
      v-on:submit.prevent="handleSearch"
    >
      <input
        ref='searchInput'
        type="text"
        class="searchInput form-control"
        
        v-model='inputValue'
        placeholder="Search for a location or a venue"
        @focus="handleToggleSearchList();handleCancelPin();"
      >
      <button
        type="button"
        class="searchButton btn btn-primary"
        id="searchButton"
        v-on:click.prevent="handleSearch"
        v-bind:class='{ disabled: isSearchLoading }'
      >
        <Loader v-if='isSearchLoading' />
        <span v-if='!isSearchLoading'>Search</span>
      </button>                    
    </form>
  </div>
</template>

<script>
import Loader from '../Loader/Loader.vue'

export default {
  name: 'SearchBar',
  components: {
    Loader
  },
  props: {
    searchYelpAPI: Function,
    cancelPinFromMap: Function,
    toggleSearchList: Function,
    searchInputValue: String,
    updateSearchInputValue: Function,
    isSearchLoading: Boolean,
  },
  methods: {
    handleSearch() {
      this.searchYelpAPI(this.$refs.searchInput.value)
    },
    handleToggleSearchList() {
      this.toggleSearchList(true)
    },
    handleCancelPin() {
      this.cancelPinFromMap()
    },
    handleUpdateSearchInputValue() {
      this.updateSearchInputValue(this.$refs.searchInput.value)
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.searchInputValue
      },
      set() {
        this.handleUpdateSearchInputValue()
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.searchBar {
  width: calc(75% - 40px);
  display: flex;
  z-index: 1;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  margin-left: 20px;
  height: 40px;
  font-size: 12pt;
}
.searchBarResultsOpen {
  border-radius: 5px 0px 0px 5px;
}
.searchBarForm {
  width: 100%;
  display: flex;
  height: 100%;
}
.searchInput {
  border-radius: 5px 0px 0px 5px!important;
  height: 100%;
  font-size: 11pt;
}
.form-control:focus {
  border-color: #00C5FA!important;
  box-shadow: none!important;
}
.searchButton {
  border-radius: 0px 5px 5px 0px!important;
  position: relative;
  height: 40px;
  min-width: 100px;
  font-size: 12pt;
  background: #00C5FA!important;
  border: none;
}
.disabled {
  pointer-events: none;
}
</style>

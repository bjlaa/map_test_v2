export const searchYelpAPI = function (searchTerm) {
  this.isSearchLoading = true
  fetch('https://searchyelp.pixlink.io/searchYelp'/*`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=paris`*/, {
    method: 'POST',
    /*
    headers: new Headers({
      'Authorization': 'Bearer iCcyWIWqSEQEq56EGlgg_Qa1kK8R_Mpv8910GXr6Y_iKIXsLw1676ecmJDIBDX-_0lTDl9MUzJIGFoYCWzBQYRpfvgrzCb_pusHv65VwnEMRcMWom4AV-ikLvoHYW3Yx'
    }),*/
    headers: {
      'Content-Type': 'application/json'
    },
    mode: "cors",
    body: JSON.stringify({
      term: searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
      // bearer: 'iCcyWIWqSEQEq56EGlgg_Qa1kK8R_Mpv8910GXr6Y_iKIXsLw1676ecmJDIBDX-_0lTDl9MUzJIGFoYCWzBQYRpfvgrzCb_pusHv65VwnEMRcMWom4AV-ikLvoHYW3Yx'
    })
  })
    .then((response) => {
      return response.json()
    })
    .then((responseParsed) => {
      // Si pas de résultats on ouvre la liste et notre placeholder no result found est affiché
      if (responseParsed.businesses.length <= 0) {
        this.searchResults = [];
        this.isSearchResultsOpen = true;
      } else {
        // On crée une array
        var searchResultsFiltered = [];

        // Et on va boucler de 0 à 4 pour ajouter les 5 premiers éléments dans notre array
        for (var i = 0; i <= 4; i++) {
          if (responseParsed.businesses[i]) {
            searchResultsFiltered.push(Object.assign({}, responseParsed.businesses[i]));
          }
        }

        this.searchResults = searchResultsFiltered;
        this.isSearchResultsOpen = true;
        this.isSearchLoading = false
      }
    })
    .catch((error) => {
      console.log('ERROR in main.js - searchYelpAPI()', error);

      this.isSearchResultsOpen = true;
      this.isSearchLoading = false
    });
}

const toggleIsSearchLoading = function () {
  this.isSearchLoading = !this.isSearchLoading
}

export const updateSearchInputValue = function (value) {
  this.searchInputValue = value
}

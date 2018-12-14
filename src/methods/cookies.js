/*
* Cookies
*/
// from: https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
// and: https://stackoverflow.com/questions/11344531/pure-javascript-store-object-in-cookie
/*
  Example:

  setCookie('ppkcookie', 'testcookie', 7);

  var x = getCookie('ppkcookie');
  if (x) {
    [do something with x]
  }
*/
export const setCookie = function (name, value, days) {
  let expires = ""
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie = name + "=" + (JSON.stringify(value) || "")  + expires + "; path=/"
}

export const getCookie = function (name) {
 var result = document.cookie.match(new RegExp(name + '=([^;]+)'))
 result && (result = JSON.parse(result[1]))
 return result
}

export const eraseCookie = function(name) {   
  document.cookie = name+'=; Max-Age=-99999999;'
}

// Saves the username provided when first visiting an event
export const saveUsername = function () {
  var username = document.getElementById('usernameInput').value

  this.currentUser = username

  // Create the cookie
  this.setCookie(
    `${SETTINGS.cookieNameFirstPart}${this.eventID}`,
    { user: {
        name: username,
        pinsCreated: this.pinsCreated,
        pinsVoted: this.pinsVoted
      }
    },
    100
  )
}

// Updates the pinsCreated
export const updateCookie = function () {
  this.setCookie(
    `${SETTINGS.cookieNameFirstPart}${this.eventID}`,
    { user: {
        name: this.currentUser,
        pinsCreated: this.pinsCreated,
        pinsVoted: this.pinsVoted
      }
    },
    100
  )
}

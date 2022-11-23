// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-02-JS-B/sw.js", {
    scope: "/ICS2O-Unit-5-02-JS-B/",
  })
}

// returns a random integer from 1 to 6 into variable "randomNumber"
const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function displays the slider value.
 */
function myButtonClicked(buttonOnChecked) {
  buttonOnChecked = document.getElementById("option-1").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Your number is </p>" + "+" + randomNumber
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Your number is </p>" + "-" + randomNumber
  }
}

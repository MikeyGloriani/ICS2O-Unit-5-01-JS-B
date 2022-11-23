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


/**
 * This function updates the slider value.
 */
 function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById('flash1').checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
    "<p>Value is: On</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
    "<p>Value is: Off</p>"
  }
}
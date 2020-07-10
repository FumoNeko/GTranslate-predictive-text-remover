// ==UserScript==
// @name        Google translate predictive text remover
// @namespace   https://translate.google.com/
// @description Removes the div that suggests words while you are typing.
// @author      FumoNeko =w=
// @include     https://translate.google.com/*
// @version     1
// @grant       none
// @noframes
// ==/UserScript==

document.getElementsByClassName('gt-is-mobile gt-is')[0].remove()

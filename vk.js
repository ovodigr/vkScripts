// ==UserScript==
// @name vkAdblockJS
// @description  vkAdblockJS
// @author Vovk Igor
// @license MIT
// @version 1.3
// @require  https://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @include https://vk.com/*
// ==/UserScript==

var func = function(){
   $("#ads_left").hide();
   $(".wall_marked_as_ads").parent().parent().parent().parent().parent().hide();
};

$(document).ready(function() 
{
   func();
   setInterval(func,1000);
}); 

// ==UserScript==
// @name vkAdblockJS
// @description  vkAdblockJS
// @author Vovk Igor
// @license MIT
// @version 1.0
// @require  https://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @include https://vk.com/*
// ==/UserScript==

var func = function(){
   // console.log("1");  
    $(".wall_marked_as_ads").parent().parent().parent().parent().parent().hide();
};


$(document).ready(function() 
{


     $(".wall_marked_as_ads").parent().parent().parent().parent().parent().hide();
    
//setTimeout(function(){
//    $(".wall_marked_as_ads").parent().parent().parent().parent().parent().hide();
//},1000);
    
     setInterval(func,1000);


}); 

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
    
   //блокує рекламу зліва під меню
   $("#ads_left").hide();
   
   //блокує історію зверху
   $(".stories_feed_wrap").hide();
    
   //блокує репост спільнотою спільноти
   $("div[class^='feed_repost']").hide();
    
   //блокує платну рекламу в новинах
   $(".wall_marked_as_ads").parent().parent().parent().parent().parent().hide();
    
};

   //блокує історію зверху
   $(".stories_feed_wrap").hide();

	$(document).ready(function() 
	{
	   func();
	   setInterval(func,1000);
	}); 


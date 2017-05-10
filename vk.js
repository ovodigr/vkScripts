// ==UserScript==
// @name vkadblockJS
// @description  vkadblockJS
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







// ==UserScript==
// @name vkadblockJS
// @description Мой самый первый юзерскрипт 
// @author Vasya Pupkin
// @license MIT
// @version 1.0
// @require  https://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @include https://vk.com/*
// ==/UserScript==
// [1] Оборачиваем скрипт в замыкание, для кроссбраузерности (opera, ie)




(function (window, undefined) {  // [2] нормализуем window
    var w;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow;
    } else {
        w = window;
    }
    // В юзерскрипты можно вставлять практически любые javascript-библиотеки.
    // Код библиотеки копируется прямо в юзерскрипт.
    // При подключении библиотеки нужно передать w в качестве параметра окна window
    // Пример: подключение jquery.min.js
    // (function(a,b){function ci(a) ... a.jQuery=a.$=d})(w);

    // [3] не запускаем скрипт во фреймах
    // без этого условия скрипт будет запускаться несколько раз на странице с фреймами
    if (w.self != w.top) {
       // return;
    }
    
    function func() {
  alert( 'Привет' );
}
    // [4] дополнительная проверка наряду с @include
    if (/https:\/\/vk.com/.test(w.location.href)) {
        //Ниже идёт непосредственно код скрипта
        alert("Userscripts приветствует вас навязчивым окном.");
        
        $(".wall_marked_as_ads").parent().parent().parent().parent().parent().hide();
        setTimeout(func, 5000);
    }
})(window);






// ==UserScript==
// @name          vkadblockJS
// @description   Описание скрипта
// @include        https://vk.com/*
// @require			[url]http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js[/url]
// ==/UserScript==

$(document).ready(function() 
{

//тут уж точно по загрузке, но с фреймами иногда не прокатывает, надо 
alert( 'Привет' );
    
setTimeout(function(){

alert( 'Привет' );

},5000);


});







// ==UserScript==
// @name vkadblockJS
// @description Мой самый первый юзерскрипт 
// @author Vasya Pupkin
// @license MIT
// @version 1.0
// @require  https://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @include https://vk.com/*
// ==/UserScript==

$(document).ready(function() 
{

//тут уж точно по загрузке, но с фреймами иногда не прокатывает, надо 
//alert( 'Привет' );
     $(".wall_marked_as_ads").parent().parent().parent().parent().parent().hide();
    
setTimeout(function(){

//alert( 'Привет' );
    
    $(".wall_marked_as_ads").parent().parent().parent().parent().parent().hide();

},1000);


});



var runEverySecond = function(){
  $('p').find('img').attr('width', '0px');
  $('a').css('padding', '0px');

  console.debug('Hello Word has ' + $('p').length + ' paragraphs');
};

$(document).ready(function() {
    setInterval(runEverySecond,1000);
});

/*! original file: thismight.be/offensive/js/jquery.ba-outside-events.min.js */
/*! © 2010 Ben Alman, released under http://benalman.com/about/license/ (MIT & GPL)*/
(function(f,g,d){f.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "),function(a){e(a)});e("focusin","focus"+d);e("focusout","blur"+d);f.addOutsideEvent=e;function e(b,i){i=i||b+d;var j=f(),a=b+"."+i+"-special-event";f.event.special[i]={setup:function(){j=j.add(this);if(j.length===1){f(g).bind(a,c)}},teardown:function(){j=j.not(this);if(j.length===0){f(g).unbind(a)}},add:function(k){var h=k.handler;k.handler=function(m,n){m.target=n;h.apply(this,arguments)}}};function c(h){f(j).each(function(){var k=f(this);if(this!==h.target&&!k.has(h.target).length){k.triggerHandler(i,[h.target])}})}}})(jQuery,document,"outside");
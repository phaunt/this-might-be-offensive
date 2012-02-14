// ©/info: https://github.com/numist/jslib/blob/master/irsz.js
(function(e){var i,d={init:function(k){i.data("irsz",e.extend({min_height:400,min_width:400,auto:true,padding:[10,10],cursor_zoom_in:"auto",cursor_zoom_out:"auto",noresize_class:"irsz_noresize"},k||{}));b();i.load(function(){b()});e(window).bind("resize.irsz",function(){b()});i.each(function(){e(this).bind("click.irsz",function(n){var m=e(n.target);var l=m.width();h(m.get(0));if(l!=m.width()){n.preventDefault()}return true})});return i},toggle:function(){if(i.data("irsz").auto==undefined){e.error("Must init plugin before calling members in jQuery.irsz");return i}i.each(function(){h(this)});return i},destroy:function(){if(i.data("irsz").auto==undefined){e.error("Must init plugin before calling members in jQuery.irsz");return i}e(window).unbind(".irsz");i.each(function(){e(this).unbind(".irsz")});i.each(function(){var k=this;c(k,function(m,l){g(k,m,l)});j(k)});i.data("irsz",{});return i}};e.fn.irsz=function(k){i=this;if(d[k]){return d[k].apply(i,Array.prototype.slice.call(arguments,1))}else{if(typeof k==="object"||!k){return d.init.apply(i,arguments)}else{e.error("Method "+k+" does not exist on jQuery.irsz")}}};function c(n,m){var p="max-width",o="max-height",q="px",r,l;n=e(n);if(n.length!=1||n.attr("src")==undefined){return}if(n.filter("["+p+"]["+o+"]").length==1){var s,k;r=n.attr(p);s=parseInt(r.endsWith(q)?r.substr(0,r.lastIndexOf(q)):r);l=n.attr(o);k=parseInt(l.endsWith(q)?l.substr(0,l.lastIndexOf(q)):l);m(s,k)}else{e("<img/>").attr("src",n.attr("src")).load(function(){r=this.width,l=this.height;n.attr(p,r+q).attr(o,l+q);m(r,l)})}}function j(k){f(k,"auto")}function f(l,k){l.style.cursor=k}function h(k){c(k,function(l,m){if(e(k).width()<l||e(k).height<m){e(k).addClass(i.data("irsz").noresize_class);f(k,i.data("irsz").cursor_zoom_out);g(k,l,m)}else{e(k).removeClass(i.data("irsz").noresize_class);a(k)}})}function a(k){c(k,function(s,p){var r=e(window).width()-i.data("irsz").padding[0],w=e(window).height()-i.data("irsz").padding[1],l=0,n=0,u,m,t,v;if(p<i.data("irsz").min_height){return}if(s<i.data("irsz").min_width){return}function q(x){return Math.round(s*x/p)}function o(x){return Math.round(p*x/s)}u=r>i.data("irsz").min_width?r:i.data("irsz").min_width;m=o(u);v=w>i.data("irsz").min_height?w:i.data("irsz").min_height;t=q(v);u=u<s?u:s;m=m<p?m:p;t=t<s?t:s;v=v<p?v:p;if(m>v){n=t;l=v}else{n=u;l=m}if(e(k).hasClass(i.data("irsz").noresize_class)){if(l<p&&n<s){f(k,i.data("irsz").cursor_zoom_out)}else{j(k)}return}if(l!=e(k).height()){if(l<p){f(k,i.data("irsz").cursor_zoom_in)}else{j(k)}g(k,n,l)}return})}function g(o,l,m){var o=e(o),k=o.width(),n=o.height();o.height(m+"px");o.width(l+"px");if(l!=k||m!=n){o.resize()}return}function b(){if(i.data("irsz").auto==true){i.each(function(){a(this)})}}})(jQuery);
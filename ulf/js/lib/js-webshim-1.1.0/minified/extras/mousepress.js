(function(b){var e=function(c,a){var d=c.data("mousepresstimer");d&&clearTimeout(d);a&&c.unbind("mouseup.mousepressext mouseleave.mousepressext")};b.event.special.mousepress={setup:function(){b(this).bind("mousedown.mousepressext",function(c){var a=b(this),d=function(f){var g=0;e(a);a.data("mousepresstimer",setInterval(function(){b.event.special.mousepress.handler(a[0],c);g++;g>3&&f>45&&d(f-40)},f))};e(a);a.data("mousepresstimer",setTimeout(function(){d(180)},200));a.bind("mouseup.mousepressext mouseleave.mousepressext",
function(){e(a,true);a=null})})},teardown:function(){e(b(this).unbind(".mousepressext"),true)},handler:function(c,a){return b.event.handle.call(c,{type:"mousepress",target:a.target,pageX:a.pageX,pageY:a.pageY})}}})(jQuery);

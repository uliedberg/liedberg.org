(function(){var b=Object.prototype.hasOwnProperty,h=Object.prototype.toString;if(!Array.isArray)Array.isArray=function(e){return h.call(e)=="[object Array]"};if(!Object.keys){var u=true,r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],j=r.length;for(var o in{toString:null})u=false;Object.keys=function(e){if(typeof e!=="object"&&typeof e!=="function"||e===null)throw new TypeError("Object.keys called on a non-object");var a=[];for(var c in e)b.call(e,
c)&&a.push(c);if(u)for(c=0;c<j;c++){var d=r[c];b.call(e,d)&&a.push(d)}return a}}if((!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor)&&window.jQuery&&jQuery.webshims){var m=jQuery.webshims;m.objectCreate=function(e,a){var c=function(){};c.prototype=e;c=new c;a&&m.defineProperties(c,a);return c};m.defineProperties=function(e,a){for(var c in a)b.call(a,c)&&m.defineProperty(e,c,a[c]);return e};m.defineProperty=function(e,a,c){if(typeof c!="object")return e;if(Object.defineProperty)try{c.writeable=
c.writeable||false;c.configurable=c.configurable||false;c.enumeratable=c.enumerable||false;Object.defineProperty(e,a,c);return}catch(d){}if(b.call(c,"value")){e[a]=c.value;return e}if(e.__defineGetter__){typeof c.get=="function"&&e.__defineGetter__(a,c.get);typeof c.set=="function"&&e.__defineSetter__(a,c.set)}return e};m.getOwnPropertyDescriptor=function(e,a){var c;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return c=Object.getOwnPropertyDescriptor(e,a)}catch(d){}c={configurable:true,
enumerable:true,writable:true,value:undefined};var f=e.__lookupGetter__&&e.__lookupGetter__(a),i=e.__lookupSetter__&&e.__lookupSetter__(a);if(!f&&!i){if(!b.call(e,a))return;c.value=e[a];return c}delete c.writable;delete c.value;c.get=c.set=undefined;if(f)c.get=f;if(i)c.set=i;return c}}if(isNaN(Date.parse("T00:00")))Date=function(e){var a=function(f,i,n,g,k,l,s){var q=arguments.length;if(this instanceof e){q=q===1&&String(f)===f?new e(a.parse(f)):q>=7?new e(f,i,n,g,k,l,s):q>=6?new e(f,i,n,g,k,l):q>=
5?new e(f,i,n,g,k):q>=4?new e(f,i,n,g):q>=3?new e(f,i,n):q>=2?new e(f,i):q>=1?new e(f):new e;q.constructor=a;return q}return e.apply(this,arguments)},c=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");for(var d in e)a[d]=e[d];a.now=e.now;a.UTC=e.UTC;a.prototype=e.prototype;a.prototype.constructor=a;a.parse=function(f){var i=c.exec(f);if(i){i.shift();for(var n=i[0]===undefined,g=0;g<10;g++)if(g!==
7){i[g]=+(i[g]||(g<3?1:0));g===1&&i[g]--}if(n)return((i[3]*60+i[4])*60+i[5])*1E3+i[6];n=(i[8]*60+i[9])*60*1E3;if(i[6]==="-")n=-n;return e.UTC.apply(this,i.slice(0,7))+n}return e.parse.apply(this,arguments)};return a}(Date);var p=Array.prototype.slice;if(!Function.prototype.bind)Function.prototype.bind=function(e){var a=this;if(typeof a.apply!="function"||typeof a.call!="function")return new TypeError;var c=p.call(arguments),d=function(){if(this instanceof d){var f=Object.create(a.prototype);a.apply(f,
c.concat(p.call(arguments)));return f}else return a.call.apply(a,c.concat(p.call(arguments)))};d.bound=a;d.boundTo=e;d.boundArgs=c;d.length=typeof a=="function"?Math.max(a.length-c.length,0):0;return d}})();jQuery.webshims.gcEval=function(b,h){return function(u){eval(u)}.call(h||window,b)};
jQuery.webshims.ready("es5",function(b,h,u,r,j){h.getVisualInput=function(g){g=b(g);return(g.data("inputUIReplace")||{visual:g}).visual};var o=b.support,m=h.getVisualInput,p={checkbox:1,radio:1},e=b([]),a=function(g){g=b(g);return p[g[0].type]&&g[0].name?b(r.getElementsByName(g[0].name)).not(g[0]):e};b.extend(b.expr.filters,{"valid-element":function(g){return(b.attr(g,"validity")||{valid:true}).valid},"invalid-element":function(g){return!c(g)},willValidate:function(g){return b.attr(g,"willValidate")}});
var c=b.expr.filters["valid-element"],d=b.attr,f={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1},i;b.attr=function(g,k,l){if(g.form&&f[k]&&l!==j&&b(g).hasClass("form-ui-invalid")){var s=d.apply(this,arguments);if(c(g)){m(g).removeClass("form-ui-invalid");k=="checked"&&l&&a(g).removeClass("form-ui-invalid")}return s}return d.apply(this,arguments)};b(document).bind("focusout change refreshValidityStyle",function(g){if(!(i||!g.target||!g.target.form)){var k=b.attr(g.target,"html5element")||
g.target;if(b.attr(k,"willValidate")){var l,s;if(c(g.target)){l="form-ui-valid";s="form-ui-invalid";p[g.target.type]&&g.target.checked&&a(k).removeClass(s).removeAttr("aria-invalid")}else{l="form-ui-invalid";s="form-ui-valid";p[g.target.type]&&!g.target.checked&&a(k).removeClass(s)}m(k).addClass(l).removeClass(s);i=true;setTimeout(function(){i=false},9)}else m(k).removeClass("form-ui-invalid form-ui-valid")}});h.triggerInlineForm=function(){var g=function(k){if(typeof k!="string"||k.indexOf("-")!==
-1||k.indexOf(".")!==-1||k.indexOf('"')!==-1)return"";return"var "+k+' = this.form["'+k+'"];'};return function(k,l){var s=k["on"+l]||k.getAttribute("on"+l)||"",q;l=b.Event({type:l,target:k[0],currentTarget:k[0]});if(s&&typeof s=="string"&&k.form&&k.form.elements){q="";for(var x=0,z=k.form.elements,t=z.length;x<t;x++){var v=z[x].name,w=z[x].id;if(v)q+=g(v);if(w&&w!==v)q+=g(w)}q=h.gcEval(q+s,k)}if(q===false){l.stopPropagation();l.preventDefault()}b(k).trigger(l);return q}}();var n=function(){h.scrollRoot=
b.browser.webkit||r.compatMode=="BackCompat"?b(r.body):b(r.documentElement)};n();b(n);h.validityAlert=function(){var g=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",k={hideDelay:5E3,showFor:function(t,v,w){t=b(t);var y=m(t);z();k.clear();this.getMessage(t,v);this.position(y);this.show();if(this.hideDelay)s=setTimeout(q,this.hideDelay);w||this.setFocus(y,t[0])},setFocus:function(t,v){var w=b("input, select, textarea, .ui-slider-handle",t).filter(":visible:first");w[0]||(w=t);var y=
h.scrollRoot.scrollTop(),A=w.offset().top,B;l.attr("for",h.getID(w));if(y>A){if((B=v.id&&b('label[for="'+v.id+'"]',v.form).offset())&&B.top<A)A=B.top;h.scrollRoot.animate({scrollTop:A-5},{queue:false,duration:Math.max(Math.min(450,(y-A)*2),140)});B=true}try{w[0].focus()}catch(C){}B&&h.scrollRoot.scrollTop(y);b(r).bind("focusout.validityalert",q)},getMessage:function(t,v){b("> span",l).text(v||t.attr("validationMessage"))},position:function(t){var v=t.offset();v.top+=t.outerHeight();l.css(v)},show:function(){l.css("display")===
"none"?l.fadeIn():l.fadeTo(400,1)},hide:function(){k.clear();l.fadeOut()},clear:function(){clearTimeout(s);b(r).unbind("focusout.validityalert");l.stop().removeAttr("for")},alert:b("<"+g+' class="validity-alert" role="alert"><span class="va-box" /></'+g+">").css({position:"absolute",display:"none"})},l=k.alert,s=false,q=b.proxy(k,"hide"),x=false,z=function(){if(!x){x=true;b(function(){l.appendTo("body")})}};return k}();(function(){var g,k=[],l;b(r).bind("invalid",function(s){var q=b(s.target).addClass("form-ui-invalid").removeClass("form-ui-valid");
if(!g){g=b.Event("firstinvalid");q.trigger(g)}g&&g.isDefaultPrevented()&&s.preventDefault();k.push(s.target);s.extraData="fix";clearTimeout(l);l=setTimeout(function(){var x={type:"lastinvalid",cancelable:false,invalidlist:b(k)};g=false;k=[];b(void 0).unbind("submit.preventInvalidSubmit");q.trigger(x,x)},9)})})();(function(){if(!(!o.validity||u.noHTMLExtFixes||o.fieldsetValidation)){var g=function(l){var s=(b.attr(l,"validity")||{valid:true}).valid;!s&&l.checkValidity&&l.checkValidity()&&b(l).trigger("invalid");
return s},k=["fieldset"];o.output||(k=["input","textarea","select","form","fieldset"]);h.defineNodeNamesProperty(k,"checkValidity",{value:function(){if(this.elements||b.nodeName(this,"fieldset")){var l=true;b(this.elements||"input, textarea, select",this).each(function(){g(this)||(l=false)});return l}else if(this.checkValidity)return g(this)}})}})();h.createReadyEvent("form-core")},true);
jQuery.webshims.ready("form-core",function(b,h,u,r){var j=h.validityMessages,o=b.support;j.en=j.en||j["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",
stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};j["en-US"]=j["en-US"]||j.en;j[""]=j[""]||j["en-US"];j.de=j.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",
date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",
patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var m=j[""];b(r).bind("htmlExtLangChange",function(){h.activeLang(j,"form-message",function(p){m=p})});h.createValidationMessage=function(p,e){var a=m[e];if(a&&typeof a!=="string")a=a[(p.getAttribute("type")||"").toLowerCase()]||a.defaultMessage;a&&["value","min","max","title","maxlength","label"].forEach(function(c){if(a.indexOf("{%"+c)!==-1){var d=(c=="label"?b.trim(b('label[for="'+
p.id+'"]',p.form).text()).replace(/\*$|:$/,""):b.attr(p,c))||"";a=a.replace("{%"+c+"}",d);if("value"==c)a=a.replace("{%valueLen}",d.length)}});return a||""};r=h.overrideValidationMessages||h.implement.customValidationMessage?["customValidationMessage"]:[];if(!u.noHTMLExtFixes&&!o.validationMessage||!o.validity)r.push("validationMessage");b.each(r,function(p,e){h.defineNodeNamesProperty(["input","select","textarea","fieldset","output"],e,{get:function(a){var c="";if(!b.attr(a,"willValidate"))return c;
var d=b.attr(a,"validity")||{valid:1};if(d.valid)return c;if(c=a.getAttribute("x-moz-errormessage")||a.getAttribute("data-errormessage")||"")return c;if(d.customError&&a.nodeName)if(c="validationMessage"in a?a.validationMessage:b.data(a,"customvalidationMessage"))return c;b.each(d,function(f,i){if(!(f=="valid"||!i))if(c=h.createValidationMessage(a,f))return false});return c||""},set:b.noop})})},true);
jQuery.webshims.ready("form-core",function(b,h,u){if(!b.support.validity){h.inputTypes=h.inputTypes||{};var r=h.inputTypes,j={radio:1,checkbox:1};h.addInputType=function(a,c){r[a]=c};var o={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},m={valueMissing:function(a,c,d){var f=a[0].getAttribute("aria-required");if(!a.attr("required")){f=="true"&&a[0].setAttribute("aria-required","false");
return false}f=="false"&&a[0].setAttribute("aria-required","true");f=false;if(!("type"in d))d.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();return f=d.nodeName=="select"?!c&&a[0].type=="select-one"&&a[0].size<2&&b("> option:first-child:not(:disabled)",a).attr("selected"):j[d.type]?!b(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!c},tooLong:function(a,c,d){if(c===""||d.nodeName=="select")return false;a=a.attr("maxlength");d=false;var f=c.length;if(f&&a>=0&&c.replace&&
(typeof a=="number"||a&&a==a*1))d=f>a;return d},typeMismatch:function(a,c,d){if(c===""||d.nodeName=="select")return false;var f=false;if(!("type"in d))d.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(r[d.type]&&r[d.type].mismatch)f=r[d.type].mismatch(c,a);return f},patternMismatch:function(a,c,d){if(c===""||d.nodeName=="select")return false;a=a.attr("pattern");if(!a)return false;return!RegExp("^(?:"+a+")$").test(c)}};h.addValidityRule=function(a,c){m[a]=c};h.defineNodeNamesProperty(["input",
"textarea","select","form","fieldset"],"checkValidity",{value:function(){var a,c=function(d){var f,i=b.attr(d,"validity");if(i)b.data(d,"cachedValidity",i);else return true;if(!i.valid){f=b.Event("invalid");var n=b(d).trigger(f);if(!a&&!f.isDefaultPrevented()){h.validityAlert.showFor(n);a=true}}b.data(d,"cachedValidity",false);return i.valid};return function(){a=false;if(b.nodeName(this,"form")||b.nodeName(this,"fieldset")){for(var d=true,f=this.elements||b("input, textarea, select",this),i=0,n=f.length;i<
n;i++)c(f[i])||(d=false);return d}else return this.form?c(this):true}}()});h.defineNodeNamesProperty(["input","textarea","select"],"setCustomValidity",{value:function(a){b.data(this,"customvalidationMessage",""+a)}});b.event.special.invalid={add:function(){b.data(this,"invalidEventShim")||b.event.special.invalid.setup.call(this)},setup:function(){b(this).bind("submit",b.event.special.invalid.handler).data("invalidEventShim",true);var a=b(this).data("events").submit;a&&a.length>1&&a.unshift(a.pop())},
teardown:function(){b(this).unbind("submit",b.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(a){if(!(a.type!="submit"||!b.nodeName(a.target,"form")||b.attr(a.target,"novalidate")!=null||b.data(a.target,"novalidate")))if(!b(a.target).checkValidity()){!a.originalEvent&&u.console&&console.log&&console.log("submit");a.stopImmediatePropagation();return false}}};h.defineNodeNamesProperty(["input","select","textarea"],"validity",{set:b.noop,get:function(a){var c=b.data(a,
"cachedValidity");if(c)return c;c=b.extend({},o);if(!b.attr(a,"willValidate")||a.type=="submit")return c;var d=b(a),f=d.val(),i={nodeName:a.nodeName.toLowerCase()};a.getAttribute("aria-invalid");c.customError=!!b.data(a,"customvalidationMessage");if(c.customError)c.valid=false;b.each(m,function(n,g){if(g(d,f,i)){c[n]=true;c.valid=false}});a.setAttribute("aria-invalid",c.valid?"false":"true");return c}},true,"form-htc-validity.htc");h.defineNodeNamesBooleanProperty(["input","textarea","select"],"required");
h.defineNodeNamesProperty(["input","select","textarea","fieldset","button","output"],"willValidate",{get:function(){var a={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1},c={fieldset:1,button:1,output:1};return function(d){return!!(d.form&&!d.disabled&&!d.readOnly&&!a[d.type]&&!c[(d.nodeName||"").toLowerCase()]&&b.attr(d.form,"novalidate")==null)}}()},true,"form-htc-validity.htc");h.addInputType("email",{mismatch:function(){var a=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(c){return!a.test(c)}}()});h.addInputType("url",{mismatch:function(){var a=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});var p=function(){var a=this;if(a.form){b.data(a.form,"novalidate",true);setTimeout(function(){b.data(a.form,"novalidate",false)},1)}},e={submit:1,button:1};b(document).bind("click",function(a){a.target&&a.target.form&&e[a.target.type]&&b.attr(a.target,"formnovalidate")!=null&&p.call(a.target)});h.addReady(function(a,c){var d=b("form",a).add(c.filter("form")).bind("invalid",b.noop).find("button[formnovalidate]").bind("click",p).end();setTimeout(function(){if(!document.activeElement||
!document.activeElement.form){var f=true;b("input, select, textarea",d).each(function(){if(!f)return false;if(this.getAttribute("autofocus")!=null){f=false;var i=h.getVisualInput(this),n=b("input, select, textarea, .ui-slider-handle",i).filter(":visible:first");n[0]||(n=i);try{n[0].focus()}catch(g){}}})}},9)});h.createReadyEvent("form-extend")}},true);
jQuery.webshims.ready("es5",function(b,h,u,r,j){if(!b.support.placeholder){var o=function(a,c,d,f,i){if(!f){f=b.data(a,"placeHolder");if(!f)return}if(i=="focus"||!i&&a===document.activeElement)f.box.removeClass("placeholder-visible");else{if(c===false)c=b.attr(a,"value");if(c)f.box.removeClass("placeholder-visible");else{if(d===false)d=b.attr(a,"placeholder");f.box[d&&!c?"addClass":"removeClass"]("placeholder-visible")}}},m=function(a){a=b(a);var c=a.attr("id"),d=!!(a.attr("title")||a.attr("aria-labeledby"));
if(!d&&c)d=!!b('label[for="'+c+'"]',a[0].form)[0];return b(d?'<span class="placeholder-text"></span>':'<label for="'+(c||b.webshims.getID(a))+'" class="placeholder-text"></label>')},p=function(){var a=/\n|\r|\f|\t/g,c={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(d){var f=b.data(d,"placeHolder");if(f)return f;f=b.data(d,"placeHolder",{text:m(d)});f.box=b(d).wrap('<span class="placeholder-box placeholder-box-'+(d.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(g){o(this,false,false,f,g.type)}).parent();f.text.insertAfter(d).bind("mousedown.placeholder",function(){o(this,false,false,f,"focus");d.focus();return false});b.each(["Left","Top"],function(g,k){var l=(parseInt(b.curCSS(d,"padding"+k),10)||0)+Math.max(parseInt(b.curCSS(d,"margin"+k),10)||0,0)+(parseInt(b.curCSS(d,"border"+k+"Width"),10)||0);f.text.css("padding"+k,l)});b.curCSS(d,"lineHeight");var i={width:b(d).width(),height:b(d).height()},n=b.curCSS(d,"float");b.each(["lineHeight","fontSize",
"fontFamily","fontWeight"],function(g,k){var l=b.curCSS(d,k);f.text.css(k)!=l&&f.text.css(k,l)});i.width&&i.height&&f.text.css(i);n!=="none"&&f.box.addClass("placeholder-box-"+n);return f},update:function(d,f){if(c[b.attr(d,"type")]||b.nodeName(d,"textarea")){if(b.nodeName(d,"input"))f=f.replace(a,"");var i=p.create(d);h.contentAttr(d,"placeholder")!=f&&h.contentAttr(d,"placeholder",f);i.text.text(f);o(d,false,f,i)}}}}();b.webshims.publicMethods={pHolder:p};h.defineNodeNamesProperty(["input","textarea"],
"placeholder",{set:function(a,c){p.update(a,c)},get:function(a){return h.contentAttr(a,"placeholder")||""},init:true});h.onNodeNamesPropertyModify(["input","textarea"],"value",{set:function(a,c){var d=h.contentAttr(a,"placeholder");d&&"value"in a&&o(a,c,d)}});var e=b.fn.val;b.fn.val=function(a){a!==j&&this.each(function(){if(this.nodeType===1){var c=this.getAttribute("placeholder");c&&"value"in this&&o(this,a,c)}});return e.apply(this,arguments)}}});
jQuery.webshims.ready("form-core",function(b,h){if(!("value"in document.createElement("output"))){var u=document;(function(){var j={input:1,textarea:1},o={updateInput:1,input:1},m={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},p=function(e){var a,c=e.attr("value"),d=function(i){if(e){var n=e.attr("value");if(n!==c){c=n;if(!i||!o[i.type]){console.log(n,i);h.triggerInlineForm(e[0],"input")}}}},f=function(){e.unbind("focusout",f).unbind("input",d).unbind("updateInput",d);clearInterval(a);
d();e=null};clearInterval(a);a=setInterval(d,b.browser.mozilla?250:111);setTimeout(d,9);e.bind("focusout",f).bind("input updateInput",d)};b(u).bind("focusin",function(e){if(e.target&&e.target.type&&!e.target.readonly&&!e.target.readOnly&&!e.target.disabled&&j[(e.target.nodeName||"").toLowerCase()]&&!m[e.target.type])p(b(e.target))})})();var r=function(j){if(!j.getAttribute("aria-live")){j=b(j);var o=(j.text()||"").trim(),m=j.attr("id"),p=j.attr("for"),e=b('<input class="output-shim" type="hidden" name="'+
(j.attr("name")||"")+'" value="'+o+'" style="display: none" />').insertAfter(j),a=e[0].form||u,c=function(d){e[0].value=d;d=e[0].value;j.text(d);h.contentAttr(j[0],"value",d)};j[0].defaultValue=o;h.contentAttr(j[0],"value",o);j.attr({"aria-live":"polite"});if(m){e.attr("id",m);j.attr("aria-labeldby",h.getID(b('label[for="'+m+'"]',a)))}if(p){m=h.getID(j);p.split(" ").forEach(function(d){(d=a.getElementById(d))&&d.setAttribute("aria-controls",m)})}j.data("outputShim",c);e.data("outputShim",c);return c}};
h.defineNodeNameProperty("output","value",{set:function(j,o){var m=b.data(j,"outputShim");m||(m=r(j));m(o)},get:function(j){return h.contentAttr(j,"value")||b(j).text()||""}});h.onNodeNamesPropertyModify("input","value",{set:function(j,o){var m=b.data(j,"outputShim");if(m){m(o);return o}b(j).triggerHandler("updateInput")}});h.addReady(function(j,o){b("output",j).add(o.filter("output")).each(function(){r(this)})});h.createReadyEvent("form-output")}},true);

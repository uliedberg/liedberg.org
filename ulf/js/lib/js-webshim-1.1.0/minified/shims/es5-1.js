(function(){var k=Object.prototype.hasOwnProperty,q=Object.prototype.toString;if(!Array.isArray)Array.isArray=function(a){return q.call(a)=="[object Array]"};if(!Object.keys){var n=true,o=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=o.length;for(var t in{toString:null})n=false;Object.keys=function(a){if(typeof a!=="object"&&typeof a!=="function"||a===null)throw new TypeError("Object.keys called on a non-object");var c=[];for(var b in a)k.call(a,
b)&&c.push(b);if(n)for(b=0;b<r;b++){var f=o[b];k.call(a,f)&&c.push(f)}return c}}if((!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor)&&window.jQuery&&jQuery.webshims){var j=jQuery.webshims;j.objectCreate=function(a,c){var b=function(){};b.prototype=a;b=new b;c&&j.defineProperties(b,c);return b};j.defineProperties=function(a,c){for(var b in c)k.call(c,b)&&j.defineProperty(a,b,c[b]);return a};j.defineProperty=function(a,c,b){if(typeof b!="object")return a;if(Object.defineProperty)try{b.writeable=
b.writeable||false;b.configurable=b.configurable||false;b.enumeratable=b.enumerable||false;Object.defineProperty(a,c,b);return}catch(f){}if(k.call(b,"value")){a[c]=b.value;return a}if(a.__defineGetter__){typeof b.get=="function"&&a.__defineGetter__(c,b.get);typeof b.set=="function"&&a.__defineSetter__(c,b.set)}return a};j.getOwnPropertyDescriptor=function(a,c){var b;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return b=Object.getOwnPropertyDescriptor(a,c)}catch(f){}b={configurable:true,
enumerable:true,writable:true,value:undefined};var e=a.__lookupGetter__&&a.__lookupGetter__(c),d=a.__lookupSetter__&&a.__lookupSetter__(c);if(!e&&!d){if(!k.call(a,c))return;b.value=a[c];return b}delete b.writable;delete b.value;b.get=b.set=undefined;if(e)b.get=e;if(d)b.set=d;return b}}if(isNaN(Date.parse("T00:00")))Date=function(a){var c=function(e,d,h,g,l,p,s){var i=arguments.length;if(this instanceof a){i=i===1&&String(e)===e?new a(c.parse(e)):i>=7?new a(e,d,h,g,l,p,s):i>=6?new a(e,d,h,g,l,p):i>=
5?new a(e,d,h,g,l):i>=4?new a(e,d,h,g):i>=3?new a(e,d,h):i>=2?new a(e,d):i>=1?new a(e):new a;i.constructor=c;return i}return a.apply(this,arguments)},b=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");for(var f in a)c[f]=a[f];c.now=a.now;c.UTC=a.UTC;c.prototype=a.prototype;c.prototype.constructor=c;c.parse=function(e){var d=b.exec(e);if(d){d.shift();for(var h=d[0]===undefined,g=0;g<10;g++)if(g!==
7){d[g]=+(d[g]||(g<3?1:0));g===1&&d[g]--}if(h)return((d[3]*60+d[4])*60+d[5])*1E3+d[6];h=(d[8]*60+d[9])*60*1E3;if(d[6]==="-")h=-h;return a.UTC.apply(this,d.slice(0,7))+h}return a.parse.apply(this,arguments)};return c}(Date);var m=Array.prototype.slice;if(!Function.prototype.bind)Function.prototype.bind=function(a){var c=this;if(typeof c.apply!="function"||typeof c.call!="function")return new TypeError;var b=m.call(arguments),f=function(){if(this instanceof f){var e=Object.create(c.prototype);c.apply(e,
b.concat(m.call(arguments)));return e}else return c.call.apply(c,b.concat(m.call(arguments)))};f.bound=c;f.boundTo=a;f.boundArgs=b;f.length=typeof c=="function"?Math.max(c.length-b.length,0):0;return f}})();

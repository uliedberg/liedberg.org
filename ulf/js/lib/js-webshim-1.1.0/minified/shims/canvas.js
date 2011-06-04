if(!document.createElement("canvas").getContext){(function(){function E(){return this.context_||(this.context_=new H(this))}function w(a,b){var c=T.call(arguments,2);return function(){return a.apply(b,c.concat(T.call(arguments)))}}function I(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function t(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office",
"#default#VML");if(!a.styleSheets.ex_canvas_){a=a.createStyleSheet();a.owningElement.id="ex_canvas_";a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}function u(a){var b=a.srcElement;if(b.getContext&&"clearRect"in b.getContext())switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect();b.style.height=b.attributes.height.nodeValue+
"px";b.firstChild.style.height=b.clientHeight+"px";break}}function J(a){a=a.srcElement;if(a.firstChild){a.firstChild.style.width=a.clientWidth+"px";a.firstChild.style.height=a.clientHeight+"px"}}function K(){return[[1,0,0],[0,1,0],[0,0,1]]}function x(a,b){for(var c=K(),d=0;d<3;d++)for(var e=0;e<3;e++){for(var f=0,h=0;h<3;h++)f+=a[d][h]*b[h][e];c[d][e]=f}return c}function U(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=
a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function V(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1);b=a.substring(b+1,c).split(",");if(b.length!=4||a.charAt(3)!="a")b[3]=1;return b}function L(a,b,c){return Math.min(c,Math.max(b,a))}function M(a,
b,c){c<0&&c++;c>1&&c--;return 6*c<1?a+(b-a)*6*c:2*c<1?b:3*c<2?a+(b-a)*(2/3-c)*6:a}function N(a){if(a in O)return O[a];var b,c=1;a=String(a);if(a.charAt(0)=="#")b=a;else if(/^rgb/.test(a)){c=V(a);b="#";for(var d,e=0;e<3;e++){d=c[e].indexOf("%")!=-1?Math.floor(parseFloat(c[e])/100*255):+c[e];b+=y[L(d,0,255)]}c=+c[3]}else if(/^hsl/.test(a)){e=c=V(a);b=parseFloat(e[0])/360%360;b<0&&b++;d=L(parseFloat(e[1])/100,0,1);e=L(parseFloat(e[2])/100,0,1);if(d==0)d=e=b=e;else{var f=e<0.5?e*(1+d):e+d-e*d,h=2*e-f;
d=M(h,f,b+1/3);e=M(h,f,b);b=M(h,f,b-1/3)}b="#"+y[Math.floor(d*255)]+y[Math.floor(e*255)]+y[Math.floor(b*255)];c=c[3]}else b=$[a]||a;return O[a]={color:b,alpha:c}}function H(a){this.m_=K();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=n*1;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+
"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(false);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function W(a,b,c,d){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y});a.currentX_=d.x;a.currentY_=d.y}function X(a,b){var c=N(a.strokeStyle),d=c.color;
c=c.alpha*a.globalAlpha;var e=a.lineScale_*a.lineWidth;if(e<1)c*=e;b.push("<g_vml_:stroke",' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',aa[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',d,'" />')}function Y(a,b,c,d){var e=a.fillStyle,f=a.arcScaleX_,h=a.arcScaleY_,l=d.x-c.x,o=d.y-c.y;if(e instanceof z){var i=0;d={x:0,y:0};var j=0,q=1;if(e.type_=="gradient"){i=e.x1_/f;c=e.y1_/h;var m=p(a,e.x0_/f,e.y0_/h);i=p(a,i,c);i=Math.atan2(i.x-m.x,i.y-m.y)*
180/Math.PI;if(i<0)i+=360;if(i<1.0E-6)i=0}else{m=p(a,e.x0_,e.y0_);d={x:(m.x-c.x)/l,y:(m.y-c.y)/o};l/=f*n;o/=h*n;q=s.max(l,o);j=2*e.r0_/q;q=2*e.r1_/q-j}f=e.colors_;f.sort(function(F,ba){return F.offset-ba.offset});h=f.length;m=f[0].color;c=f[h-1].color;l=f[0].alpha*a.globalAlpha;a=f[h-1].alpha*a.globalAlpha;o=[];for(var r=0;r<h;r++){var A=f[r];o.push(A.offset*q+j+" "+A.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',m,'"',' color2="',c,'"',' colors="',o.join(","),
'"',' opacity="',a,'"',' g_o_:opacity2="',l,'"',' angle="',i,'"',' focusposition="',d.x,",",d.y,'" />')}else if(e instanceof P)l&&o&&b.push("<g_vml_:fill",' position="',-c.x/l*f*f,",",-c.y/o*h*h,'"',' type="tile"',' src="',e.src_,'" />');else{e=N(a.fillStyle);b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />')}}function p(a,b,c){a=a.m_;return{x:n*(b*a[0][0]+c*a[1][0]+a[2][0])-v,y:n*(b*a[0][1]+c*a[1][1]+a[2][1])-v}}function B(a,b,c){if(isFinite(b[0][0])&&isFinite(b[0][1])&&
isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1])){a.m_=b;if(c)a.lineScale_=ca(da(b[0][0]*b[1][1]-b[0][1]*b[1][0]))}}function z(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function P(a,b){if(!a||a.nodeType!=1||a.tagName!="IMG")throw new C("TYPE_MISMATCH_ERR");if(a.readyState!="complete")throw new C("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=
b;break;default:throw new C("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}function C(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var s=Math,k=s.round,Q=s.sin,R=s.cos,da=s.abs,ca=s.sqrt,n=10,v=n/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var T=Array.prototype.slice;t(document);var Z={init:function(a){var b=a||document;b.createElement("canvas");var c=this;setTimeout(function(){jQuery(w(c.init_,c,b))},0)},init_:function(a){a=a.getElementsByTagName("canvas");
for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=E;t(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",u);a.attachEvent("onresize",J);var b=a.attributes;if(b.width&&b.width.specified)a.style.width=b.width.nodeValue+"px";else a.width=a.clientWidth;if(b.height&&b.height.specified)a.style.height=b.height.nodeValue+"px";else a.height=a.clientHeight}return a}};Z.init();for(var y=[],g=0;g<16;g++)for(var G=0;G<16;G++)y[g*16+G]=g.toString(16)+
G.toString(16);var $={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",
darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",
goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",
lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",
orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",
tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},O={},D={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"},S={},aa={butt:"flat",round:"round"};g=H.prototype;g.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(true);this.textMeasureEl_=null}this.element_.innerHTML=""};g.beginPath=function(){this.currentPath_=[]};g.moveTo=function(a,b){var c=p(this,a,
b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};g.lineTo=function(a,b){var c=p(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};g.bezierCurveTo=function(a,b,c,d,e,f){e=p(this,e,f);a=p(this,a,b);c=p(this,c,d);W(this,a,c,e)};g.quadraticCurveTo=function(a,b,c,d){a=p(this,a,b);c=p(this,c,d);d={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};W(this,d,{x:d.x+(c.x-this.currentX_)/
3,y:d.y+(c.y-this.currentY_)/3},c)};g.arc=function(a,b,c,d,e,f){c*=n;var h=f?"at":"wa",l=a+R(d)*c-v,o=b+Q(d)*c-v;d=a+R(e)*c-v;e=b+Q(e)*c-v;if(l==d&&!f)l+=0.125;a=p(this,a,b);l=p(this,l,o);d=p(this,d,e);this.currentPath_.push({type:h,x:a.x,y:a.y,radius:c,xStart:l.x,yStart:l.y,xEnd:d.x,yEnd:d.y})};g.rect=function(a,b,c,d){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+d);this.lineTo(a,b+d);this.closePath()};g.strokeRect=function(a,b,c,d){var e=this.currentPath_;this.beginPath();this.moveTo(a,
b);this.lineTo(a+c,b);this.lineTo(a+c,b+d);this.lineTo(a,b+d);this.closePath();this.stroke();this.currentPath_=e};g.fillRect=function(a,b,c,d){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+d);this.lineTo(a,b+d);this.closePath();this.fill();this.currentPath_=e};g.createLinearGradient=function(a,b,c,d){var e=new z("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=d;return e};g.createRadialGradient=function(a,b,c,d,e,f){var h=new z("gradientradial");h.x0_=a;h.y0_=
b;h.r0_=c;h.x1_=d;h.y1_=e;h.r1_=f;return h};g.drawImage=function(a){var b,c,d,e,f,h,l,o;d=a.runtimeStyle.width;e=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var i=a.width,j=a.height;a.runtimeStyle.width=d;a.runtimeStyle.height=e;if(arguments.length==3){b=arguments[1];c=arguments[2];f=h=0;l=d=i;o=e=j}else if(arguments.length==5){b=arguments[1];c=arguments[2];d=arguments[3];e=arguments[4];f=h=0;l=i;o=j}else if(arguments.length==9){f=arguments[1];h=arguments[2];l=arguments[3];
o=arguments[4];b=arguments[5];c=arguments[6];d=arguments[7];e=arguments[8]}else throw Error("Invalid number of arguments");var q=p(this,b,c),m=[];m.push(" <g_vml_:group",' coordsize="',n*10,",",n*10,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){var r=[];r.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(q.x/n),",","Dy=",k(q.y/
n),"");var A=p(this,b+d,c),F=p(this,b,c+e);b=p(this,b+d,c+e);q.x=s.max(q.x,A.x,F.x,b.x);q.y=s.max(q.y,A.y,F.y,b.y);m.push("padding:0 ",k(q.x/n),"px ",k(q.y/n),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",r.join(""),", sizingmethod='clip');")}else m.push("top:",k(q.y/n),"px;left:",k(q.x/n),"px;");m.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',n*d,"px;"," height:",n*e,'px"',' cropleft="',f/i,'"',' croptop="',h/j,'"',' cropright="',(i-f-l)/i,'"',' cropbottom="',(j-h-o)/j,'"',
" />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",m.join(""))};g.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',n*10,",",n*10,'"',' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",
k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd));break}if(f){if(c.x==null||f.x<c.x)c.x=f.x;if(d.x==null||f.x>d.x)d.x=f.x;if(c.y==
null||f.y<c.y)c.y=f.y;if(d.y==null||f.y>d.y)d.y=f.y}}b.push(' ">');a?Y(this,b,c,d):X(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};g.fill=function(){this.stroke(true)};g.closePath=function(){this.currentPath_.push({type:"close"})};g.save=function(){var a={};U(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=x(K(),this.m_)};g.restore=function(){if(this.aStack_.length){U(this.aStack_.pop(),this);this.m_=this.mStack_.pop()}};g.translate=function(a,
b){B(this,x([[1,0,0],[0,1,0],[a,b,1]],this.m_),false)};g.rotate=function(a){var b=R(a);a=Q(a);B(this,x([[b,a,0],[-a,b,0],[0,0,1]],this.m_),false)};g.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;B(this,x([[a,0,0],[0,b,0],[0,0,1]],this.m_),true)};g.transform=function(a,b,c,d,e,f){B(this,x([[a,b,0],[c,d,0],[e,f,1]],this.m_),true)};g.setTransform=function(a,b,c,d,e,f){B(this,[[a,b,0],[c,d,0],[e,f,1]],true)};g.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var h=1E3,l={x:0,y:0},o=[],i;i=
this.font;if(S[i])i=S[i];else{var j=document.createElement("div").style;try{j.font=i}catch(q){}i=S[i]={style:j.fontStyle||D.style,variant:j.fontVariant||D.variant,weight:j.fontWeight||D.weight,size:j.fontSize||D.size,family:j.fontFamily||D.family}}j=i;var m=this.element_;i={};for(var r in j)i[r]=j[r];r=parseFloat(m.currentStyle.fontSize);m=parseFloat(j.size);i.size=typeof j.size=="number"?j.size:j.size.indexOf("px")!=-1?m:j.size.indexOf("em")!=-1?r*m:j.size.indexOf("%")!=-1?r/100*m:j.size.indexOf("pt")!=
-1?m/0.75:r;i.size*=0.981;r=i.style+" "+i.variant+" "+i.weight+" "+i.size+"px "+i.family;m=this.element_.currentStyle;j=this.textAlign.toLowerCase();switch(j){case "left":case "center":case "right":break;case "end":j=m.direction=="ltr"?"right":"left";break;case "start":j=m.direction=="rtl"?"right":"left";break;default:j="left"}switch(this.textBaseline){case "hanging":case "top":l.y=i.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":l.y=-i.size/
2.25;break}switch(j){case "right":d=1E3;h=0.05;break;case "center":d=h=500;break}b=p(this,b+l.x,c+l.y);o.push('<g_vml_:line from="',-d,' 0" to="',h,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?X(this,o):Y(this,o,{x:-d,y:0},{x:h,y:i.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/n)+","+k(b.y/n);o.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',
b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',I(a),'" style="v-text-align:',j,";font:",I(r),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",o.join(""))};g.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,false)};g.strokeText=function(a,b,c,d){this.drawText_(a,b,c,d,true)};g.measureText=function(a){if(!this.textMeasureEl_){this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>');
this.textMeasureEl_=this.element_.lastChild}var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};g.clip=function(){};g.arcTo=function(){};g.createPattern=function(a,b){return new P(a,b)};z.prototype.addColorStop=function(a,b){b=N(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};g=C.prototype=Error();g.INDEX_SIZE_ERR=1;g.DOMSTRING_SIZE_ERR=
2;g.HIERARCHY_REQUEST_ERR=3;g.WRONG_DOCUMENT_ERR=4;g.INVALID_CHARACTER_ERR=5;g.NO_DATA_ALLOWED_ERR=6;g.NO_MODIFICATION_ALLOWED_ERR=7;g.NOT_FOUND_ERR=8;g.NOT_SUPPORTED_ERR=9;g.INUSE_ATTRIBUTE_ERR=10;g.INVALID_STATE_ERR=11;g.SYNTAX_ERR=12;g.INVALID_MODIFICATION_ERR=13;g.NAMESPACE_ERR=14;g.INVALID_ACCESS_ERR=15;g.VALIDATION_ERR=16;g.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=Z;CanvasRenderingContext2D=H;CanvasGradient=z;CanvasPattern=P;DOMException=C})();jQuery.webshims.ready("es5",function(E,w,I,t){if(t.styleSheets&&
t.namespaces){w.defineNodeNameProperty("canvas","getContext",{value:function(u){this.getContext||G_vmlCanvasManager.initElement(this);return this.getContext(u)}});w.addReady(function(u,J){t!==u&&E("canvas",u).add(J.filter("canvas")).each(function(){this.getContext||G_vmlCanvasManager.initElement(this)})});E(function(){setTimeout(function(){w.createReadyEvent("canvas")},9)})}})};

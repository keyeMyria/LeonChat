(function(window){var svgSprite='<svg><symbol id="icon-password" viewBox="0 0 1024 1024"><path d="M666.51 338.552v-98.531c0-48.574-38.471-87.876-86.078-87.876h-123.303c-47.467 0-86.078 39.302-86.078 87.876v98.531h-113.062v-98.531c0.139-112.37 89.26-203.568 199.139-203.568h123.442c109.879 0 199.001 91.198 199.001 203.568v98.531h-113.062zM558.706 1004.336h-92.996c-166.757 0-301.962-110.572-301.962-280.927v-323.135h696.919v323.135c0 170.355-135.204 280.927-301.962 280.927v0 0zM526.461 533.264c-43.454 0-78.605 35.981-78.605 80.265 0 33.351 19.929 62.137 48.298 74.037v141.431c0 17.021 13.563 30.722 30.169 30.722s30.169-13.7 30.169-30.722v-141.294c28.369-12.178 48.435-40.825 48.435-74.175 0-44.422-35.151-80.265-78.466-80.265v0 0zM526.461 533.264z"  ></path></symbol><symbol id="icon-human" viewBox="0 0 1024 1024"><path d="M362.338462 504.123077C196.923077 555.323077 78.769231 685.292308 78.769231 862.523077 78.769231 996.430769 271.753846 1024 512 1024s433.230769-39.384615 433.230769-161.476923c0-177.230769-118.153846-311.138462-283.569231-358.4-43.323077 23.630769-94.523077 39.384615-149.661538 39.384615s-106.338462-15.753846-149.661538-39.384615z m149.661538-23.630769c-137.846154 0-248.123077-106.338462-248.123077-240.246154S374.153846 0 512 0s248.123077 106.338462 248.123077 240.246154-110.276923 240.246154-248.123077 240.246154z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function l(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,l)}s((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),n(1),function(e){if(!e.PLUGINS.image)throw new Error("Flmngr plugin requires image plugin to be enabled in Froala.");if(e.PLUGINS.Flmngr)throw new Error("Flmngr plugin was already registered.");var t;e.RegisterCommand("FlmngrImage",{title:"",undo:!1,focus:!1,modal:!0,callback:function(){this.Flmngr.browse("image")},plugin:"Flmngr"}),e.RegisterCommand("FlmngrLink",{title:"",undo:!1,focus:!1,modal:!0,callback:function(){this.Flmngr.browse("link")},plugin:"Flmngr"}),e.RegisterCommand("FlmngrFile",{title:"",undo:!1,focus:!1,modal:!0,callback:function(){this.Flmngr.browse("auto")},plugin:"Flmngr"});var n="M20,6h-7l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h6.2l2,2H20V18z";e.DefineIcon("FlmngrImage",{NAME:"folder",PATH:n}),e.DefineIcon("FlmngrLink",{NAME:"folder",PATH:n}),e.DefineIcon("FlmngrFile",{NAME:"folder",PATH:n}),e.DEFAULTS.imageInsertButtons.push("FlmngrImage");var i=e.DEFAULTS.imageInsertButtons.indexOf("imageManager");i>-1&&e.DEFAULTS.imageInsertButtons.splice(i,1),e.DEFAULTS.filesInsertButtons.push("FlmngrFile"),e.PLUGINS.ImgPen||e.PLUGINS.imageTUI||(e.PLUGINS.imageTUI=function(e){return{_init:function(){},launch:function(){window.closeFlmngrAlertImgPen=function(){e.modals.hide("flmngr.alertImgPen")},e.modals.create("flmngr.alertImgPen","<div style='font-size: 20px;line-height: 60px'>Image Editor</div>","<div style='text-align: left;padding:20px'><p>Please enable ImgPen plugin in order to use image editor with Flmngr file manager</p></div>"),e.modals.show("flmngr.alertImgPen")}}}),e.PLUGINS.Flmngr=function(i){return{_init:function(){var e,t=i.opts.Flmngr&&"string"==typeof i.opts.Flmngr.apiKey?i.opts.Flmngr.apiKey:"FLMNFLMN";window.onFlmngrLoaded=function(){i.isFlmngrLoaded=!0},function(e,t,n){t||(t=document);for(var r=t.getElementsByTagName("script"),o=!1,i=0;i<r.length;i++){var a=r[i].getAttribute("src");a&&-1!==a.indexOf(e)&&(o=!0,r[i])}if(o)return null;var l=t.createElement("script");l.type="text/javascript",null!=n&&(l.readyState?l.onreadystatechange=function(){"loaded"!==l.readyState&&"compvare"!==l.readyState||(l.onreadystatechange=null)}:l.onload=function(){}),l.src=e,t.getElementsByTagName("head")[0].appendChild(l)}((!1===window.N1ED_HTTPS_APP?"http":"https")+"://"+(window.N1ED_PREFIX_APP?window.N1ED_PREFIX_APP+".":"")+"cloud.n1ed.com/cdn/"+t+"/flmngr.js",document,function(){}),i.Flmngr.checkConf()&&!1!==i.opts.Flmngr.actAsUploader&&function(){var e=this;i.opts.events||(i.opts.events={}),i.opts.events["image.inserted"]=function(t){return r(e,void 0,void 0,function(){var e,n,r,a,l;return o(this,function(o){switch(o.label){case 0:e=0,n=t,o.label=1;case 1:return e<n.length?(r=n[e]).src&&r.src.startsWith("blob:")?(a=r.src,[4,fetch(a).then(function(e){return e.blob()})]):[3,3]:[3,4];case 2:l=o.sent(),i.image.edit(i.$(r)),i.image.upload([l]),o.label=3;case 3:return e++,[3,1];case 4:return[2]}})})},i.opts.events["image.uploaded"]=function(e){function t(e,t){console.log(t),i.Flmngr.showUploadError(e)}try{var n=JSON.parse(e);if("ok"in n&&0==n.ok)i.Flmngr.waitForFeatureInit(function(){t(i.Flmngr.getFlmngrInstanceNoWait().getErrorText(n.error),n)});else if("file"in n){var r=i.opts.Flmngr.urlFiles;r.endsWith("/")||(r+="/");var o=(n.file.dir+"/"+n.file.name).replace(/\/\//g,"/");o.startsWith("/")&&(o=o.substr(1)),o=r+o,i.image.insert(o,!1,null,i.image.get(),{link:o})}else t("Server returned incorrect response",n)}catch(e){console.log(e)}return!1},i.opts.imageUploadURL=i.opts.Flmngr.urlFileManager,i.opts.imageUploadParam="file",i.opts.imageUploadParams={action:"uploadFile",dir:i.opts.defaultUploadDir||"/",mode:"AUTORENAME"},i.opts.events["file.inserted"]=function(t){return r(e,void 0,void 0,function(){var e,n,r,a,l;return o(this,function(o){switch(o.label){case 0:e=0,n=t,o.label=1;case 1:return e<n.length?(r=n[e]).href&&r.href.startsWith("blob:")?(a=r.href,[4,fetch(a).then(function(e){return e.blob()})]):[3,3]:[3,4];case 2:l=o.sent(),i.image.edit(i.$(r)),i.image.upload([l]),o.label=3;case 3:return e++,[3,1];case 4:return[2]}})})},i.opts.events["file.uploaded"]=function(e){function t(e,t){console.log(t),i.Flmngr.showUploadError(e),i.events.trigger("file.replaced")}try{var n=JSON.parse(e);if("error"in n&&n.error)i.Flmngr.waitFlmngr(function(){t(i.Flmngr.getFlmngrInstanceNoWait().getErrorText(n.error),n)});else if("data"in n){var r=i.opts.Flmngr.urlFiles;r.endsWith("/")||(r+="/");var o=i.opts.defaultUploadDir||"/";o.endsWith("/")||(o+="/"),o.startsWith("/")&&(o=o.substr(1));var a=n.data.file.name,l=r+o+a;i.file.insert(l,a,null)}else t("Server returned incorrect response",n)}catch(e){console.log(e)}return!1},i.opts.fileUploadURL=i.opts.imageUploadURL,i.opts.fileUploadParam=i.opts.imageUploadParam,i.opts.fileUploadParams=i.opts.imageUploadParams}(),(e=document.createElement("style")).textContent="[data-cmd='FlmngrImage'],[data-cmd='FlmngrFile']".replace(/\]/g,"]:hover > div")+"{ background-color: #c4e3ff !important; }",document.getElementsByTagName("body")[0].appendChild(e),new MutationObserver(function(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.addedNodes)for(var o=function(e){var t=r.addedNodes.item(e);if(t.nodeType===Node.ELEMENT_NODE&&t.classList.contains("fr-popup")){var o=function(e){e.setAttribute("data-styled","true");var t=document.createElement("div");t.textContent="Browse",t.setAttribute("style","position: absolute;left: 0;top: 0;display: flex;justify-content: flex-start;align-items: center;height: 40px;padding-left: 40px;padding-right: 10px;background-color: #dbedfd;z-index: 0;"),e.appendChild(t),e.querySelector("svg").setAttribute("style","position: absolute;z-index: 1;left: 0;top: 0;")},a=t.querySelector(".fr-input-line:first-child input");if(a&&!a.hasAttribute("data-styled")){a.setAttribute("data-styled","true");var l=document.createElement("div");l.className="fr-command fr-btn",l.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 24 24' class='fr-svg'><path d='"+n+"'></path></svg>",o(l),a.parentElement.insertBefore(l,null),l.addEventListener("click",function(){i.Flmngr.browseUrl(a.value,function(e){a.value=e,a.focus()})})}var s=t.querySelector("[data-cmd='FlmngrImage'],[data-cmd='FlmngrFile']");s&&!s.hasAttribute("data-styled")&&(o(s),s.parentElement.setAttribute("style","max-height:40px"))}},a=0;a<r.addedNodes.length;a++)o(a)}}).observe(document.getElementsByTagName("body")[0],{childList:!0,subtree:!0})},checkConf:function(){return!(!i.opts.Flmngr||!i.opts.Flmngr.urlFileManager||"string"!=typeof i.opts.Flmngr.urlFileManager||0===i.opts.Flmngr.urlFileManager.trim().length||!i.opts.Flmngr.urlFiles||"string"!=typeof i.opts.Flmngr.urlFiles||0===i.opts.Flmngr.urlFiles.trim().length)},checkConfWithAlert:function(){return!!i.Flmngr.checkConf()||(window.closeFlmngrAlert=function(){i.modals.hide("flmngr.alert")},i.modals.create("flmngr.alert","<h4>Configure Flmngr file manager<h4>","<div style='text-align: left;padding:20px'><p>Please pass minimum required parameters to Froala to use Flmngr file manager:</p><code><pre>Flmngr: {\n  urlFileManager: 'url-of-flmngr-script-on-server',\n  urlFiles: 'url-of-files-dir-on-server'\n}</pre></code><div style='text-align:right'><button class='fr-command' onclick='window.closeFlmngrAlert()'>Cancel</button><button class='fr-trim-button' style='margin-left:20px' onclick='window.open(\"https://froala-file-manager.com/#conf\", \"_blank\");window.closeFlmngrAlert()'>More info</button></div></div>"),i.modals.show("flmngr.alert"),!1)},showUploadError:function(e){i.modals.create("flmngr.errorUpload","<h4>Unable to upload the file</h4>","<div style='text-align: left;padding:20px'><p>Please check your server side configuration of Flmngr and server side logs of your HTTP webserver.</p><p>Error received:<br><span style='font-weight: bold'>"+e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")+"</span></p></div>"),i.modals.show("flmngr.errorUpload")},getFlmngrInstanceNoWait:function(){if(t)return t;var e=Object.assign({},i.opts.Flmngr||{});return e.integration="froala",e.imgPen=i.ImgPen.getImgPenInstanceNoWait(),t=window.flmngr.create(e),window.flmngr.create(e)},getFlmngrInstance:function(n){t?n(t):i.Flmngr.waitFlmngrAndProbablyImgPen(function(){var r=Object.assign({},i.opts.Flmngr||{});r.integration="froala","ImgPen"in e.PLUGINS?i.ImgPen.getImgPenInstance(function(e){r.imgPen=e,t=window.flmngr.create(r),n(t)}):(t=window.flmngr.create(r),n(t))})},waitFlmngrAndProbablyImgPen:function(t){!0!==i.isFlmngrLoaded||e.PLUGINS.ImgPen&&!0!==i.isImgPenLoaded?setTimeout(function(){i.Flmngr.waitFlmngrAndProbablyImgPen(t)},50):t()},uploadFile:function(e,t){i.Flmngr.checkConfWithAlert()&&i.Flmngr.getFlmngrInstance(function(n){n.upload({filesOrLinks:[e],onFinish:function(e){t(e[0])},onFail:function(e){i.Flmngr.showUploadError(e),t(null)},onCancel:function(){}})})},browseUrl:function(e,t){i.Flmngr.waitFlmngrAndProbablyImgPen(function(){i.Flmngr.checkConfWithAlert()&&i.Flmngr.getFlmngrInstance(function(n){i.edit.off(),n.browse({acceptExtensions:null,isMultiple:!1,selectedFiles:[e],onCancel:function(){i.edit.on()},onFinish:function(e){i.edit.on(),e&&e.length>0&&t(e[0])}})})})},browse:function(e,t,n){i.Flmngr.waitFlmngrAndProbablyImgPen(function(){if(i.Flmngr.checkConfWithAlert()){var t=i.image.get(),n=null,r=null;t&&t.length>0&&(n=t[0])&&n.hasAttribute("src")&&(r=n.getAttribute("src"));var o="image"===e,a=["jpg","jpeg","gip","png","webp","tiff","bmp"];i.Flmngr.getFlmngrInstance(function(t){t.browse({acceptExtensions:o?a:null,isMultiple:!n,selectedFiles:r?[r]:[],onCancel:function(){},onFinish:function(t){for(var r=0;r<t.length;r++){var l=t[r],s=e;if(o&&(s="image"),"auto"===s){var f=l.lastIndexOf(".");if(f>-1){var c=l.substr(f+1);s=a.indexOf(c.toLowerCase())>-1?"image":"link"}else s="link"}"image"===s?i.image.insert(l,!1,void 0,n?i.$(n):void 0):"link"===s&&i.link.insert(l,l,{})}}})})}})}}}}(window.FroalaEditor)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);n(4)(r,{attrs:{"data-js":"kit"},hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'@media (min-width: 768px) {\n  .fr-toolbar .fr-link-insert-layer {\n    width: 400px !important; }\n  .fr-toolbar .fr-input-line:first-child,\n  .fr-toolbar .fr-files-by-url-layer,\n  .fr-popup .fr-input-line:first-child,\n  .fr-popup .fr-files-by-url-layer {\n    display: flex; }\n    .fr-toolbar .fr-input-line:first-child input,\n    .fr-toolbar .fr-files-by-url-layer input,\n    .fr-popup .fr-input-line:first-child input,\n    .fr-popup .fr-files-by-url-layer input {\n      flex: 1 1 100%;\n      border-top-right-radius: 0 !important;\n      border-bottom-right-radius: 0 !important; }\n    .fr-toolbar .fr-input-line:first-child .fr-command.fr-btn,\n    .fr-toolbar .fr-files-by-url-layer .fr-command.fr-btn,\n    .fr-popup .fr-input-line:first-child .fr-command.fr-btn,\n    .fr-popup .fr-files-by-url-layer .fr-command.fr-btn {\n      flex: 0 0 96px;\n      margin: 0 !important;\n      border: solid 1px #999999 !important;\n      border-radius: 0 !important;\n      border-top-right-radius: 2px !important;\n      border-bottom-right-radius: 2px !important;\n      overflow: hidden;\n      height: 46px !important;\n      margin-left: -1px !important; }\n      .fr-toolbar .fr-input-line:first-child .fr-command.fr-btn svg.fr-svg,\n      .fr-toolbar .fr-files-by-url-layer .fr-command.fr-btn svg.fr-svg,\n      .fr-popup .fr-input-line:first-child .fr-command.fr-btn svg.fr-svg,\n      .fr-popup .fr-files-by-url-layer .fr-command.fr-btn svg.fr-svg {\n        top: 2px !important; }\n      .fr-toolbar .fr-input-line:first-child .fr-command.fr-btn > div,\n      .fr-toolbar .fr-files-by-url-layer .fr-command.fr-btn > div,\n      .fr-popup .fr-input-line:first-child .fr-command.fr-btn > div,\n      .fr-popup .fr-files-by-url-layer .fr-command.fr-btn > div {\n        height: 46px !important;\n        font-size: 13.3333px; }\n  .fr-toolbar.fr-disabled .fr-btn {\n    color: #333333; }\n  .fr-command.fr-btn[data-cmd="FlmngrFile"], .fr-command.fr-btn[data-cmd="FlmngrImage"] {\n    position: absolute !important;\n    top: 0; }\n  .fr-popup .fr-input-line {\n    display: flex; } }\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,f=0,c=[],u=n(5);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],t))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(v(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:l}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function m(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertAt.before,n);n.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=n.nc;r&&(e.attrs.nonce=r)}return b(t,e.attrs),m(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=f++;n=s||(s=h(t)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,n,t),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(l=i[a.id]).refs--,r.push(l)}for(e&&d(p(e,t),t),o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var y,F=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=F(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);
// JavaScript Document
(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {				
                var clientWidth = docEl.clientWidth;    
			    if (!clientWidth) return;
                if(clientWidth==375){ 
                     docEl.style.fontSize = '16px';
                }else{								
                    docEl.style.fontSize = 16 * (clientWidth / 375) + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false); //绑定事件
        doc.addEventListener('DOMContentLoaded', recalc, false);
		
})(document, window);
// document.documentElement.style.fontSize = document.documentElement.clientWidth / (375 / 16) + "px";

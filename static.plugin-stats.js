/*! Menu Aprie */
!function(a){a.fn.menuaprie=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

/*! Tab Aprie */
!function(a){a.fn.tabaprie=function(b){b=jQuery.extend({onHover:false,animated:true,transition:'fadeInUp'},b);return this.each(function(){var e=a(this),c=e.children('[tab_aprie_my_id]'),d=0,n='tab-animated',k='tab-active';if(b.onHover==true){var event='mouseenter'}else{var event='click'}e.prepend('<ul class="select-tab"></ul>');c.each(function(){if(b.animated==true){a(this).addClass(n)}e.find('.select-tab').append('<li><a href="javascript:;">'+a(this).attr('tab_aprie_my_id')+'</a></li>')}).eq(d).addClass(k).addClass('tab-'+b.transition);e.find('.select-tab a').on(event,function(){var f=a(this).parent().index();a(this).closest('.select-tab').find('.active').removeClass('active');a(this).parent().addClass('active');c.removeClass(k).removeClass('tab-'+b.transition).eq(f).addClass(k).addClass('tab-'+b.transition);return false}).eq(d).parent().addClass('active')})}}(jQuery);

/*! Resize Load Scroll*/
!function(a){a.fn.lazyaprie=function(){return this.each(function(){var t=a(this),dImg=t.attr('data-image'),iWid=Math.round(t.width()),iHei=Math.round(t.height()),iSiz='w'+iWid+'-h'+iHei+'-p-k-no-nu',img='';if(dImg.match('/s72-c')){img=dImg.replace('/s72-c','/'+iSiz);}else if(dImg.match('/w72-h')){img=dImg.replace('/w72-h72-p-k-no-nu','/'+iSiz);}else if(dImg.match('=w72-h')){img=dImg.replace('=w72-h72-p-k-no-nu','='+iSiz);}else{img=dImg;}
a(window).on('load resize scroll',lazyOnScroll);function lazyOnScroll(){var wHeight=a(window).height(),scrTop=a(window).scrollTop(),offTop=t.offset().top;if(scrTop+wHeight>offTop){var n=new Image();n.onload=function(){t.attr('style','background-image:url('+this.src+')').addClass('lazyload');},n.src=img;}}
lazyOnScroll();});}}(jQuery);

/*! jQuery replaceText by "Cowboy" Ben Alman | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

/*! Aprie fb-root | https://www.aprie.my.id/ |*/
var apriefbroot=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===apriefbroot||0!=document.body.scrollTop&&!1===apriefbroot)&&(!function(){var fb=document.createElement("script");fb.type="text/javascript",fb.async=!0,fb.defer=!0,fb.crossorigin="anonymous",fb.src="https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v9.0&appId=783881688619203&autoLogAppEvents=1";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(fb,a)}(),apriefbroot=!0)},!0);

/*! Sharethis | sticky-share-buttons */
var sharethis=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===sharethis||0!=document.body.scrollTop&&!1===sharethis)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://platform-api.sharethis.com/js/sharethis.js#property=58df00b0bd89c500112d0f77&amp;product=sticky-share-buttons";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),sharethis=!0)},!0);

/*! jQuery replaceDomain by "https://www.aprie.my.id/" | v1.1.0 - https://www.aprie.my.id/ */
$("[href*='https://www.aprie.net/'], [src*='https://www.aprie.net/'], [content*='https://www.aprie.net/']").each(function(){var element=$(this);var href=(element.attr("href")||"").replace("https://www.aprie.net/","https://www.aprie.my.id/");var src=(element.attr("src")||"").replace("https://www.aprie.net/","https://www.aprie.my.id/");var content=(element.attr("content")||"").replace("https://www.aprie.net/","https://www.aprie.my.id/");element.attr("href",href);element.attr("src",src);element.attr("content",content)});for(var images=document.getElementsByTagName("img"),i=0;i<images.length;i++)images[i].src=images[i].src.replace(/.*?:\/\//g,"https://cdn.statically.io/img/");

/*! Lazy load adsense by "https://www.aprie.my.id/" */
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),document.body.className+=" sticky",lazyadsense=!0)},!0),(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-7981263814836966",enable_page_level_ads:!0});

/*! GoogleAnalytics */
var analytics=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===analytics||0!=document.body.scrollTop&&!1===analytics)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.rawgit.org/www.googletagmanager.com/gtag/js?id=UA-107332972-1";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),analytics=!0)},!0);

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-107332972-1');

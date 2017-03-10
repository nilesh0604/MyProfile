requirejs.config({
	baseUrl: "assets",
    paths: {
        "jQuery" : "plugins/jquery.min",
        "bootstrap" : "plugins/bootstrap/js/bootstrap",
        "jpreloader" : "plugins/jpreloader/js/jpreloader.min",
        "detectmobilebrowser" : "plugins/detectmobilebrowser/detectmobilebrowser",
        "debouncer" : "plugins/debouncer/debouncer",
        "easing" : "plugins/easing/jquery.easing.min",
        "sticky" : "plugins/sticky/jquery.sticky",
        "inview" : "plugins/inview/jquery.inview.min",
        "matchHeight" : "plugins/matchHeight/jquery.matchHeight-min",
        "magnific" : "plugins/magnificPopup/jquery.magnific-popup.min",
        "flexslider" : "plugins/flexSlider/jquery.flexslider-min",
        "countTo" : "plugins/countTo/jquery.countTo",
        "morphext" : "plugins/morphext/morphext.min",
        "main" : "js/main",
        "textRotator" : "js/text-rotator",
        "animation" : "js/animation"
    },
    shim: {
    	"bootstrap" : ['jQuery'],
        "jpreloader" : ['jQuery'],
        "detectmobilebrowser" : ['jQuery'],
        "debouncer" : ['jQuery'],
        "easing" : ['jQuery'],
        "sticky" : ['jQuery'],
        "inview" : ['jQuery'],
        "matchHeight" : ['jQuery'],
        "magnific" : ['jQuery'],
        "flexslider" : ['jQuery'],
        "countTo" : ['jQuery'],
        "morphext" : ['jQuery'],
        "main" : ['jQuery'],
        "textRotator" : ['jQuery'],
        "animation" : ['jQuery']
    }

});


require([
	'jQuery', 
	'bootstrap', 
	'jpreloader', 
	'detectmobilebrowser', 
	'debouncer', 
	'easing', 
	'sticky', 
	'inview', 
	'matchHeight', 
	'magnific', 
	'flexslider', 
	'countTo', 
	'morphext', 
	'main', 
	'textRotator', 
	'animation'
	], function(){
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-65560091-1', 'auto');
	  ga('send', 'pageview');
	}) 
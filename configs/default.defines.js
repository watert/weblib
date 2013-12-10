
if(console&&console.log){
    console.log("Requirejs config:",_config);
    console.log("Usable paths:",_config.paths);}

function loadCss(url) {
    url = require.toUrl(url);
    var link = document.createElement("link");
    link.type = "text/css"; link.rel = "stylesheet"; link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}
require.loadCss = loadCss;

// function loadUrl(url){

// }
function cssDefine(arr){ return function(){ for(i in arr){ loadCss(arr[i]); }; }; };
require.cssDefine = cssDefine;
define("coffee",["coffee-script"],function(c){ c.runScripts(); })
define("font-awesome",cssDefine(["libs/bootstrap/css/font-awesome.min.css"]));
define("bootstrap3-css",["font-awesome"],cssDefine(["libs/bootstrap-3.0.0/dist/css/bootstrap.min.css"]));
define("bootstrap-css",["font-awesome"],cssDefine(["libs/bootstrap/css/bootstrap.min.css"]));
define("highlight-css",cssDefine(["libs/highlight.js/styles/xcode.css"]));

var _fonts = require._fonts = {
    "Open Sans":"http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800",
    "Droid Serif":"http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic",
    "PT Serif":"http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic"
};
for(name in _fonts){ define("font/"+name,cssDefine([_fonts[name]])); };


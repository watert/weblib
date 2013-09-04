{
    "baseUrl":"http://localhost/weblib",
    "paths":{
        // Pre Compiler
        "less":"libs/less-1.4.2.min", 
        "coffee-script":"libs/coffee-script",
        // "coffeescript-amd-loader":"libs/coffeescript-amd-loader",
        // Parsers
        "marked":"libs/marked",
        "highlight":"libs/highlight.js/highlight.pack",

        // Polyfills
        "es5-shim":"libs/es5-shim.min",

        // Bootstrap
        "bootstrap":"libs/bootstrap/js/bootstrap.min",
        "bootstrap3":"libs/bootstrap-3.0.0/dist/js/bootstrap.min",

        // Basic
        "jquery":"libs/jquery.min",
        "underscore":"libs/underscore-min",
        "backbone":"libs/backbone-min",
        "ldata":"libs/jQuery.lightDataBind",
        "jquery.ui.widget":"libs/jQuery-File-Upload-8.8.2/js/vendor/jquery.ui.widget",
        "jquery-file-upload":"libs/jQuery-File-Upload-8.8.2/js/jquery.fileupload",
        
        // Visualization
        "d3":"libs/d3.v3.min",
        "highcharts":"libs/highcharts-3.0.5",

        "store":"libs/store.js-master/store.min.js",
        "json":"libs/JSON-js-master/json2"

        // app:"app/base"
    },
    "shim":{
        // "coffee-script":["coffeescript-amd-loader"],
        "store":["json"],
        "json":{
            "init":function(JSON){return window.JSON;}
        },
        // "marked":["es5-shim"],
        "highlight":["highlight-css"],
        "jquery.ui.widget":{
            "deps":["jquery"]
        },
        "jquery-file-upload":{
            "deps":[
                "jquery",
                "jquery.ui.widget",
                "libs/jQuery-File-Upload-8.8.2/js/jquery.iframe-transport.js"
                // "jquery.ui.widget"
            ]
        },
        "ldata":{
            "deps":["jquery"]
        },
        "bootstrap3":{"deps":["bootstrap3-css","jquery"]},
        "bootstrap":{"deps":["bootstrap-css","jquery"]},
        "backbone":{
            "deps":["underscore","jquery"],"exports":"Backbone"
        },
        "app/base":{
            "deps":["backbone","jquery"],
            "exports":"App"
        }
    }
};
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
        "holder":"libs/holder.min",

        // Visualization
        "d3":"libs/d3.v3.min",
        "highcharts":"libs/highcharts-3.0.5",

        // Tools
        "store":"libs/store.js-master/store.min.js",
        "json":"libs/JSON-js-master/json2",
        "jquery.hotkeys":"libs/bootstrap-wysiwyg/external/jquery.hotkeys.js",
        "bootstrap-wysiwyg":"libs/bootstrap-wysiwyg/bootstrap-wysiwyg.js",
        "backbone-forms":"libs/backbone-forms/distribution.amd/backbone-forms.min.js",
        "backbone-forms-bootstrap":"libs/backbone-forms/distribution.amd/templates/bootstrap.js",

        // app:"app/base"
    },
    "shim":{
        // "coffee-script":["coffeescript-amd-loader"],
        "bootstrap-wysiwyg":["jquery-hotkeys"],
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
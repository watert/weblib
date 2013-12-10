/*
    Main Build.
*/
({
    baseUrl:"../",
    name:"main",
    out:"out/main.js",
    paths:{
        jquery:"libs/jquery.min",
        underscore:"libs/underscore-min",
        backbone:"libs/backbone-min",
        less:"libs/less-1.4.2.min",
        d3:"libs/d3.v3.min"
    },
    shim:{
    	"backbone":{
            deps:["underscore","jquery"],exports:"Backbone"
        },
    	"app/base":{
    		deps:["backbone","jquery"],
    		exports:"App"
    	}
    }
})

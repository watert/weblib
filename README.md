WebLib Reference
================

> _The secret to building large apps is never build large apps._ 

> _Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application._ 

> -- Justin Meyer

## Quick Start

__Step 1__: Create an accessable html. 

`sublime ./index.html`

Local or hosted ? WHATEVER.

__Step 2__: add script tag:

`<script src="http://localhost/weblib/default.js"></script>`

This step adds requirejs and it's config at the same time.

__Step 3__: add needed precompiler or style libs: 

`<script> require(["coffee","less","bootstrap3"]); </script>`

_ ENJOY CODING _

### Example

```html
<script src="http://localhost/weblib/require+config.js"></script>

<style type="text/less">
	
</style>
<script> require(["bootstrap3","less","coffee"]); </script>
<script type="text/coffeescript">
	require ["app/base"],(app)->
		console.log "hello, boilerplate"
</script>
```

## Supported Libraries

Just use libraries, without file managing.

Includes most useful libraries already.

### Basic

`jquery`: [jQuery](http://www.jquery.com/), is a fast, small, and feature-rich JavaScript library.

`bootstrap`: [Bootstrap 2.3.2](http://getbootstrap.com/2.3.2/), `bootstrap3` : [Bootstrap 3.0](http://getbootstrap.com/)
: Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.

`underscore`: [Underscore](http://documentcloud.github.io/underscore/) is a utility-belt library for JavaScript

`backbone`: [Backbone.js](http://backbonejs.org/) gives structure to web applications.

### Utilities

`ldata`: [jQuery.lightDataBind](https://github.com/watert/jQuery.lightDataBind) simple enough (in few KBs code) Data binding based on jQuery.

`store`: 

`json`: 

### Tools

`jquery-file-upload`: [jQuery File Upload](http://blueimp.github.io/jQuery-File-Upload/) File Upload widget with multiple file selection, drag&amp;drop support, progress bar, validation and preview images, audio and video for jQuery.

`libs/jquery.pin`

### Visualization

`d3`: [Data-Driven Documents](http://d3js.org/) D3.js is a JavaScript library for manipulating documents based on data.

`highcharts`: [Highcharts](http://highcharts.com) Interactive JavaScript charts for your web projects.

### PreCompilers and Parsers

`less`: [{less}](http://lesscss.org/): The dynamic stylesheet language

`coffee-script`: [CoffeeScript](http://coffeescript.org/) is a little language that compiles into JavaScript.

`marked`: [marked](https://github.com/chjj/marked) A markdown parser and compiler. Built for speed.


## Writing Modules

Just write modules with requirejs define.

### Inline Example

```
<script>
	define("moduleName",["jquery","backbone"],function($,Backbone){
		return Backbone.View.extend({
			events:{},
			render:function(){},
			initialize:function(){}
		});
	});
</script>
```

### Add to app handler

```
<script>
	define("moduleName",["app/base"],function($,App){
		App.Views.module = Backbone.View.extend();
		App.Collections.module = Backbone.View.extend();
		App.Model.module = Backbone.Model.extend();
		var init = function(attrs){
			/* Initialize */
		};
		return init;
	});
</script>
```

### File Example

```
// moduleName.js
define(["jquery","backbone"],function($,Backbone){
	return Backbone.View.extend({
		events:{},
		render:function(){},
		initialize:function(){}
	});
});
```

```
// index.js
require(["jquery","./moduleName.js"],function($,module){
	console.log("added module and use it.",$,module);
});
```




## TODOs

### Team Brand Modules

* app/view/footer: copyright info
* app/view/nav: global part
* app/view/sidebar: if there's an sidebar or style
* app/links

### Libs that about to add

- Tools

	* [jquery.pin](https://github.com/webpop/jquery.pin)
	* notify
	* rich editor like bootstrap.wysiwyd
	* select2
	* Backbone.Form

- Visualize

	* [jquery.sparkline]()
	* [JustGage](http://justgage.com/) [jQuery Knob](http://anthonyterrien.com/knob/) knob is a full circle version of justgage
	* dc.js
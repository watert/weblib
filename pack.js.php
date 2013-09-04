<?php
header("Content-Type: application/javascript  ");

function baseurl(){
	// $approot = substr(dirname(__FILE__),strlen($_SERVER['DOCUMENT_ROOT']));
	$approot = dirname($_SERVER["SCRIPT_NAME"]);
	return sprintf(
	    "%s://%s%s/",
	    isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
	    $_SERVER['HTTP_HOST'],
	    $approot
	);
}
function relativepath(){
	if(!isset($_SERVER["REDIRECT_URL"]))return "";
	return str_replace(dirname($_SERVER["SCRIPT_NAME"])."/", "", $_SERVER["REDIRECT_URL"]);
}



require("libs/require.js");
?>

(function(){
	var _config = require._config = <?php require("configs/default.js"); ?>

	_config.baseUrl = "<?=baseurl()?>";
	require.config(_config);
	
	<? require("configs/default.defines.js");?>
})();

<?php

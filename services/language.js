var languages = [];

function fetchText(key, params, lang) {

	if(typeof lang === "undefined")
		lang = "fr-FR";

	if(typeof key !== "string"){
		try{
			console.log(key);
			return key.toString();
		} catch(err) {
			console.error(err)
			return "Sorry, I can't handle the error message.";
		}
	}

	var keys = key.split('.');
	if (typeof languages[lang] === 'undefined') {
		try {
			languages[lang] = require(__dirname + '/../locales/'+lang);
		} catch (e) {
			console.log(e);
			return key;
		}
	}

	var depth = languages[lang];
	for (var i = 0; i < keys.length; i++) {
		depth = depth[keys[i]];
		if (typeof depth === 'undefined'){
			return key;
		}
	}

	if(typeof depth !== "string"){
		console.log("WARNING: Key found for translation is not a valid locales key: ", key)
		return key;
	}

	var nbParamsFound = (depth.match(/%s/g) || []).length;

	if(nbParamsFound > 0 && nbParamsFound == params.length){
		for(var j=0; j<nbParamsFound; j++){
			depth = depth.replace("%s", params[j]);
		}
	}

	return depth;
}

function capitalizeFirstLetters(key, params, lang) {
	var msg = fetchText(key, params, lang);
	var words = msg.split(' ');
	var res = '';
	for (var i =0; i < words.length; i++) {
		var word = words[i];
		var wordParts = word.split('\'');
		if (wordParts.length > 1)
			res += wordParts[0] + '\'' + wordParts[1].charAt(0).toUpperCase() + word.slice(3);
		else
			res += word.charAt(0).toUpperCase() + word.slice(1);
		if (i < words.length)
			res += ' ';
	}
	return res != '' ? res : key;
}

module.exports = function(lang) {
	return {
		__: function (key, params) {
			if(typeof params === "undefined")
				var params = [];
			return fetchText(key, params, lang);
		},
		M_: function(key, params) {
			if(typeof params === "undefined")
				var params = [];
			return capitalizeFirstLetters(key, params, lang);
		},
		getLang: function(){
			return lang;
		}
	}
}
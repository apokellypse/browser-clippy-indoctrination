// this is the code which will be injected into a given page...

(function() {

	function loadjscssfile(filename, filetype) {
		if (filetype == "js"){ //if filename is a external JavaScript file
			var fileref=document.createElement('script')
			fileref.setAttribute("type","text/javascript")
			fileref.setAttribute("src", filename)
		}
		else if (filetype == "css"){ //if filename is an external CSS file
			var fileref=document.createElement("link")
			fileref.setAttribute("rel", "stylesheet")
			fileref.setAttribute("type", "text/css")
			fileref.setAttribute("href", filename)
		}
		if (typeof fileref != "undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref)
	}

	var jqueryUrl = chrome.runtime.getURL("jquery-1.7.min.js");
	var jsUrl = chrome.runtime.getURL("clippy.js");
	var cssUrl = chrome.runtime.getURL("clippy.css");
  	// document.getElementById("someImage").src = imgURL;

  	loadjscssfile(jqueryUrl, "js");
	loadjscssfile(jsUrl, "js"); //dynamically load and add this .js file
	loadjscssfile(cssUrl, "css"); ////dynamically load and add this .css file

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

	alert('inserted self... giggity');
	console.log('hi');
	console.log(clippy);

	clippy.load('Clippy', function(agent){
		// do anything with the loaded agent
		agent.show();
    });

})();
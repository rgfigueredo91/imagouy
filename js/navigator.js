fetch("https://ipinfo.io", {headers: {Accept: "application/json"}}).then(response => response.json()).then(json => {
	console.log(json)

if (json.country === "UY" && window.location.hash != "#eng"){		
		console.log("Estoy en Uruguay");
		window.location.hash = "#esp";
	}
});
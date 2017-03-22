var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;


app.on('ready', function() {
	//variable for windows being created
	var appWindow, infoWindow;
	//can pass an object with settings BrowserWindow(IN HERE);
	appWindow = new BrowserWindow();
	appWindow.loadURL('http://twitter.com/kasiekelldorf');

	infoWindow = new BrowserWindow({
		//width: 400,
		//height: 300,
		//transparent: true,
		frame: false
	});

	//infoWindow.loadURL('file://' + __dirname + '/info.html');
	infoWindow.loadURL('https://twitter.com/kasiekelldorf/status/753238826890342400');
});

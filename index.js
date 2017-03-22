var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;


app.on('ready', function() {
	//variable for window being created
	var appWindow;
	appWindow = new BrowserWindow();
	appWindow.loadURL('http://twitter.com/kasiekelldorf');
});

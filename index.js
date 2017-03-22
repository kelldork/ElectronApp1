var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;

app.on('ready', function() {
	//variable for windows being created
	var appWindow, infoWindow;
	//can pass an object with settings BrowserWindow(IN HERE);
	appWindow = new BrowserWindow({
		width: 1000,
		height: 600,
		show: false
	});	//appWindow
	appWindow.loadURL('http://twitter.com/kasiekelldorf');

	infoWindow = new BrowserWindow({
		width: 400,
		height: 300,
		//I don't think transparent is doing anything for pinned tweet
		transparent: true,
		frame: false,
		show: false
	});	//infoWindow

	infoWindow.loadURL('file://' + __dirname + '/info.html');
	//infoWindow.loadURL('https://twitter.com/kasiekelldorf/status/753238826890342400');

	appWindow.once('ready-to-show', function() {
		appWindow.show();
		setTimeout(function() {
			infoWindow.show();
			//setTimeout(function() { infoWindow.hide();}, 4000); //hides after 4 seconds
		}, 2000); 	//milliseconds; "after 2 seconds"
	});	//ready-to-show

	ipc.on('closeInfoWindow', function(event, arg){
		event.returnValue='';
		infoWindow.hide();
	});	//closeInfoWindow

});	//app is ready

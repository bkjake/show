// original source: An Intro To Electron - Desktop apps with Javascript https://www.youtube.com/watch?v=mr9Mtm_TRpw
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Initialize global reference to the window object
let win; 

function createWindow() {
    // Create browser window
    win = new BrowserWindow({width: 800, height: 600});
    // icon
    const mainWindow = new BrowserWindow()
    webPreferences: {
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        preload: path.join(app.getAppPath(), 'preload.js'
    }
});

mainWindow.loadURL('https://beerline.com');
    // Open devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

// Quit wne all windows are closed
app.on('window-all-closed', () => {
    // Mac
    if(process.platform !== 'darwin') {
        app.quit();
    }
});


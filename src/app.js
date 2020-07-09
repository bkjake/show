const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('https://beerline.com');

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600});
  
    var menu = Menu.buildFromTemplate([
        {
          label: 'Menu',
            submenu: [
              id, 'Products',
              id, 'Filters',
              id, 'slim-keg',
            ]
        },
    ]);

    Menu.setApplicationMenu(menu); 
  
  }

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join('https://beerline.com'),
    protocol: 'URL',
    slashes: true
  }));

  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});



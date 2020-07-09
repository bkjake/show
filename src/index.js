const { app, BrowserWindow } = require('electron');
const path = require('path');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const Promise = require('request-promise');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { 
// eslint-disable-line global-require
  app.quit();
}

let win;

const url = "https://www.beerline.com";
 
const createWindow = {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  ),

  var request = require("request-promise").defaults({ jar: true });
  var options = {
      method: "POST",
      url: "https://www.beerline.com",
      form: {
          "username": "Username",
          "password": "Password",
          "__RequestVerificationToken": "arWhpLaG57lco0mOzGRTsA3JlZ2K60VP8GpK1MVqjGc9m1GFEDQMz9rYrQOWRMF2bQ9pWtbPqZx8CnXbvR2kIfUGOf6G198oyZPm0Lt93U01",
      },
      headers: {},
      simple: false
  },
  
  request(options).then(function(response) {
      request("https://www.beerline.com"), function(err, res, body) {
          console.log(body);
      };
  }
  .catch(function(e) {
      console.log(e);
  }),
   
  puppeteer
    .launch()
    .then(browser => browser.newPage())
    .then(page => {
      return page.goto(url).then(function() {
        return page.content();
      });
    })
    .then(html => {
      const $ = cheerio.load(html);
      const slimKeg = [];
      $('a[href*="/en/plp/"] h3').each(function() {
        slimKeg.push({
          title: $(this).text(),
        });
      });
  
      console.log(slimKeg);
    })
    .catch(console.error),
  
  // and load the index.html of the app.
  mainWindow.loadURL(path.join("https://www.beerline.com")),

  // Open the DevTools.
  mainWindow.webContents.openDevTools(),
);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

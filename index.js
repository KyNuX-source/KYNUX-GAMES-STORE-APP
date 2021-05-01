const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')
require('electron-reload')(__dirname);
const contextMenu = require('electron-context-menu');

contextMenu({
	prepend: (defaultActions, parameters, browserWindow) => [
	]
});


function createWindow() {
  const win = new BrowserWindow({
    frame: true,
    width: 1000,
    height: 700,
    icon: path.join(__dirname, '/kynuxlogo/kynuxlogo-0.ico'),
    icon: path.join(__dirname, '/kynuxlogo/kynuxlogo-0.png'),
    webPreferences: {
      webviewTag: true,
      //preload: path.join(__dirname, 'preload.js'),
      show: false,
      nodeIntegration: true
    }
  })

  win.removeMenu()
  win.loadFile('loading.html')
  setTimeout(() => win.loadFile('pages/login.html'), 3000)
  //win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

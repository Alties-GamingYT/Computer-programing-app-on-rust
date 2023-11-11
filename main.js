const { app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    icon: 'icon.png',
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: 'hsla(0, 0%, 0%, 0)',
      symbolColor: '#74b1be',
      height: 50
    },
    webPreferences: {
      nodeIntegration: true
    },
    backgroundColor: 'hsla(0, 0%, 0%, 0)'
  })
  win.maximize()
  // Remove the default menu
  // Menu.setApplicationMenu(null);

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
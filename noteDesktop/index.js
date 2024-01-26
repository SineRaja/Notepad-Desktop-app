const { noteWindow } = require('./main'); // This line requires the noteWindow function from the main file.
const { app } = require('electron'); // This line requires the app module from the electron package.

require('electron-reload')(__dirname); // This line sets up Electron Reload to automatically reload the app when changes are made.

app.allowRendererProcessReuse = true; // This line allows the renderer process to be reused between app restarts.

app.whenReady().then(noteWindow); // This line creates the main window of the app and calls the noteWindow function.

const { BrowserWindow } = require('electron'); // This line requires the BrowserWindow class from the electron package.

let desktop; // This line declares a variable called `desktop` to store the reference to the note window.

function noteWindow() {
  // This function creates and displays the note window.
  desktop = new BrowserWindow({
    width: 800, // This sets the width of the note window to 800 pixels.
    height: 600, // This sets the height of the note window to 600 pixels.
    modal: true, // This makes the note window a modal window, which means that it cannot be interacted with until it is closed.
    webPreferences: {
      nodeIntegration: true, // This allows the note window to access Node.js APIs.
      contextIsolation: false, // This disables context isolation, which means that the note window will have access to the global scope of the main process.
    },
  });

  desktop.loadFile('noteDesktop/Desgin/front.html'); // This loads the HTML file for the note window from the specified path.
}

module.exports = {
  noteWindow, // This exports the `noteWindow` function so that it can be used by other modules.
};

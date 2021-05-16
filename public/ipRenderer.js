const { ipcRenderer } = require('electron');

ipcRenderer.on('sendMain', (data) => {
  console.log('web receive msg: ', data)
})
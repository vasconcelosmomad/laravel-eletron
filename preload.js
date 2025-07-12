// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  isElectron: true,
  minimizar: () => require('electron').ipcRenderer.send('janela:minimizar'),
  maximizar: () => require('electron').ipcRenderer.send('janela:maximizar'),
  fechar: () => require('electron').ipcRenderer.send('janela:fechar'),
});

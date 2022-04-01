import { contextBridge, ipcRenderer } from 'electron'

export const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can be accessed using `window.Main.sendMessage`
   */

  sendMessage: (message: string) => {
    ipcRenderer.send('message', message)
  },

  send: (sql: string) => {
    return new Promise((resolve) => {
        ipcRenderer.once('asynchronous-reply', (_, arg) => {
            resolve(arg);
        });
        ipcRenderer.send('asynchronous-message', sql);
    })
  },

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  }
}

contextBridge.exposeInMainWorld('Main', api)
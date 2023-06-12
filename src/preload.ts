// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer } from 'electron';
import env from '../env.json';
import Status from './events';
import { enableDarkMode, disableDarkMode, setFetchMethod } from './utils/darkreader';

console.log('👋 This message is being logged by "preload.ts", included via webpack');

const updateStatus = () => {
  const isOnline = navigator.onLine;
  if (env.ENV === 'development') {
    console.log(isOnline ? 'Got internet connection. 🚀 ' : 'Not got internet connection. 💥');
  }

  ipcRenderer.send(Status.ONLINE_STATUS_CHANGED, { onlineStatus: isOnline });
};

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

updateStatus();

ipcRenderer.on(Status.TOGGLE_DARK_MODE, (_, args) => {
  const { isEnabled } = args;
  setFetchMethod(window);

  if (isEnabled) enableDarkMode();
  else disableDarkMode();
});

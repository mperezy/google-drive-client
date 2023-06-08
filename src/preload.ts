// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer } from 'electron';
import env from '../env.json';

console.log('👋 This message is being logged by "preload.ts", included via webpack');

const updateStatus = () => {
  const isOnline = navigator.onLine;
  if (env.ENV === 'development') {
    console.log(isOnline ? 'Got internet connection. 🚀 ' : 'Not got internet connection. 💥');
  }

  ipcRenderer.send('online-status-changed', { onlineStatus: isOnline });
};

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

updateStatus();
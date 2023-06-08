import { BrowserWindow } from 'electron';

export default (window: BrowserWindow, isProduction: boolean) => {
  window.webContents.on('did-create-window', (popupWindow: BrowserWindow) => {
    popupWindow.setContentSize(1300, 950, false);

    if (isProduction) {
      popupWindow.setMenu(null);
    }
  });
};
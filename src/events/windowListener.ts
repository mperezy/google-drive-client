import { BrowserWindow } from 'electron';

export default (window: BrowserWindow, isProduction: boolean) => {
  window.webContents.on('did-create-window', (popupWindow: BrowserWindow) => {
    popupWindow.setContentSize(1300, 950, false);
    popupWindow.setMinimumSize(800, 500);

    if (isProduction) {
      popupWindow.setMenu(null);
    }
  });
};
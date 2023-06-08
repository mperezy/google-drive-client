import { ipcMain, BrowserWindow } from 'electron';
import { AppObject, Urls } from '../types';

export default (window: BrowserWindow, appObject: AppObject, urls: Urls) => {
  ipcMain.on(
    'online-status-changed',
    (event, data: { onlineStatus: boolean }) => {
      const { onlineStatus } = data;
      const { isAppLoaded, isNoInternetPageShown } = appObject;

      if (!onlineStatus) {
        if (!isNoInternetPageShown) {
          window.loadURL(urls.noInternetUrl).then();
          appObject.isNoInternetPageShown = true;
          appObject.isAppLoaded = false;
        }
      } else if (!isAppLoaded) {
        window
          .loadURL(urls.mainUrl)
          .then(() => {
            window.show();
            appObject.isNoInternetPageShown = false;
            appObject.isAppLoaded = true;
          })
          .catch((error) => console.error('Something went wrong', { error }));
      }
    }
  );
};
import type { BrowserWindow } from 'electron';
import { ipcMain } from 'electron';
import Status from 'ipc-events';
import type { AppObject, Urls } from 'types';

export default (window: BrowserWindow, appObject: AppObject, urls: Urls) => {
  ipcMain.on(Status.ONLINE_STATUS_CHANGED, async (event, data: { onlineStatus: boolean }) => {
    const { onlineStatus } = data;
    const { isAppLoaded, isLoading, isNoInternetPageShown } = appObject;

    if (!appObject.isProduction) console.log({ onlineStatus, appObject });

    if (isLoading) {
      try {
        return window.loadURL(urls.loadingUrl);
      } catch (error) {
        console.log('Something went wrong with Loading URL', { error });
      }
    }

    appObject.isLoading = true;

    try {
      if (!onlineStatus && !isLoading) {
        if (!isNoInternetPageShown) {
          await window.loadURL(urls.noInternetUrl);

          appObject.isNoInternetPageShown = true;
          appObject.isAppLoaded = false;
        }
      } else if (onlineStatus && !isAppLoaded && !isLoading) {
        await window.loadURL(urls.mainUrl);

        window.show();
        appObject.isNoInternetPageShown = false;
        appObject.isAppLoaded = true;
      }
    } catch (error) {
      console.log('Something went wrong', { error });
    } finally {
      appObject.isLoading = false;
    }

    if (appObject.isDarkModeEnabled) {
      window.webContents.send(Status.TOGGLE_DARK_MODE, { isEnabled: appObject.isDarkModeEnabled });
    }
  });
};

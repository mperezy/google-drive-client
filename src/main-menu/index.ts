import type { BrowserWindow } from 'electron';
import { app as electronApp, Menu } from 'electron';
import Status from 'ipc-events';
import dictionary from './dictionary';
import type { AppObject } from 'types';
import { saveConfig } from 'utils/saveConfiguration';

const changeTheme = (window: BrowserWindow, isEnabled: boolean) => {
  window.webContents.send(Status.TOGGLE_DARK_MODE, { isEnabled });
};

export default (window: BrowserWindow, appObject: AppObject, mainUrl: string) => {
  const locale = electronApp.getLocale();
  const wording = dictionary[locale];
  const { app, file, edit } = wording;

  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: 'Google Drive Client',
      submenu: [
        {
          label: app.submenu[0].title,
          accelerator: 'CmdOrCtrl+R',
          click: () =>
            window
              .loadURL(mainUrl)
              .then(() => console.log('**** Google Drive URL was loaded as expected.'))
              .catch((error) =>
                console.error('**** Google Drive URL was NOT loaded as expected', { error }),
              ),
        },
        {
          label: app.submenu[1].title,
          accelerator: 'CmdOrCtrl+Q',
          click: () => electronApp.quit(),
        },
      ],
    },
    {
      label: file.title,
      submenu: [
        {
          label: file.submenu.title,
          submenu: [
            {
              id: 'theme-dark',
              label: file.submenu.options.dark,
              click: () => {
                changeTheme(window, true);
                appObject.isDarkModeEnabled = true;
                saveConfig({ theme: { darkMode: true, lightMode: false } });
              },
            },
            {
              id: 'theme-light',
              label: file.submenu.options.light,
              click: () => {
                changeTheme(window, false);
                appObject.isDarkModeEnabled = false;
                saveConfig({ theme: { darkMode: false, lightMode: true } });
              },
            },
          ],
        },
      ],
    },
    {
      label: edit.title,
      submenu: edit.submenu,
    },
  ];

  return Menu.buildFromTemplate(template);
};

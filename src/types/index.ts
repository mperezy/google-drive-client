import type { BrowserWindow, MenuItemConstructorOptions } from 'electron';

export type AppObject = {
  isAppLoaded: boolean;
  isLoading: boolean;
  isNoInternetPageShown: boolean;
  isDarkModeEnabled: boolean;
  isProduction: boolean;
  popupWindows?: BrowserWindow[];
};

export type Urls = {
  mainUrl: string;
  loadingUrl: string;
  noInternetUrl: string;
};

export type MenuItem = {
  app: {
    submenu: {
      title: string;
    }[];
  };
  file: {
    title: string;
    submenu: {
      title: string;
      options: {
        dark: string;
        light: string;
      };
    };
  };
  edit: {
    title: string;
    submenu: (
      | {
          role: MenuItemConstructorOptions['role'];
          label: string;
        }
      | { type: Extract<MenuItemConstructorOptions['type'], 'separator'> }
    )[];
  };
};

export type Configuration = {
  theme: {
    darkMode: boolean;
    lightMode: boolean;
  };
};

import type { BrowserWindow } from 'electron';

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
};

export type Configuration = {
  theme: {
    darkMode: boolean;
    lightMode: boolean;
  };
};

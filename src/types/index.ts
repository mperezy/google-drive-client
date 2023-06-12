export type AppObject = {
  isAppLoaded: boolean;
  isNoInternetPageShown: boolean;
  isDarkModeEnabled: boolean;
  isProduction: boolean;
}

export type Urls = {
  mainUrl: string;
  noInternetUrl: string;
}

export type MenuItem = {
  file: {
    title: string;
    submenu: {
      title: string;
      options: {
        dark: string;
        light: string;
      }
    }
  }
}

export type Configuration = {
  theme: {
    darkMode: boolean;
    lightMode: boolean;
  }
}
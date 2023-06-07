# Google Drive Client

## Requirements

- Node.js
- Yarn

## How to run

- For development:
  - ```shell
    $ yarn start:dev
    ```
- For production (to see how it looks):
  - ```shell
    $ yarn start:prod
    ```

## How to build installers

- For Linux (Debian based distros):
  - This build process can be only executed in a Linux environment. 
  - ```shell
    $ yarn makeInstallers:linux
    ```
  - The `.deb` installer can be found in `out/make/deb/x64` folder.


- For Windows:
  - This build process can be only executed in a Windows environment.
  - ```shell
    $ yarn makeInstallers:windows
    ```
  - The `.exe` installer can be found in `out/make/squirrel.windows/x64` folder.
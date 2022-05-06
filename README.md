# Mindsea React Native Template

Use react native rename to call the app to whatever you prefer

- https://github.com/junedomingo/react-native-rename

It implements the following technologies:

- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [React Native SVG](https://github.com/react-native-svg/react-native-svg)
- [React Navigation](https://reactnavigation.org/)
- [Husky and Lint-Staged](https://github.com/okonet/lint-staged#user-content-installation-and-setup)
- [i18next](https://react.i18next.com/)

## Setting up React Native

1.  NVM

    - Used to manage multiple active node versions, good for using across multiple projects.
    - Install Node version 14 or up.
    - https://github.com/creationix/nvm#installation

2.  Homebrew

    - Used to install local **tools** that are needed globally.
    - https://brew.sh

3.  NPM or Yarn

    - Used to install local **packages** that are needed globally (or locally).
    - Yarn is fast and efficient compared to npm, but at the end of the day, both serve the same purpose.
    - NPM: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm (best to install NVM prior to NPM).
      - `nvm install --latest-npm`
    - Yarn: https://yarnpkg.com/ (Yarn comes as a npm package).
      - `npm install -g yarn`

4.  Node

    - This should be installed by NVM, when installing NPM.
    - Verify by running `node -v`
    - https://nodejs.org/en/download/package-manager/#nvm
    - Node can alternatively be installed via Homebrew, by running `brew install node`.

5.  React Native CLI

    - Used to start the local server, build your React Native app, among other essential React Native things.
    - This enables you to run a React Native app completely free of an IDE, but IDE's also need this installed too (so don't skip this if you use one).
    - https://facebook.github.io/react-native/docs/understanding-cli
    - `npm install -g react-native-cli`

6.  Rbenv

    - Used to install ruby versions while guaranteeing that dev matches production.
    - Ruby is needed to manage Cocoapods (dependencies on iOS).
    - https://github.com/rbenv/rbenv

7.  Java

    - JDK 11 or higher is needed for Android.
    - Check by running `java -version`
    - Install the latest from internet or run `brew tap homebrew/cask-versions` and then `brew install --cask zulu11`

8.  Git
    - by default git will be case insensitive, which we do not want
    - git config cannot be easily version controlled, so....
    - Please run `git config core.ignorecase false`

## IDE Usage

**VS Code** is recommended for our React Native development, as its linting and formatting plugins are relied upon for both our coding style, and to minimize TypeScript complilation errors. However, **Android Studio** and **Xcode** are also required

### Command Line usage

#### NPM

- Use `npm run {platform}`, so using `npm run ios` will run the iOS app

#### Yarn

- Use `yarn {platform}`, so using `yarn ios` will run the iOS app

### VS Code

- Download from here: https://code.visualstudio.com
- Open VS Code, navigate to the Extensions tab, and install the following plugins:
  - `ESLint`
  - `Prettier`
  - `React Native Tools`
  - `i18n ally`

### Android Studio

- Download from here: https://developer.android.com/studio
- Open Android Studio, and set up an SDK and related tools with the SDK Manager: https://developer.android.com/studio/intro/update#sdk-manager
- Create a new Android Emulator (Tools > AVD Manager)

### Xcode

- Download from here: https://developer.apple.com/xcode/
- Install the command line tools for your version of Xcode from here: https://developer.apple.com/download/more/

## Running the app on Android and iOS

Android Studio comes with emulators that can be installed via the AVD Manager, and Xcode comes with built in simulators. You can run either by selecting the _Debug_ tab in VS Code and selecting a device from the dropdown list.

**Troubleshooting:**

- Make sure to run either `npm install` in the project's root directory before running the project. The project dependencies _are not_ committed to the repository, so this step is necessary.
- For Android, make sure to have set up an emulator with a supported SDK version, using the AVD Manager: https://developer.android.com/studio/run/managing-avds
  - It may also help if you've created a fresh to Android project (it can be empty) to run the emulator before attempting to run the project.

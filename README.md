<h1 align="center" >
    <img src="./.github/logo.png" width = "240px">
</h1>

<h1 align="center"> Plantmanager 🌱💚 </h1>

<h2 align="center"> 
    Take good care of your little plant 🤗.
</h2>

<h3 align="center">
  This app has developed using React Native with Expo.
</h3>

# Cloning this repository

```
git clone https://github.com/RennanD/plantmanager.git
```

# ❗️ Requisites

For this aplication we need have installed:

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/) (Optional)

## 💻 Mobile Application

<h1 align="center">
    <img alt="WebApp" src="./.github/smartphone.svg" width = "120px">
</h1>

<h3 align="center">
  Don't forget to water your plants anymore. We take care to remind you whenever you need it.
</h3>

<p>
  In this project we use:
</p>

- [Expo](https://expo.io/) as React Native framework.
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install/), for save plants in local storage.
- [Expo Notifications](https://docs.expo.io/versions/latest/sdk/notifications/), for send local notification to user.
- [styled-components](https://styled-components.com/) for styles.

### 🔥 Running our fake api

First, change `baseURL` property in `./src/services/api.ts`, for your IP, with `3333` port.
After, open a new terminal window and run `npx json-server ./src/services/server.json --host "your IP" --port 333`

### ⚡️ Start

To start application, run:

```
cd plantmanager
yarn
yarn start

# or

cd plantmanager
npm install
npm run start
```
## To run this app in a emulator/simulator

### IOS 🍎

In Expo server interface, click in `Run on iOS simulator`

### Android 👾

In Expo server interface, click in `Run on Android device/emulator`

## To run this app in a physical device

First, download Expo go in your device.
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US)
  - [IOS](https://apps.apple.com/br/app/expo-go/id982107779)

After, scan QrCode in Expo server interface

# App Demo

<h1 align="center">
    <img alt = "The app" src = "./.github/plantmanager.gif" width = "700px" />
</h1>

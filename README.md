# Simple Master-Detail App

A simple application demonstrating some users' data with a detailed view for each user showing some specific data using Pipedrive public API.

## Main functionality

- User can see all the persons added to his/her account on Pipedrive.
- Users can see the detailed view of each person by tapping on the user card which contains his/her name and photo.
- User's detailed view contains the information about each user like his/her organization, deals, and activities.
- Users can call any person using any number that listed in the contact information section on the detailed view of each user.

## Notes

- Please run the app in a **real device** simulator or emulator for better testing of the app functionalities as virtual simulators or emulators may causes unusual behaviors that are occurred only when run the app on them.

  You [check resources section down below](https://github.com/asamiz/qr-counter#resources) for useful resources to run the apps on different platforms using real device as simulator or emulator.

- When you run the app on the debug mode, you will notice when testing it, it gives you the red error screen when it fails to render something, that's normal behavior of one of our user dependency.

  You can read more about it from [here](https://react-native-error-boundary.js.org/faq#why-i-see-a-red-error-screen-on-development)

## Tech Stack

- [React v18](https://github.com/facebook/react): To use the most recent features added the react core eg: Suspense.
- [React Native v0.69](https://github.com/facebook/react-native): To develop the app for the both platforms Android and iOS using single code base.
- [React Navigation v6](https://github.com/react-navigation/react-navigation): To handle the navigation inside the application.
- [React Native Splash Screen v3](https://github.com/crazycodeboy/react-native-splash-screen): To add native splash screen on both Android and iOS.
- [TypeScript v4](https://github.com/microsoft/TypeScript): To provide types to our JS code.
- [React Query v4](https://github.com/TanStack/query): To handle all API requests and add caching layer to our app.
- [Axios 0.27](https://github.com/axios/axios): To build our own HTTP client.
- [React Native Config v1.4](https://github.com/luggit/react-native-config): To deal with `.env` files.
- [React Native Error Boundary v1.1](https://github.com/carloscuesta/react-native-error-boundary): To provide a nice UX when app throws an error.
- [React Native Fast Image v8.5](https://github.com/DylanVann/react-native-fast-image): To have better experience dealing with lists of images.
- [Jest v28](https://github.com/facebook/jest): To run our unit and E2E tests.
- [Detox v19](https://github.com/wix/Detox): To provide an automated E2E testing.

## Prerequisites

React Native CLI to be installed. You can install it by running the command:

```bash
npm install -g react-native-cli
```

`Nodejs` and its version must be **>=12**

[You can find the latest version here](https://nodejs.org/en/)

Detox CLI to bes installed:

```bash
npm install -g detox-cli
```

**For iOS:**

You need to install `cocopods` to install app ios dependencies, you can install using `Homebrew` it by running the following command:

```bash
brew install cocoapods
```

Simulator or emulator **(real devices)** to run the app on.

## Installation

First clone the repo using `SSH` or `HTTPS`.
Here's an example using `HTTPS`:

```bash
git clone https://github.com/asamiz/simple-master-detail-app.git
```

Change the directory to the simple-master-detail-app directory:

```bash
cd simple-master-detail-app
```

Second run the following command to install project dependencies:

```bash
yarn
```

**IOS**

You will need to make one more step to install pods dependencies, run the following command in the project directory:

```bash
cd ios && pod install && cd ..
```

or using `npx` in the project directory:

```bash
npx pod-install
```

### Run on Android Device

Run the following command on project directory:

```bash
yarn run android
```

### Run on iOS Device

Run the following command on project directory:

```bash
yarn run ios
```

### Run Unit Tests

Run the following command to execute all unit test suites.

```bash
yarn run test:unit
```

### Run E2E Tests

First of all you need to build a new testing version which can be used to installed on a device and run the tests on it, you can do so by running the following command:

**iOS**

```bash
yarn run build:e2e:ios
```

**Android**

```bash
yarn run build:e2e:android
```

To run the tests:

**iOS**

```bash
yarn run test:e2e:ios
```

**Android**

```bash
yarn run test:e2e:android
```

**_Please Note that you must open an emulator or simulator before running the test as Detox will not open the simulator automatically._**

## Demo

**Android**

You can scan the barcode below and it will install automatically on your device

![App QR Code](./assets/images/app-qrcode.png)

or

you can find app APK from this [link](https://drive.google.com/file/d/1pDAsNjOKosL-nqt2CnN4OnoE-PIJHYdJ/view?usp=sharing).

**iOS**

Unfortunately, at the moment I don't have Apple Developer account.

## Resources

[Android: Run apps on a hardware device](https://developer.android.com/studio/run/device)

[iOS: Running Your App in the Simulator or on a Device](https://developer.apple.com/documentation/xcode/running-your-app-in-the-simulator-or-on-a-device)

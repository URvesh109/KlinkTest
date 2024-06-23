Case Study: Interactive Cryptocurrency Dashboard with Coingecko API

### Output

https://github.com/URvesh109/KlinkTest/assets/26654227/ee9e9ea7-7ca0-4ebc-a40b-112ddf1c9b5d



## Requirements

- node >= v20.11.0
- yarn >= 3.6.4
- iOS developer tools (for developing iOS plugins)
- Android SDK and adb

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Another way for iOS

```bash
cd ios/
pod install
cd ..
xed -b ios
<Run app from xcode>
```

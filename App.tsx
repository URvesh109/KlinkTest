import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RecoilRoot, useRecoilValue} from 'recoil';
import Home from './src/homeScreen';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {palette} from './src/theme';
import {Loader, Message, NetworkStatus} from './src/components';
import {networkState} from './src/atoms';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const NetworBarAnimation = () => {
  const [networkBar, setNetworkBar] = React.useState(false);
  const isOnline = useRecoilValue(networkState);

  React.useEffect(() => {
    let id: NodeJS.Timeout;
    if (!isOnline) {
      setNetworkBar(true);
    } else {
      id = setTimeout(() => {
        setNetworkBar(false);
      }, 2000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [isOnline, networkBar]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(networkBar ? 1 : 0, {
        duration: 400,
        easing: Easing.ease,
      }),
      height: withTiming(networkBar ? 30 : 0, {
        duration: 400,
        easing: Easing.ease,
      }),
    };
  }, [networkBar]);

  return (
    <Animated.View style={[animatedStyles]}>
      <NetworkStatus status={isOnline} />
    </Animated.View>
  );
};

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={styles.container}>
          <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Message>
              <Loader>
                <Home />
                <NetworBarAnimation />
              </Loader>
            </Message>
          </SafeAreaView>
        </GestureHandlerRootView>
      </ThemeProvider>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.black,
  },
});

export default App;

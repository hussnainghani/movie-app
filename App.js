/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";

import MovieDetailScreen from "./src/screen/MovieDetailScreen";
import SearchScreen from "./src/screen/SearchScreen";
import HomeDrawerNavigator from "./src/navigator/HomeDrawerNavigator";
import TVDetailScreen from "./src/screen/TVDetailScreen";
import WebViewScreen from "./src/screen/WebViewScreen";
import MovieListScreen from "./src/screen/MovieListScreen";

import OfflineNotice from "./src/component/OfflineNotice";
import MovieSeasonScreen from "./src/screen/MovieSeasonScreen";

import { showOpenAppAd, showInterstitialAd } from "./src/config/Admob";

import mobileAds from "react-native-google-mobile-ads";
import { AppOpenAd, TestIds, AdEventType } from "react-native-google-mobile-ads";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeDrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="TVDetail" component={TVDetailScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureDirection: "vertical",
        }}
      />
      <Stack.Screen name="Webview" component={WebViewScreen} />
      <Stack.Screen name="Movielist" component={MovieListScreen} />
      <Stack.Screen name="Movieseason" component={MovieSeasonScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();

    mobileAds()
      .initialize()
      .then((adapterStatuses) => {
        console.log("initializa Addmob Done");
        showInterstitialAd();
      });
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
      <OfflineNotice />
    </NavigationContainer>
  );
};

export default App;

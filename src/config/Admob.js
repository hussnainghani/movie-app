import React from "react";
import { AppOpenAd, TestIds, AdEventType, InterstitialAd, BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

import { getAdConfig } from "./AdsConfig";

export const showOpenAppAd = async () => {
  const adConfig = getAdConfig();
  const appOpenAd = AppOpenAd.createForAdRequest(TestIds.APP_OPEN, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
  });

  appOpenAd.load();

  setTimeout(() => {
    appOpenAd.show();
  }, 5000);
};

export const showInterstitialAd = () => {
  const adConfig = getAdConfig();
  const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
  });

  interstitial.load();

  setTimeout(() => {
    interstitial.show();
  }, 5000);
};

export const showBannerAd = () => {
  return (
    <>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </>
  );
};

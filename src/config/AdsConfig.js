const adConfig = {
  Ads: {
    AdMob: {
      activated: true,
      banner: "ca-app-pub-3940256099942544/6300978111",
      native: "ca-app-pub-3940256099942544/2247696110",
      interstitial: "ca-app-pub-3940256099942544/1033173712",
    },
    FAN: {
      activated: false,
      banner: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
      native: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
      interstitial: "IMG_16_9_APP_INSTALL#YOUR_PLACEMENT_ID",
    },
    AppLovin: {
      activated: false,
      banner: "a4908c81b9520a3a",
      native: "f8a7c5bc9b3e47fd",
      interstitial: "ef8b29723b050cda",
    },
    Yandex: {
      activated: false,
      banner: "R-M-DEMO-320x50",
      native: "R-M-DEMO-native-i",
      interstitial: "R-M-DEMO-interstitial",
    },
    Unity: {
      activated: false,
      game_id: "14851",
      banner: "bannerads",
      interstitial: "video",
    },
  },
  Config: {
    loading_time: 3,
    interstitial_interval: 3,
    maintenance: false,
    redirect: false,
    redirect_url: "https://www.google.com/",
    more_apps: "https://play.google.com/store/apps/developer?id=WhatsApp+LLC",
  },
};

export const updateAdConfig = async () => {};

export const getAdConfig = () => {
  return adConfig;
};

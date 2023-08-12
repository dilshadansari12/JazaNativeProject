import * as React from "react";
import { QueryClient } from "react-query";
import type { ColorSchemeName } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

// jazasoft admin
import {
  App,
  asyncStore,
  createAuthProvider,
  createDataProvider,
  createI18nProvider,
} from "@jazasoft/react-native-admin";


import type {
  AuthProvider,
  DataProvider,
  Locale,
  Translations,
} from "@jazasoft/react-native-admin";

// rna
import { View, Text, useColorScheme } from "react-native";
import { createTheme, ThemeProvider, type Colors } from "@rneui/themed";
import { AppNavigationContainer, type Role } from "@jazasoft/rna-ui-elements";

import routeMap from "./navigation/RouteMap";
import TabBarIcon from "./navigation/TabBatIcon";
 

// rna

const lightColors: Partial<Colors> = {
  primary: "#1386f8",
  background: "#D5DDE4",
  white: "#FFFFFF",
  black: "rgba(28, 27, 31, 1)",
  //   card: "#FFFFFF",
  //   text: "rgba(28, 27, 31, 1)",
};
const darkColors: Partial<Colors> = {
  primary: "#1386f8",
  background: "#1A2035",
  white: "#333F68",
  black: "rgba(230, 225, 229, 1)",
  //   card: "#333F68",
  //   text: "rgba(230, 225, 229, 1)",
};


// i18n translations
import englishTranslationMessages from "./i18/en";
import hindiTranslationMessages from "./i18/hi";

import defaultAuthProvider from "./defaultAuthProvider";
import {
  authUrl,
  clientId,
  clientSecret,
  appUrl,
  basePath,
  appId,
} from "../config";
import Roles from "./constance/Roles";
const roleList: Role[] = [{ id: Roles.ADMIN.id, name: Roles.ADMIN.name }];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  },
});

const translations: Translations = {
  en: englishTranslationMessages,
  hi: hindiTranslationMessages,
};

const supportedLocales: Locale[] = [
  { locale: "en", name: "English" },
  { locale: "hi", name: "हिंदी" },
];

const i18nProvider = createI18nProvider(translations, supportedLocales);

const defaultDataProvider: DataProvider = {
  list: async () => {},
  query: async () => {},
  mutation: async () => {},
};

export default function SampleApp() {
  // rna
  const [colorScheme, setColorScheme] = React.useState<ColorSchemeName>(null);
  const [authProvider, setAuthProvider] =
    React.useState<AuthProvider>(defaultAuthProvider);
  const [dataProvider, setDataProvider] =
    React.useState<DataProvider>(defaultDataProvider);

  //** Initialize Auth & Data Provider *//
  React.useEffect(() => {
    const initAsync = async () => {
      const allowedRoleIds = roleList
        .filter((e) => e.restricted !== true)
        .map((e) => e.id);

      //** Create Auth & Data Provider */
      const aProvider = await createAuthProvider(authUrl, {
        clientId,
        clientSecret,
        appId,
        log: false,
        allowedRoleIds,
      });
      const dProvider = await createDataProvider(appUrl, {
        basePath,
        timeout: 30000,
        log: false,
      });

      setAuthProvider(aProvider);
      setDataProvider(dProvider);
    };
    initAsync();
  }, []);

  // rna
  const defaultColorScheme = useColorScheme();

  React.useEffect(() => {
    const initAsync = async () => {
      let cScheme = defaultColorScheme;
      try {
        let val = await AsyncStorage.getItem("Store.@color-scheme");
        cScheme =
          val === "dark"
            ? "dark"
            : val === "light"
            ? "light"
            : defaultColorScheme;
      } catch (e) {
        cScheme = "light";
      }
      setColorScheme(cScheme);
    };
    initAsync();
  }, [defaultColorScheme, setColorScheme]);

  const theme = createTheme({
    lightColors,
    darkColors,
    mode: colorScheme === "dark" ? "dark" : "light",
    // components: {
    //   ListItem: (_, localTheme) => ({
    //     containerStyle: {
    //       backgroundColor: localTheme.colors.card,
    //     },
    //   }),
    // },
  });


  const version =
    Constants.expoConfig?.extra?.version || Constants.expoConfig?.version;
  const store = asyncStore(version.replace(/\\./g, "_"));

  return (
    <App
      store={store}
      i18nProvider={i18nProvider}
      authProvider={authProvider}
      dataProvider={dataProvider} 
      queryClient={queryClient} 
    >
      {/* <View style={{marginTop:10}}>
        <Text>Hello World!</Text>
      </View> */}

      {/* rna */}

      <ThemeProvider key={colorScheme} theme={theme}>
        <AppNavigationContainer
          routeMap={routeMap}
          roleList={roleList}
          TabBarIcon={TabBarIcon}
        //   AccountScreen={AccountScreen}
        />
      </ThemeProvider>


    </App>
  );
}

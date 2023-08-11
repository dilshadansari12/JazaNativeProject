import * as React from "react";
import { View, Text } from "react-native";
import { QueryClient } from "react-query";
import Constants from "expo-constants";

// jazasoft
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

import { type Role } from "@jazasoft/rna-ui-elements";

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
      <View>
        <Text>Hello World!</Text>
      </View>
    </App>
  );
}

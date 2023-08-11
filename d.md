 - [ ] **First hello world print**
 ## Installation
**1. Open your terminal.**
 
 -  First install React native 
```javascript
   npx create-expo-app JazaNativeProject
   
   cd JazaNativeProject  
   npx expo start
   ```
   

 - Then Install  Fremwork
 ```javascript
  npx i -S @jazasoft/react-native-admin @jazasoft/rna-ui-elements 
```

 - Then We need to install all **peerDependencies**  for Both admin or elements
 
*Remember: It's may have some  changes or Update . Stay up-to-date when you install   
[👉  native-admin ](https://github.com/jaza-soft/react-native-admin/blob/main/package.json) 
[👉  rna-ui-elements ](https://github.com/jaza-soft/rna-ui-elements/blob/main/example/src/navigation/TabBarIcon.tsx) 
.*

``  - For Now jazasoft/react-native-admin peerDependencies``
```javascript
npm i -S @react-native-async-storage/async-storage @react-native-community/hooks @react-native-community/netinfo axios date-fns date-fns-tz expo-localization expo-secure-store expo-updates react react-native react-query react-native-screens react-native-safe-area-context; 
 ```

``  - For Now jazasoft/rna-ui-elements peerDependencies``
```javascript
npm i -S @jazasoft/react-native-admin @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native-stack @rneui/base @rneui/themed expo-splash-screen react react-error-boundary react-native jazasoft/rna-ui-elements
 ```

**After  install lets setup  startting screen one by one**
  

 - open App.jsx and remove all code and pass only  
   ``export { default } from  './src/SampleApp';``
   
   *👉  why we do that: i also don't know .....*
   
 
 - Create 📂 **src** &rarr; **SimpleApp.tsx**    
  

 ```jsx
import { 
App,
asyncStore,
createAuthProvider,
createDataProvider,
createI18nProvider,
 } from "@jazasoft/react-native-admin";

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
```

👉 *Lets break Code One By one* 
```jsx
<App> </App> 👉  is required for creating native Application
App have four required props to pass 

 - Store for 
 - i18nProvider for 
 - authProvider for 
 - queryClient for 

 
```





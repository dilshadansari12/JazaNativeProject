import TestScreen from "../screens/test/TestScreen";

// loginscreen
import Login from "../screens/auth/Login";
import ForgotPassword from "../screens/auth/ForgotPassword";

// todo

// import Todo from "../screens/Todo/Todo";

import { enhanceScreen } from "@jazasoft/rna-ui-elements";
import type { RouteMap } from "@jazasoft/rna-ui-elements";

const routeMap: RouteMap = {
  // Auth:{
  //   route:"Auth",
  //   initialRouteName:"Login",
  //   routes:[
  //      {
  //        route:"Login",
  //        component:enhanceScreen(Login,{
  //         i18nKey:"Screen.LogIn",
  //         withStatusBar: false,
  //        }),
  //        screenOptions: { headerShown: false },
  //     },
  //    {
  //      route:"ForgotPassword",
  //      component:enhanceScreen(ForgotPassword , {
  //       i18nKey:`Screens.ForgotPassword`
  //      })
  //    }
  //   ]
  // },

  // comman compo
  Base: [
    {
      route: "Test",
      component: enhanceScreen(TestScreen, { i18nKey: `Screens.Test` }),
    },  
    // {
    //   route: "Login",
    //   component: enhanceScreen(Login, { i18nKey: `Screens.Test` }),
    // }

    // {
    //   route: "Todo Application",
    //   component: enhanceScreen(Todo, {
    //     i18nKey: "Screen.LogIn",
    //     withStatusBar: false,
    //   }),
    //   screenOptions: { headerShown: false },
    // },
  ],
};

export default routeMap;

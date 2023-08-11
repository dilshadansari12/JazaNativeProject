import TestScreen from "../screens/test/TestScreen";

import { enhanceScreen } from "@jazasoft/rna-ui-elements";
import type { RouteMap } from "@jazasoft/rna-ui-elements";

const routeMap: RouteMap = {
  Base: [
    {
      route: "Test",
      component: enhanceScreen(TestScreen, { i18nKey: `Screens.Test` }),
    }
  ],
};

export default routeMap;

import { AppRegistry } from "react-native";
import { TabNav } from "./tabNav";

AppRegistry.registerComponent("TabNav", () => TabNav);

AppRegistry.runApplication("TabNav", {
  rootTag: document.getElementById("root")
});

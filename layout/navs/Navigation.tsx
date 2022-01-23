import NavigationDark from "./NavigationDark";
import NavigationLight from "./NavigationLight";
import { darkMode } from "../../utils/constants/constants";

export default function Navigation() {
  return <>{darkMode ? <NavigationDark /> : <NavigationLight />}</>;
}

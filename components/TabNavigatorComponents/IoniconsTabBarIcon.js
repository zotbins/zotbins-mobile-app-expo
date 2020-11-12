import React from "react";
import { Ionicons } from "@expo/vector-icons";

import ZotBinColors from "../../constants/ZotBinColors";

export default function IoniconsTabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={
        props.focused
          ? ZotBinColors.tabIconSelected
          : ZotBinColors.tabIconDefault
      }
    />
  );
}

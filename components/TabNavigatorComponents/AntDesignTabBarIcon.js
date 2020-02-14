import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import ZotBinColors from '../../constants/ZotBinColors';

export default function AntDesignTabBarIcon(props) {
  return (
    <AntDesign
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? ZotBinColors.tabIconSelected : ZotBinColors.tabIconDefault}
    />
  );
}

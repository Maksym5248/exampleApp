import React from 'react';
import { createAppContainer } from 'react-navigation';

import { NavigationService } from '@services';

import AppNavigator from './AppNavigator';

const RootNavigator = createAppContainer(AppNavigator);

function RootNavigatorContainer() {
  return <RootNavigator ref={(ref) => NavigationService.init(ref)} />;
}

export default RootNavigatorContainer;
